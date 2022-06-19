<template>
<div class="section">
    <div class="container">
        <h1 class="title">Secret Page</h1>
        <p>If you've arrived here, you're logged in! Here is your email</p>
        <p>Your logged in e-mail is: {{firebaseUser.email}}</p>
        <p>Data fetched from the server:</p>
        <pre>{{serverData}}</pre>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
definePageMeta({
    middleware: ['auth']
});

const serverData = ref(null);
const firebaseUser = useFirebaseUser();

onMounted(async () => {
    serverData.value = await $fetch('/api/secret');
});
</script>