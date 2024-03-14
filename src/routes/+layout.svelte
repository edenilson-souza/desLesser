<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import { goto } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';

	export const navigation = {
		goToCandidate() {
			goto('/candidate');
		}
	};

	let candidate: string | null = null;

	const checkCandidateData = () => {
		candidate = localStorage.getItem('candidateData') ?? null;
	};

	onMount(() => {
		checkCandidateData();
	});

	const intervalId = setInterval(checkCandidateData, 200);

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<header class="flex justify-between items-center p-4 bg-blue-500 text-white">
	<h1 class="text-2xl font-semibold">Lesser</h1>
	{#if candidate !== null}
		<button
			class="bg-transparent border border-white text-white font-semibold px-4 py-2 rounded"
			on:click={navigation.goToCandidate}>Candidate</button
		>
	{/if}
</header>

<main>
	<slot />
</main>
