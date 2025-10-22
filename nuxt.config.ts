// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },


  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "shadcn-nuxt",
  ],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },

   fonts: {
    families: [
      // do not resolve this font with any provider from `@nuxt/fonts`
      { name: 'Custom Font', provider: 'none' },
      // only resolve this font with the `google` provider
      { name: 'My Font Family', provider: 'google' },
      // specify specific font data - this will bypass any providers
      { name: 'Other Font', src: 'https://example.com/font.woff2', weight: 'bold' },
    ]
  },

  app: {
    head: {
      title: 'QueWIE', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
});
