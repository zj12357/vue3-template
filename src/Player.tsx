import { defineComponent, reactive, computed, toRefs, onMounted } from "vue";
import "xgplayer";
import HlsJsPlayer from "xgplayer-hls.js";
import FlvJsPlayer from "xgplayer-flv.js";
import './Player.less'

export default defineComponent({
  setup() {
    const xg = reactive({
      player: {},

      danmuValue: "",
    });
    const addDanmu = (text: string) => {
      console.log(text);
    };
    onMounted(() => {
      let player = new HlsJsPlayer({
        id: "mse",
        playsinline: true,
        whitelist: [""],
        url:
          "https://hls3a-akm.douyucdn.cn/live/9375414rgdniQBKh_900/playlist.m3u8?wsAuth=35efe8303e74e54d6ca18b6eca041689&token=web-cph-0-9375414-9b6bd5681f83923a7bc9bef6016a993ab99b45b56b033a2b&logo=0&expire=0&did=dfa3be31f0f4ab9c59e2b0ce00081601&pt=2&st=0&origin=tct&mix=0&isp=&v=220120210401&did=dfa3be31f0f4ab9c59e2b0ce00081601&tt=1617278533&sign=9b5967411e67776f93f784e05265edb4&cdn=&rate=2&ver=Douyu_221033005&iar=1&ive=1&hevc=0&fa=0",
        width: "800",
        height: "800",
        autoplay: true,
        fluid: false,
        danmu: {
          comments: [
            {
              duration: 15000,
              id: "2",
              start: 3000,
              txt: "长弹幕长弹幕长弹幕",
              mode: "top",
              style: {
                //弹幕自定义样式
                color: "#ff9500",
                fontSize: "20px",
                border: "solid 1px #ff9500",
                borderRadius: "50px",
                padding: "5px 11px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            },
            {
              duration: 15000,
              id: "3",
              start: 4000,
              txt: "长弹幕长弹幕长弹幕",
              mode: "bottom",
              style: {
                //弹幕自定义样式
                color: "#ff9500",
                fontSize: "20px",
                border: "solid 1px #ff9500",
                borderRadius: "50px",
                padding: "5px 11px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            },
            {
              duration: 15000,
              id: "4",
              start: 5000,
              txt: "长弹幕长弹幕长弹幕",
              mode: "scroll",
              style: {
                //弹幕自定义样式
                color: "#ff9500",
                fontSize: "20px",
                border: "solid 1px #ff9500",
                borderRadius: "50px",
                padding: "5px 11px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            },
            {
              duration: 15000,
              id: "5",
              start: 8000,
              txt: "长弹幕长弹幕长弹幕",
              mode: "scroll",
              style: {
                //弹幕自定义样式
                color: "#ff9500",
                fontSize: "20px",
                border: "solid 1px #ff9500",
                borderRadius: "50px",
                padding: "5px 11px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            },
          ],
          area: {
            start: 0,
            end: 1,
          },
          closeDefaultBtn: false,
          defaultOff: false,
          panel: true,
        },
      });
      player.emit("resourceReady", [
        { name: "高清", url: "url1" },
        { name: "超清", url: "url2" },
      ]);

      console.log(player);

      // player.danmu.sendComment({
      //   //发送弹幕
      //   duration: 15000,
      //   id: "8",
      //   start: 3000,
      //   txt: "666666666666",
      //   style: {
      //     color: "#ff9500",
      //     fontSize: "20px",
      //     border: "solid 1px #ff9500",
      //     borderRadius: "50px",
      //     padding: "5px 11px",
      //     backgroundColor: "rgba(255, 255, 255, 0.1)",
      //   },
      // });
    });
    return () => (
      <div>
        <div id="mse"></div>
        <input type="text" v-model={xg.danmuValue} />
        <button onClick={() => addDanmu(xg.danmuValue)}>添加弹幕</button>
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
        <img
          src="../src/assets/image/anna_no.png"
          data-src="//aidj.zbitcloud.com/aigaming/PC/ai-mybackpack/mycherk/zhudi.png"
          alt=""
          class="lazyload"
        />
      </div>
    );
  },
});
