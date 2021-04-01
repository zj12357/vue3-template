<template>
  <div>
    <h4>这个是一个异步加载数据</h4>
    <div class="home-data" v-for="item in list" :key="item.id">
      <p>{{ item.content }}</p>
    </div>
    <slot name="content" :data="data"></slot>
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
import { defineComponent, reactive, onMounted ,toRefs} from "vue";
import { get } from "./server";
export default defineComponent({
  setup() {
    let repositories = reactive({ list: [] as repositoriesType[] });
    let data='插槽内容插槽内容插槽内容插槽内容'
    onMounted(async () => {
      const res: any = await get("api/v1/sports/index");
      repositories.list = res?.data?.barrage;
      console.log(repositories, "repositories");
    });
    return { 
      // toRefs用于将一个 reactive 对象转化为属性全部为 ref 对象的普通对象  属性解构
      ...toRefs(repositories),
      data
    };
  },
});
</script>
