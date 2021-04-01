import { defineComponent, reactive, computed ,toRefs} from "vue";
import { useRouter } from "vue-router";
import style from "./tsxpage.module.less";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const state =reactive({
      name: "tsx test page",
      list:["新增", "编辑", "删除", "保存", "流程图"]
    }) ;
    console.log(toRefs(state),'toRefs(state)')
    const store = useStore();
    const storeValue = computed(() => store.state.num);

    console.log("store", store, storeValue);

    const route = useRouter();
    const getName = () => {
      alert(state.name);
    };

    const dom = <div>dom gragement test</div>;

    return () => (
      <>
        <div class={style.tsx} onClick={getName}>
          <span>css test:color shoule be green</span>
          <p>{storeValue.value}storeValue</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              store.commit("addNum");
            }}
          >
            tsx触发commit
          </button>
          {dom}
          <h1 class={style.title}>This is an {state.name}</h1>
          <button
            onClick={(e) => {
              e.stopPropagation();
              route.push("/");
            }}
          >
            去首页
          </button>
        </div>
      </>
    );
  },
});
