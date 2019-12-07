<template>
    <div id="firebaseui-auth-container">
    </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from 'firebaseui';
import  "firebaseui/dist/firebaseui.css";


export default {
    name: "Login",
    mounted() {
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        var uiConfig = {
            signInSuccessUrl: "/about",
            signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }
}


</script>