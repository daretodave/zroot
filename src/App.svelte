<script>
    import WorkspaceList from './components/WorkspaceList.svelte';
    import Nav from './components/Nav.svelte';
    import Dash from './routes/Dash.svelte';
    import Loader from './components/Loader.svelte';
    import Auth from './routes/Auth.svelte';

    import {Router, Link, Route} from "svelte-routing";

    export let url = "";

    import {auth} from './firebase';
    import {authState} from 'rxfire/auth';

    let user;
    let loading = true;

    const unsubscribe = authState(auth).subscribe(u => {
        user = u;
        loading = false;
    });

</script>


<svelte:head>
	<!-- fontawesome -->
    <script src="https://kit.fontawesome.com/58f7c2d04d.js"></script>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</svelte:head>


<Nav/>
<Router url="{url}">
    <div>
        <Route path="">
            {#if loading}
                <Loader />
            {:else}
                {#if user}
                    <Dash uid="user.uid"/>
                {:else}
                    <Auth/>
                {/if}
            {/if}
        </Route>
    </div>
</Router>