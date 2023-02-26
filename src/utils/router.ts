import NavigateToOptions = UniNamespace.NavigateToOptions;
import NavigateToSuccessOptions = UniNamespace.NavigateToSuccessOptions;
import {parseUrl} from "@dcloudio/uni-cli-shared/dist/vue/transforms/templateUtils";

/**
 * 普通页面跳转
 * @param url
 * 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数
 *
 * @param animationType
 * 窗口显示的动画类型
 * - auto: 自动选择动画效果
 * - none: 无动画效果
 * - slide-in-right: 从右侧横向滑动效果
 * - slide-in-left: 左侧横向滑动效果
 * - slide-in-top: 从上侧竖向滑动效果
 * - slide-in-bottom: 从下侧竖向滑动效果
 * - fade-in: 从透明到不透明逐渐显示效果
 * - zoom-out: 从小到大逐渐放大显示效果
 * - zoom-fade-out: 从小到大逐渐放大并且从透明到不透明逐渐显示效果
 * - pop-in: 从右侧平移入栈动画效果
 *
 * @param animationDuration
 * 窗口显示动画的持续时间，单位为 ms
 *
 * @param events
 * 页面间通信接口，用于监听被打开页面发送到当前页面的数据
 */

export const goto = (
  url: string | HBuilderX.PageURIString,
  animationType: 'auto' | 'none' | 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'fade-in' | 'zoom-out' | 'zoom-fade-out' | 'pop-in' = 'fade-in',
  animationDuration: number = 300,
  events: any = undefined,
) => new Promise(
  (resolve, reject) => url.endsWith('/index') || url == '/'
    ? uni.switchTab({url, success: (result: any)=> resolve(result), fail: (result: any)=> reject(result)})
    : uni.navigateTo({url, animationType, animationDuration, events, success: (result: any)=> resolve(result), fail: (result: any)=> reject(result)})
)
