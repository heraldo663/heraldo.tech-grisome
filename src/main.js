import DefaultLayout from "~/layouts/Default.vue";
import VueDisqus from 'vue-disqus'

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueDisqus)

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "antialiased font-serif" };
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito:600,700|Open+Sans&display=swap"
  });
}
