<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p v-for="item in value" :key="item">{{item}}</p>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" @toolabClick='toolabFun' :style="{height:'100px'}"/>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from "vue";
import HelloWorld from "./components/HelloWorld.vue";

type provideType = {
  longitude: number;
  latitude: number;
};
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  provide: {
    location: "provide父组件" as string,
    geolocation: {
      longitude: 90,
      latitude: 135,
    } as provideType,
  },
  setup() {
     const data = reactive({
      value: ["新增", "编辑", "删除", "保存", "流程图"],
      
      toolabFun(key:string) {
        console.log(key);
      },
    });
    return {
      ...toRefs(data),
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
