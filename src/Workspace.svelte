<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function remove() {
        dispatch('remove', { id });
    }

    function rename(title) {
        dispatch('rename', {
            id,
            title
        });
    }


    export let id; // document ID
    export let title;

</script>

<span>{ title }</span>

<button on:click={remove}> 🗑 </button>