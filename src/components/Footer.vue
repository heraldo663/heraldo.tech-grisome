<template>
  <footer
    class="text-black text-sm leading-normal w-full flex flex-wrap justify-between mx-auto max-w-6xl py-6 md:py-8 px-6 sm:px-12"
  >
    <div class="w-full sm:w-3/4 mb-4 sm:mb-0">
      <p>
        © All rights are reserved | 2019 | Made by Heraldo Ecard Roque Filho.
      </p>
    </div>
    <div class="w-full sm:w-1/4">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="px-2">
            <a
              href="/sitemap.xml"
              class="border-b border-transparent hover:border-black transition-border-color"
              >Sitemap</a
            >
          </li>
          <li class="px-2">
            <a
              href="/feed.xml"
              class="border-b border-transparent hover:border-black transition-border-color"
              >RSS Feed</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
