<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let name = '';
	let phone = '';
	let email = '';
	let countdown = 15;
	let timer: any = null;
	let showModal = false;

	onMount(() => {
		if (typeof localStorage !== 'undefined') {
			localStorage.removeItem('candidateData');
		}
	});

	const startChallenge = () => {
		timer = setInterval(() => {
			countdown--;
			if (countdown === 0) {
				clearInterval(timer);
				showModal = true;
			}
		}, 1000);
	};

	const submitForm = () => {
		if (name === '' || phone === '' || email === '') {
			showModal = false;
			return;
		}
		localStorage.setItem('candidateData', JSON.stringify({ name, phone, email }));
		clearInterval(timer);
		showModal = true;
	};

	const closeModal = () => {
		countdown = 15;
		showModal = false;
		name = '';
		phone = '';
		email = '';
	};

	const handleOverlayClick = () => {
		closeModal();
	};

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
	<div class="bg-blue-500 py-3 px-4">
		<h1 class="text-2xl font-semibold text-white">Desafio</h1>
	</div>

	<div class="p-6">
		<button id="start-challenge"
			class="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full"
			on:click={startChallenge}
		>
			Iniciar Desafio
		</button>

		{#if countdown > 0}
			<p id="countdown" class="mb-4 text-center text-3xl font-semibold text-blue-500">
				Contagem regressiva: {countdown}s
			</p>
		{/if}

		<form>
			<div class="mb-4">
				<label for="name" class="block text-gray-700 font-semibold">Nome:</label>
				<input
					type="text"
					id="name"
					class="w-full border-gray-300 rounded-md px-3 py-2"
					bind:value={name}
					required
				/>
			</div>
			<div class="mb-4">
				<label for="phone" class="block text-gray-700 font-semibold">Telefone:</label>
				<input
					type="tel"
					id="phone"
					class="w-full border-gray-300 rounded-md px-3 py-2"
					bind:value={phone}
					required
				/>
			</div>
			<div class="mb-4">
				<label for="email" class="block text-gray-700 font-semibold">Email:</label>
				<input
					type="email"
					id="email"
					class="w-full border-gray-300 rounded-md px-3 py-2"
					bind:value={email}
					required
				/>
			</div>

			<button
				class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full"
				on:click={submitForm}
			>
				Enviar
			</button>
		</form>
	</div>

	{#if showModal}
		<button
			class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            id="modal-overlay"
			on:click={handleOverlayClick}
		>
			<div class="bg-white p-6 rounded-lg shadow-md relative">
				<h2 class="text-xl font-semibold">
					{countdown === 0 ? 'Desafio finalizado com falha!' : 'Desafio finalizado com sucesso!'}
				</h2>
				<button
					class="absolute top-0 right-0 mt-1 mr-1 bg-transparent text-gray-500 hover:text-gray-600 font-semibold px-3 py-2 rounded-full"
					on:click={closeModal}
				>
					X
				</button>
				<button
					class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
					on:click={closeModal}
				>
					Fechar
				</button>
			</div>
		</button>
	{/if}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
