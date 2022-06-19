<template>
    <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Sign In</p>
                <button class="delete" aria-label="close" @click="$emit('cancel')"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-light" type="email" placeholder="Email" v-model="email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input is-light" type="password" placeholder="Password" v-model="password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-primary" @click="signIn">Sign In</button>
                <button class="button" @click="$emit('cancel')">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['cancel', 'signedin']);

const email = ref('test@whatever.net');
const password = ref('Abc123!')

defineProps({
    isActive: {
        default: false,
        type: Boolean
    }
})

const signIn = async () => {
    const credentials = await signInUser(email.value, password.value);
    if (credentials) {
        emit('signedin');
    } else {
        console.error(`Error logging in`);
    }
}
</script>