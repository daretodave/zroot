<script>
	import Profile from './Profile.svelte';
	import WorkspaceList from './WorkspaceList.svelte';

	import { auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';

	let user;

	const unsubscribe = authState(auth).subscribe(u => user = u);

	function login() {
		auth.signInWithPopup(googleProvider);
	}
</script>

<svelte:head>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</svelte:head>

<section>

	{#if user}
		<button on:click={ () => auth.signOut() }>Logout</button>
		<Profile name={user.displayName} uid={user.uid} avatar={user.photoURL} />
		<hr>
		<WorkspaceList uid={user.uid} />
	{:else}
		<button on:click={login}>
			Google Sign In
		</button>
	{/if}
</section>