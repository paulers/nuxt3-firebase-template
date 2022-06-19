import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true, // Default: true, problematic during development sometimes
    css: ['assets/styles/main.scss'],
    meta: {
        meta: [ // this goes into the HEAD tag
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        script: [ // these script tags go into the HEAD tag

        ],
        title: 'Nuxt3 Firebase Template',
        link: [
            {   // bring in stuff from a CDN if need be
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            },
            {   // set the favicon
                rel: 'icon',
                type: 'image/png',
                href: '/assets/favicon.png'
            }
        ]
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        // Keys within public, will be also exposed to the client-side
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
            SITE_NAME: process.env.SITE_NAME
        }
    },
    modules: [
        // include modules here
    ],
})
