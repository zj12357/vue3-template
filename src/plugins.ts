// 插件
export default {
  install: (app: any, options: any) => {
    // Plugin code goes here
    // 1.通过添加全局实例方法
    app.config.globalProperties.$translate = options;
    // 2. 添加全局数据
    app.provide("i18n", options);
    // 3.通过全局 mixin 来添加一些组件选项
    app.mixin({
      created() {
        console.log("全局混入");
      },
    });
    // 4.添加全局资源：指令/过滤器/过渡等
    app.directive("width", {
      mounted(el: any, binding: any, vnode: any, oldVnode: any) {
        console.log(el, binding, vnode, oldVnode);

        el.style.width = "200px";
      },
    });
  },
};
