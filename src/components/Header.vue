<template>
  <div
    class="mx-auto max-w-6xl text-base px-6 flex justify-center sm:justify-between py-4 flex-col sm:flex-row items-center"
  >
    <div>
      <g-link to="/" class="font-bold text-black-500 text-xl">Heraldo's Blog</g-link>
    </div>
    <nav>
      <ul class="flex sm:justify-end -mx-2 text-black-500">
        <li class="px-2">
          <g-link
            to="/"
            class="border-b font-nomal border-transparent hover:border-black-500 transition-border-color"
          >Home</g-link>
        </li>
        <li class="px-2">
          <g-link
            to="/#about"
            class="border-b font-normal border-transparent hover:border-black-500 transition-border-color"
          >Who?</g-link>
        </li>
        <li class="px-2">
          <a
            href="/posts"
            class="border-b font-normal border-transparent hover:border-black-500 transition-border-color"
          >Posts</a>
        </li>
        <!-- <li class="px-2">
          <a
            href="/#contact"
            class="border-b font-normal border-transparent hover:border-black-500 transition-border-color"
            >Contact</a
          >
        </li>-->
      </ul>
    </nav>
  </div>
</template>
