<script>
    import AuthType from '../components/AuthType.svelte';
    import {auth, googleProvider, githubProvider} from '../firebase';

    function signIn(event) {
        switch (event.detail.type) {
            case "GITHUB":
                auth.signInWithPopup(githubProvider);
                break;
            case "GOOGLE":
                auth.signInWithPopup(googleProvider);
                break;
            default:
                throw `No auth for type = ${event.detail.type}`
        }
    }
</script>

<div class="container">
    <div class="row mt-5">
        <div class="col-md-5">
            <img src="/brand.png" class="ml-auto d-block" alt="zroot.io" />
        </div>
        <div class="col-md-4">

            <div class="mt-2">
                <div >
                    <AuthType on:auth={signIn} type="GITHUB" name="GitHub" icon="github"/>
                </div>
                <div>
                    <AuthType on:auth={signIn} type="GOOGLE" name="Google" icon="google"/>
                </div>
            </div>
        </div>
    </div>
</div>

