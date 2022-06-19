<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss">
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  #__nuxt {
    flex: 1;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
}
</style>