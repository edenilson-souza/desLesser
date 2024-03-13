<script>
	export let text = 'Button';
	/**
	 * @type {any}
	 */
	export let onClick;
</script>

<button on:click={onClick} class="button">{text}</button>

<style>
	.button {
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.button:hover {
		background-color: #0056b3;
	}
</style>
