import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

/*
    This plugin is run when Nuxt starts up.
    We pull in the firebase API key from Nuxt config,
    initialize the Firebase App, and then initialize
    the firebase user. Once the user is initialized,
    we provide the firebase auth object as $auth in
    the entire Nuxt application.
*/

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY
    };

    const app = initializeApp(firebaseConfig);

    initUser();

    const auth = getAuth();
    nuxtApp.provide('auth', auth);
});