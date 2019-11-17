<template>
  <section class="mx-auto max-w-6xl my-16">
    <SectionTitle>Contact</SectionTitle>
    <form
      method="POST"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div class="flex sm:flex-row flex-col">
        <div class="px-6 w-full">
          <label for="name">Name</label>
          <input
            class="rounded-full shadow w-full"
            type="text"
            required
            name="name"
          />
        </div>
        <div class="px-6 w-full">
          <label for="email">Email</label>
          <input
            class="rounded-full w-full shadow"
            type="email"
            required
            name="email"
          />
        </div>
      </div>

      <div class="px-6 u-full">
        <label for="message">Message</label>
        <textarea class="w-full shadow" name="message"></textarea>
      </div>
    </form>
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
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}
</style>
