<script>
	export let value = '';
	export let placeholder = '';
	export let onInput = () => {};
</script>

<input type="text" bind:value {placeholder} on:input={onInput} />

<style>
	input {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		box-sizing: border-box;
		transition: border-color 0.3s;
	}

	input:focus {
		border-color: #007bff;
		outline: none;
	}
</style>
