<template>
  <div class="home-data-box">
    <div>首页</div>
    <div class="home-data" v-for="item in repositories.list" :key="item.id">
      <p>{{ item.content }}</p>
    </div>
    <p></p>
    <div>数字： {{ number }}</div>
    <div>年龄: {{ age }}</div>
    <button @click="changeNum">改变数字</button>
    <button @click="changeAge">改变年龄</button>
    <button @click="router.push('/Login')">去登录页</button>
    <button @click="router.push('/tsxPage')">去TSX页面</button>
  </div>
</template>
<script lang="ts">
type repositoriesType = {
  avatar: string;
  content: string;
  created_at: string;
  expression: number;
  id: number;
  nickname: string;
  updated_at: string;
};
import { defineComponent, onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
import { get } from "./server";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Home",
  setup: (props, context) => {
    console.log(context, "context参数");

    let repositories = reactive({ list: [] as repositoriesType[] });
    const store = useStore();
    const router = useRouter();
    const number = computed(() => store.state.num);
    const age = computed(() => store.state.listData.age);
    console.log(store.state, "store");
    const changeNum = () => {
      store.commit("addNum");
    };
    const changeAge = () => {
      store.dispatch("setData", { age: 50 });
    };
    onMounted(async () => {
      const res: any = await get("api/v1/sports/index");
      repositories.list = res?.data?.barrage;
      console.log(repositories, "repositories");
    });

    return {
      repositories,
      number,
      changeNum,
      age,
      changeAge,
      router,
    };
  },
});
</script>
<style lang="scss" scoped>
.home-data-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .home-data {
    width: 100%;
    height: auto;
    white-space: pre-wrap;
    p {
     
      word-break: break-all;
      white-space: normal;
      font-size: 14px;
    }
  }
}
</style>
