<!--  -->
<template>
  <div ref="login">登录</div>
  <button @click="show = !show">Toggle</button>
  <transition name="fade">
    <p v-if="show">单元素/组件的过渡单元素/组件的过渡单元素/组件的过渡</p>
  </transition>
  <input v-focus v-model="userID" />
  <p>{{ userID }}</p>
  <button @click="router.push('/')" v-red>去首页</button>
  <p>count: {{ count }}</p>
  <p>倍数： {{ multiple }}</p>
  <div>
    <button @click="increase()">加1</button>
    <button @click="decrease()">减一</button>
  </div>
  <Suspense>
    <template #fallback>
      <div class="loading-box">Loading...</div>
    </template>
    <template #default>
      <async-component>
        <template #content="{ data }">
          {{ data }}
          <p>1231231312313</p>
        </template>
      </async-component>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { log } from "node:console";
import {
  defineComponent,
  onRenderTriggered,
  onRenderTracked,
  defineAsyncComponent,
  watchEffect,
  ref,
  watch,
  reactive,
  toRefs,
  getCurrentInstance,
} from "vue";
import { useRouter } from "vue-router";
import useCount from "./common";
export default defineComponent({
  name: "Login",
  data() {
    return {
      show: true,
    };
  },
  components: {
    // 异步组件
    asyncComponent: defineAsyncComponent(() => {
      return import("./asyncComponent.vue");
    }),
  },
  // 自定义指令
  directives: {
    focus: {
      // 指令的定义
      mounted(el) {
        el.focus();
      },
    },
  },
  mounted() {
    console.log(this.$refs.login, "this.$refs.login");
  },
  setup: () => {
    const router = useRouter();
    const { count, multiple, increase, decrease } = useCount(10);
    const internalInstance = getCurrentInstance();
    console.log(internalInstance, "internalInstance");
//  internalInstance.appContext.config.globalProperties // 访问 globalProperties
    const userID = ref(0);
    console.log(userID, "userID");
    onRenderTriggered((event) => {
      // debugger;
      console.log("onRenderTriggered", event);
    });
    onRenderTracked((event) => {
      // debugger;
      console.log("onRenderTracked", event);
    });
    setTimeout(() => {
      userID.value = 1;
      // -> logs 1
    }, 1000);
    const stop = watchEffect(() => {
      console.log(userID, "watchEffect");
    });
    watch([count, multiple], (newValues, prevValues) => {
      console.log(newValues, "newValues", prevValues, "prevValues");
    });
    //侦听器的取消 watch 取消侦听器用法相同
    setTimeout(() => {
      stop();
    }, 5000);
    return {
      router,
      count,
      multiple,
      increase,
      decrease,
      userID,
    };
  },
});
</script>
<style scoped lang="scss">
.loading-box {
  width: 300px;
  height: 50px;
  background: rgb(168, 24, 104);
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
