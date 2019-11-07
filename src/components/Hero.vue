<template>
  <div class="hero">
    <g-image src="~/assets/img/hero-svg.svg" />
    <h1 class="h1">
      Hi, I’m
      <strong>Heraldo</strong> a fullstack developer.
    </h1>
  </div>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 110px;

  @media (max-width: 1200px) {
    h1 {
      margin-left: 8px;
    }
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-bottom: 60px;
    h1 {
      text-align: center;
      margin-left: 0;
      margin-top: 25px;
    }
  }
}
h1 {
  margin-left: 50px;
  strong {
    color: #4a71bd;
  }
}
</style>
