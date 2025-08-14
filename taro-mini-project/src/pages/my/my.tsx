import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Index extends Component<PropsWithChildren> {
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }
  render () {
    return (
      <View className='index'>
        <Text>我的</Text>
      </View>
    )
  }
}

export default Index
