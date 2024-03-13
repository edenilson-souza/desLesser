<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { beforeUpdate } from 'svelte';

	let token: string | null = '';

	// onMount(() => {
	// 	// Verificar se o token está presente no localStorage
	// 	token = localStorage.getItem('token');

	// 	// Se o token não estiver presente, redirecionar para a página de login
	// 	if (!token) {
	// 		goto('/login');
	// 	}
	// });

	let isAuthenticated = false;

	beforeUpdate(() => {
		const token = localStorage.getItem('token');

		// Verificar se o usuário está autenticado
		isAuthenticated = token !== null;

		// Se não estiver autenticado, redirecionar para a página de login
		if (!isAuthenticated) {
			goto('/login');
		}
	});

	function logout() {
		localStorage.removeItem('token');
		goto('/login');
	}
</script>

<div>
	<h1>Rota Protegida</h1>
	<button on:click={logout}>Logout</button>
</div>
