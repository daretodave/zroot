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
<div>
    <button on:click={remove}>
        <i class="fal fa-ban"></i>
    </button>
    <span>{ title }</span>
</div>