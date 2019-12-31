<template>
  <div :class="[noMb ? 'px-6 mb-6 md:mb-0 inline-block' :  'px-6 mb-8 md:mb-10 inline-block' ]">
    <h2 class="border-b-2 text-black-400 border-blue-300 font-sans font-bold text-2xl sm:text-3xl">
      <slot></slot>
    </h2>
  </div>
</template>


<script>
export default {
  props: ["noMb"]
};
</script>
