<template>
  <teleport to="#msg">
    <div class="msg">
      <h1>{{ msg }}</h1>
      <div class="home"></div>
      <button @click="count++">count is: {{ count }}</button>

      <p>计算属性 {{ twiceTheCounter }}</p>
      <p>provide/ inject {{ userLocation }} {{ userGeolocation.longitude }}</p>
      <p v-width>{{ greetings.greetings.hi }}</p>
      <button @click="emitChange">事件触发</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted,
  watch,
  computed,
  inject,
  getCurrentInstance,
} from "vue";
type provideType = {
  longitude: number;
  latitude: number;
};

interface Hi {
  hi: string;
}
interface greetingsType {
  greetings: Hi;
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      required: false,
    },
  },
  emits: ["toolabClick"],
  setup: (props, context) => {
    // 可以拿到父元素传过来的style样式
    console.log(context.attrs, "context.attrs");

    const emitChange = () => {
      context.emit("toolabClick", "事件触发");
    };

    console.log(props.msg);
    const count = ref(0);
    const twiceTheCounter = computed(() => count.value * 2);
    const userLocation = inject("location") as string;
    const userGeolocation = inject("geolocation") as provideType;
    const greetings = inject("i18n") as greetingsType; // vue插件
    const { ctx } = getCurrentInstance() as any;
    console.log(userLocation, "location");
    console.log(userGeolocation, "geolocation");
    onMounted(() => {
      console.log(props, "onMounted", greetings, "greetings");

      console.log(ctx.$translate);
    });

    watch(count, (newval) => {
      console.log("监听的值变了", count, newval);
    });
    return {
      count,
      twiceTheCounter,
      userLocation,
      userGeolocation,
      greetings,
      emitChange,
    };
  },
});
</script>

<style scoped lang="scss">
#msg{
  width: 100%;
}
.msg {
  display: flex;
  justify-content: center;
  flex-direction: column;
   width: 100%;
}
.home {
  width: 200px;
  height: 200px;
  background: chartreuse;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
