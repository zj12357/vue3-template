import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18nPlugin from './plugins'
import '../src/assets/css/normalize.css'
import "../src/assets/css/base.css"
import 'lazysizes';

const app = createApp(App);

const i18nStrings = {
  greetings: {
    hi: 'Hallo!'
  }
}
// 全局自定义指令
app.directive("red", {
  // Directive has a set of lifecycle hooks:
  // called before bound element's parent component is mounted
  //   beforeMount() {},
  // called when bound element's parent component is mounted
  //   mounted() {},
  // called before the containing component's VNode is updated
  //   beforeUpdate() {},
  // called after the containing component's VNode and the VNodes of its children // have updated
  //   updated() {},
  // called before the bound element's parent component is unmounted
  //   beforeUnmount() {},
  // called when the bound element's parent component is unmounted
  //   unmounted() {}

  mounted(el) {
    // Focus the element
    console.log(el);
    el.style.color = "red";
  },
});

app.use(i18nPlugin, i18nStrings)

app.use(router).use(store).mount("#app");
