<template>
    <footer class="footer">
        <div class="container">
            <span>&copy; {{ new Date().getFullYear() }} {{ config.SITE_NAME }}</span>
        </div>
    </footer>
</template>
<script setup>
const config = useRuntimeConfig();
</script>