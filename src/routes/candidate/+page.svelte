<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';

	let name: string = '';
	let phone: string = '';
	let email: string = '';

	onMount(() => {
		let candidate = localStorage.getItem('candidateData') ?? '';
		const candidateData = JSON.parse(candidate);
		if (candidateData) {
			name = candidateData.name;
			phone = candidateData.phone;
			email = candidateData.email;
		}
	});

	const goBack = () => {
		name = '';
		phone = '';
		email = '';
		if (typeof localStorage !== 'undefined') {
			localStorage.removeItem('candidateData');
		}
		goto('/');
	};

	onDestroy(() => {
		if (typeof localStorage !== 'undefined') {
			localStorage.removeItem('candidateData');
		}
	});
</script>

<div class="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
	<h1 class="text-3xl font-semibold mb-4">Candidate</h1>
	<div class="mb-4">
		<p class="text-gray-700 font-semibold" id="name">Nome:</p>
		<p class="text-gray-900">{name}</p>
	</div>
	<div class="mb-4">
		<p class="text-gray-700 font-semibold" id="phone">Telefone:</p>
		<p class="text-gray-900">{phone}</p>
	</div>
	<div class="mb-4">
		<p class="text-gray-700 font-semibold" id="email">Email:</p>
		<p class="text-gray-900">{email}</p>
	</div>

	<button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded" on:click={goBack}
		>Voltar</button
	>
</div>
