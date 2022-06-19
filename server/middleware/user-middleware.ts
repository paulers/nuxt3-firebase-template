import { useCookie } from 'h3';

export default defineEventHandler((event) => {
    // pull the cookie set by firebase in the frontend
    const userCookie = useCookie(event, 'userCookie');
    // attach it to the context
    event.context.userId = userCookie;
})