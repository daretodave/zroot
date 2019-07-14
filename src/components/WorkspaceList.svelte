<script>
    import Workspace from './Workspace.svelte';
    import { db } from '../firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';


    export let uid;

    let title = '';

    const query = db.collection('workspaces')
            .where('uid', '==', uid)
            .orderBy('created');

    const workspaces = collectionData(query, 'id').pipe(startWith([]));

    function add() {
        db.collection('workspaces').add({
            uid,
            title,
            created: Date.now()
        });

        title = '';
    }

    function rename(event) {
        const { id, title } = event.detail;

        db.collection('workspaces')
            .doc(id)
            .update({ title });
    }

    function remove(event) {
        const { id } = event.detail;

        db.collection('workspaces')
            .doc(id)
            .delete();
    }
</script>

<style>
    input { display: block }
</style>

<hr>
<input bind:value={title}>

<button on:click={add}>Add Workspace</button>
<hr>
{#each $workspaces as workspace}

    <Workspace id={workspace.id} title={workspace.title} on:remove={remove} on:rename={rename} />

{/each}
