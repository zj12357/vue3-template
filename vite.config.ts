import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: "./", //打包路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), //设置别名
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
    modules: {
      localsConvention: "camelCase", // 默认只支持驼峰，修改为横线和驼峰
    },
  },
  json: {
    stringify: true,
  },
  build: {
    manifest: true,
    sourcemap: false,
  },
  server: {
    port: 4000, //启动端口
    open: true,
    proxy: {
      // 选项写法
      "/api": "http://ai-pc.zbitcloud.com", //代理网址
    },
    cors: true,
  },
});
