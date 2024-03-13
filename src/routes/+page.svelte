<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="container">
		<div class="welcome">
			<picture>
				<source type="image/webp" srcset={welcome} />
				<img src={welcome_fallback} alt="Welcome to SvelteKit" />
			</picture>
		</div>
		<h1>About this app</h1>

		<p>
			This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
			opening the devtools network panel and reloading.
		</p>

		<!-- <p>
			The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling.
			Try using it with JavaScript disabled!
		</p> -->
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 800px;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
