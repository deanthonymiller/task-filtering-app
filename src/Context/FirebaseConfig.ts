import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCFAK_Xys9k9v99vM9VjGusuXBnb-KuaJg",
    projectId: "task-filtering-app",
    authDomain: "",
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);