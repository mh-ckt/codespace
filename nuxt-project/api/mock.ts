interface IProvinceCitiesData {
  provinces: string[]
  cities: Record<string, string[]>
}

const provinceCitiesData = (): Promise<IProvinceCitiesData> => {
  return Promise.resolve({
    provinces: ['广东', '江苏', '浙江'],
    cities: {
      广东: ['广州', '深圳', '珠海'],
      江苏: ['南京', '苏州', '无锡'],
      浙江: ['杭州', '宁波', '温州'],
    },
  })
}

export { provinceCitiesData }

export type { IProvinceCitiesData }
