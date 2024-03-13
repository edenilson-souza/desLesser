<script context="module">
	// @ts-ignore
	export function guard() {
		const token = localStorage.getItem('token');

		if (!token) {
			return {
				status: 302,
				headers: {
					location: '/login'
				}
			};
		}
	}
</script>
