import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import type { User } from 'firebase/auth';

export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`[${errorCode}] ${errorMessage}`);
        return null;
    }
}

export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`[${errorCode}] ${errorMessage}`);
        return null;
    }
}

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    //@ts-ignore
    firebaseUser.value = buildUserFromFirebaseUser(auth.currentUser);
    const userCookie = useCookie('userCookie', { secure: true, sameSite: true  });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            //@ts-ignore
            firebaseUser.value = buildUserFromFirebaseUser(user);
            userCookie.value = user?.uid;
        } else {
            firebaseUser.value = null;
            userCookie.value = null;
        }
    });
}

export const signOutUser = async () => {
    const auth = getAuth();
    try {
        const result = auth.signOut();
        console.log('Signed out!', result);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`[${errorCode}] ${errorMessage}`);
    }
}

const buildUserFromFirebaseUser = (firebaseUser: User) => {
    return {
        uid: firebaseUser?.uid,
        email: firebaseUser?.email,
        name: firebaseUser?.displayName,
        photo: firebaseUser?.photoURL
    }
}