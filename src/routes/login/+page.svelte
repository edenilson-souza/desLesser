<!-- src/routes/Login.svelte -->
<script>
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	let username = '';
	let password = '';
	const error = writable('');

	async function handleSubmit() {
		if (username === 'usuario' && password === 'senha') {
			localStorage.setItem('token', '123');
			goto('/protected');
		} else {
			error.set('Credenciais inválidas. Tente novamente.');
		}
	}
</script>

<div class="container">
	{#if $error}
		<p class="error">{$error}</p>
	{/if}

	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Username:
			<input type="text" bind:value={username} />
		</label>
		<label>
			Password:
			<input type="password" bind:value={password} />
		</label>
		<button type="submit">Login</button>
	</form>
</div>

<style>
	.container {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #f9f9f9;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	label {
		margin-bottom: 10px;
	}

	input {
		padding: 8px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}

	.error {
		color: red;
		margin-top: 10px;
	}
</style>
