import { sendError, createError } from 'h3';
import type { CompatibilityEvent } from 'h3';

export default defineEventHandler((event: CompatibilityEvent) => {
    
    console.log(event.context);

    if (!event.context.userId) {
        const error = createError({ statusCode: 401, statusMessage: 'Unauthorized' });
        return sendError(event, error, false);
    }

    return {
        secretMessage: 'You could fetch the secret message!'
    }
})