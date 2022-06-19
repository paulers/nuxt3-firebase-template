<template>
    <div id="wrapper">
        <Header />
        <slot />
    </div>
    <Footer />
</template>
<style>
#wrapper {
    flex: 1;
}
</style>