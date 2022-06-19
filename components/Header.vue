<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <NuxtLink to="/" class="navbar-item">
                    <img src="~~/assets/logo.png" width="24" height="24" />
                </NuxtLink>

                <a role="button" class="navbar-burger" :class="{ 'is-active': menuOpened }" aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <NuxtLink to="/" class="navbar-item">
                        {{ config.SITE_NAME }}
                    </NuxtLink>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <client-only>
                            <a class="button is-primary" v-if="!firebaseUser" @click="openModal"><strong>Sign In</strong></a>
                            <a class="button is-primary" v-else @click="signOut"><strong>Sign Out</strong></a>
                        </client-only>
                    </div>
                </div>
            </div>
        </div>
        <LoginModal :is-active="loginModalOpened" @cancel="loginModalOpened = false" @signedin="signin"></LoginModal>
    </nav>
</template>
<script setup>
import { ref } from 'vue';
const menuOpened = ref(false);
const config = useRuntimeConfig();

const loginModalOpened = ref(false);
const firebaseUser = useFirebaseUser();

const signOut = async () => {
    await signOutUser();
    navigateTo('/')
}
const signin = () => {
    console.log('signed in!');
    loginModalOpened.value = false;
}
const openModal = () => {
    loginModalOpened.value = true;
}
</script>