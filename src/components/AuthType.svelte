<script>
    import { createEventDispatcher } from 'svelte';

    export let icon;
    export let name;
    export let type;

    const dispatch = createEventDispatcher();

    function auth() {
        dispatch('auth', { type });
    }
</script>

<button type="button" class="btn btn-outline-primary btn-block btn-md" on:click={auth}>
    <i class="fab fa-{icon}"></i>
    Sign In with {name}
</button>

