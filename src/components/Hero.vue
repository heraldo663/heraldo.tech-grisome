<template>
  <div class="mx-auto max-w-6xl w-full px-6">
    <div class="flex items-center flex-col md:flex-row">
      <g-image
        class="md:w-1/2"
        src="../../static/images/hero-img.svg"
        width="600"
        alt="HI "
      />
      <div class="w-full md:ml-4">
        <h1
          class="font-bold text-3xl text-black-400 text-center w-full md:text-left sm:text-4xl  md:py-3"
        >
          Hi, I’m
          <span class="text-blue-400">Heraldo</span> a fullstack developer.
        </h1>

        <div class="flex justify-center md:justify-start social">
          <a
            href="https://github.com/heraldo663"
            target="_blank"
            class="px-3 py-1 hover:text-blue-400 color-transition"
            rel="noreferrer"
          >
            <GithubIcon size="1.5x"></GithubIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/heraldo-ecard-roque-filho-99645698/"
            target="_blank"
            class="px-3 py-1 hover:text-blue-400 color-transition"
            rel="noreferrer"
          >
            <LinkedinIcon size="1.5x"></LinkedinIcon>
          </a>
          <a
            href="mailto:me@heraldo.tech"
            target="_blank"
            class="px-3 py-1 hover:text-blue-400 color-transition"
            rel="noreferrer"
          >
            <MailIcon size="1.5x"></MailIcon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GithubIcon, LinkedinIcon, MailIcon } from "vue-feather-icons";
export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    MailIcon
  }
};
</script>
