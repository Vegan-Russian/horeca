// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  css: ["@/assets/styles/index.scss"],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: "component",
      }),
    ],
  },
});
