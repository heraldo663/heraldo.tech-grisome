<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="link" to="/">Posts</g-link>
      <g-link class="link" to="/">About</g-link>
      <g-link class="link" to="/about/">Contact</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 50px;
}

strong a {
  font-size: 20px;
  font-weight: 700;
  color: #252525;
  text-decoration: none;
  text-transform: capitalize;
}

.link {
  margin: 0 8px;
  text-decoration: none;
}
</style>