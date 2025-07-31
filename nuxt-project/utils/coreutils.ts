// utils/observer.ts
import type { CanvasOperationParams } from '~/utils/type'

export function getGsapCanvasOperationObj(params: any) {
  console.log(77777, params)

  const {} = params
}

export function getCanvasOperationObj(params: CanvasOperationParams) {
  // 参数检查
  if (typeof params !== 'object') {
    console.error('getCanvasOperationObj 方法入参必须是对象')
    return
  }

  const {
    imgPath,
    canvasId,
    imgTotal = 1,
    imgWidth = 1920,
    imgHeight = 1080,
    imgSuffix = '.jpg',
    alpha = false,
    preLoadingImg = 6,
  } = params

  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null
  if (!canvas || !imgPath) {
    console.error('canvas元素和图片加载路径必须传递')
    return
  }

  const windowWidth = window.innerWidth
  const scale = window.devicePixelRatio || (windowWidth < 768 ? 3 : 1)
  const canvasWidth = imgWidth * scale
  const canvasHeight = Math.floor((imgHeight / imgWidth) * canvasWidth)

  const ctx = canvas.getContext('2d', { alpha }) as CanvasRenderingContext2D
  ctx.imageSmoothingEnabled = true
  canvas.width = canvasWidth
  canvas.height = canvasHeight

  const images: HTMLImageElement[] = []
  const imgHadLoading: boolean[] = new Array(imgTotal).fill(false)

  // 图片加载函数
  const loadingCanvasImg = (loadingNum: number) => {
    if (loadingNum > imgTotal) return
    for (let i = 1; i <= loadingNum; i++) {
      if (!images[i - 1]) {
        // 修正索引
        const img = new Image()
        img.src = `${imgPath}${i}${imgSuffix}`
        img.onload = () => {
          imgHadLoading[i - 1] = true // 使用 i - 1 索引
        }
        images.push(img)
      }
    }
  }

  loadingCanvasImg(Math.min(preLoadingImg, imgTotal))

  try {
    const observerCanvas = new IntersectionObserver((entries) => {
      if (images.length >= imgTotal) {
        observerCanvas.disconnect()
        return
      }
      if (entries[0].isIntersecting) {
        loadingCanvasImg(imgTotal)
      }
    })
    observerCanvas.observe(canvas)
  } catch {
    loadingCanvasImg(imgTotal)
  }

  const operationFrame = { frame: 0 }
  let frameMemory = -1 // 记录上一个渲染的帧

  const render = () => {
    if (!images[operationFrame.frame] || frameMemory === operationFrame.frame) {
      return
    }
    if (imgHadLoading[operationFrame.frame]) {
      frameMemory = operationFrame.frame
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.drawImage(
        images[operationFrame.frame],
        0,
        0,
        canvasWidth,
        canvasHeight
      )
    }
  }

  // 第一个图片加载完成后开始渲染
  images[0] = new Image()
  images[0].src = `${imgPath}1${imgSuffix}`
  images[0].onload = () => {
    imgHadLoading[0] = true
    render()
  }

  return {
    render,
    operationFrame,
    imgTotal,
  }
}
