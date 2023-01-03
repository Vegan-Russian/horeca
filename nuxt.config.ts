// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  css: ["@/assets/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_mixins.scss" as *;',
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: "component",
      }),
      eslintPlugin(),
    ],
  },
});
