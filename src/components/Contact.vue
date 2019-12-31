<template>
  <section class="mx-auto max-w-6xl my-16">
    <SectionTitle v-bind:noMb="true">Contact</SectionTitle>
    <div class="flex items-center flex-col md:flex-row">
      <div class="w-full md:mr-4">
        <form method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <div class="flex sm:flex-row flex-col">
            <div class="px-6 w-full">
              <label class="text-sm my-1 text-gray-600 font-semibold inline-block" for="name">Name</label>
              <input class="rounded-lg h-8 text-sm shadow w-full" type="text" required name="name" />
            </div>
            <div class="px-6 w-full">
              <label class="text-sm my-1 text-gray-600 font-semibold inline-block" for="email">Email</label>
              <input
                class="rounded-lg h-8 text-sm w-full shadow"
                type="email"
                required
                name="email"
              />
            </div>
          </div>

          <div class="px-6 w-full">
            <label
              class="text-sm pt-2 my-1 text-gray-700 font-semibold inline-block"
              for="message"
            >Message</label>
            <textarea class="w-full rounded-lg text-sm shadow" rows="6" name="message"></textarea>
          </div>
          <div class="px-6 py-2 w-1/2 md:w-1/3">
            <input
              class="rounded-lg py-2 cursor-pointer text-sm w-full font-semibold linear-bg shadow"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
      <g-image class="md:w-1/2" src="../../static/images/contact-img.svg" width="570" alt="HI " />
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle";
export default {
  components: { SectionTitle }
};
</script>

<style scoped>
.shadow {
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
}
</style>
