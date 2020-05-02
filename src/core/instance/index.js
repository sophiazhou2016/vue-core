import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue的构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化做了什么？
  // init是哪来的
  this._init(options)
}

initMixin(Vue) // 实现init方法
// 实现众多实例方法
stateMixin(Vue) // $set, $delete, $watch
eventsMixin(Vue) // $ON, $emit, $once, $off
lifecycleMixin(Vue) // _update, $forceUpdate, $destory
renderMixin(Vue) //$nextTick, _render

export default Vue
