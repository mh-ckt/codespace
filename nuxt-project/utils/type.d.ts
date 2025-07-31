export interface CanvasOperationParams {
  imgPath: string // 图片路径，必传
  canvasId: string // canvas ID，必传
  imgTotal?: number // 加载的总图片，默认为 1
  imgWidth?: number // 切图的宽度，默认为 1920
  imgHeight?: number // 切图的高度，默认为 1080
  imgSuffix?: string // 图片后缀，默认为 '.jpg'
  alpha?: boolean // 是否使用透明背景，默认为 false
  preLoadingImg?: number // 预加载图片数量，默认为 6
}

declare global {
  interface Window {
    getCanvasOperationObj: (params: CanvasOperationParams) =>
      | {
          render: () => void
          operationFrame: { frame: number }
          imgTotal: number
        }
      | undefined
    articleI18nMessages: {
      blogFloor: string
      imageLeftFloor: string
      imageRightFloor: string
      twoImagesFloor: string
      customFloorTips: string
      editVideoTips: string
    }
  }
}
