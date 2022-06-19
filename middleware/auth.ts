export default defineNuxtRouteMiddleware((to, from) => {
    const { $auth } = useNuxtApp();
    // if user's not logged in, redirect to root
    if (!$auth?.currentUser?.uid) {
        return navigateTo('/');
    }
});