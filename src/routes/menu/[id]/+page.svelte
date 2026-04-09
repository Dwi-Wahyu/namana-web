<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import { products } from '$lib/data';
	import { Zap, Sparkles, ArrowRight } from 'lucide-svelte';

	const id = $derived(Number(page.params.id));
	const product = $derived(products.find((p) => p.id === id) || products[0]);
</script>

<!-- Navigation -->
<nav
	class="glass-nav fixed top-0 z-50 w-full border-b border-outline-variant/15 bg-surface-container-lowest/70 px-6 py-4 md:px-12"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<a href="/" class="font-headline text-2xl font-black tracking-tighter text-primary">NAMANA</a>

		<div class="hidden space-x-8 font-label text-xs font-bold tracking-widest uppercase md:flex">
			<a href="/menu" class="transition-colors hover:text-primary">Menu</a>
			<a href="/#location" class="transition-colors hover:text-primary">Location</a>
			<a href="/#catering" class="transition-colors hover:text-primary">Catering</a>
		</div>

		<div class="flex items-center space-x-6">
			<button
				class="bg-primary px-6 py-2 font-headline text-xs font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95"
			>
				ORDER NOW
			</button>
		</div>
	</div>
</nav>

<main class="min-h-screen bg-surface">
	<!-- Hero Section -->
	<section class="relative px-6 pt-32 pb-24 md:px-12">
		<div class="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
			<!-- Product Info -->
			<div class="order-2 lg:order-1">
				{#if product.tag}
					<div
						class="mb-8 inline-block bg-primary px-4 py-1 font-headline text-[10px] font-bold tracking-widest text-on-primary uppercase"
					>
						{product.tag}
					</div>
				{/if}

				<h1
					class="mb-12 font-headline text-6xl leading-[0.85] font-black tracking-tighter text-on-surface uppercase md:text-8xl"
				>
					{product.name}
				</h1>

				<div class="mb-16 grid grid-cols-2 gap-8">
					<div class="flex items-center gap-4">
						<div class="bg-primary p-3 text-on-primary">
							<Zap size={24} strokeWidth={3} />
						</div>
						<div>
							<p
								class="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-60"
							>
								Caffeine Level
							</p>
							<p class="font-headline text-sm font-bold tracking-tight text-primary uppercase">
								{product.details?.caffeine || 'High'}
							</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="bg-primary p-3 text-on-primary">
							<Sparkles size={24} strokeWidth={3} />
						</div>
						<div>
							<p
								class="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-60"
							>
								Flavor Profile
							</p>
							<p class="font-headline text-sm font-bold tracking-tight text-primary uppercase">
								{product.details?.flavor || 'Creamy & Bold'}
							</p>
						</div>
					</div>
				</div>

				<div class="flex flex-wrap gap-4">
					<button
						class="bg-primary px-10 py-5 font-headline text-sm font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95"
					>
						ORDER NOW
					</button>
					<a
						href="/menu"
						class="bg-surface-container-highest px-10 py-5 font-headline text-sm font-bold tracking-widest text-on-surface transition-all hover:bg-surface-dim active:scale-95"
					>
						VIEW MENU
					</a>
				</div>
			</div>

			<!-- Product Image -->
			<div class="relative order-1 lg:order-2">
				<div class="group relative aspect-square overflow-hidden bg-primary/10">
					<div
						class="absolute inset-0 bg-primary opacity-0 transition-opacity duration-700 group-hover:opacity-10"
					></div>
					<img
						src={product.image}
						alt={product.name}
						class="h-full w-full scale-[0.8] object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-[0.85] group-hover:grayscale-0"
					/>
					<!-- Decorative frame -->
					<div class="pointer-events-none absolute inset-0 border-[40px] border-primary/5"></div>
				</div>

				<!-- Price Tag -->
				<div
					class="absolute bottom-0 left-0 translate-y-1/2 bg-primary p-8 text-on-primary shadow-2xl md:translate-y-0"
				>
					<p class="mb-2 font-label text-[10px] font-bold tracking-widest uppercase opacity-80">
						Starting at
					</p>
					<p class="font-headline text-4xl leading-none font-black tracking-tighter">
						{product.price}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Vibe Notes -->
	<section class="bg-surface-container-lowest px-6 py-24 md:px-12">
		<div class="mx-auto max-w-7xl">
			<div class="relative border-l-4 border-primary/80 py-12 pl-12">
				<p class="mb-8 font-label text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
					Vibe Notes
				</p>
				<h2
					class="max-w-2xl font-headline text-3xl leading-tight font-black tracking-tighter text-on-surface md:text-5xl"
				>
					{product.vibeNotes ||
						'The perfect companion for deep work. Smooth, bold, and designed to fuel your high-performance morning.'}
				</h2>
			</div>
		</div>
	</section>

	<!-- Gallery -->
	{#if product.gallery && product.gallery.length > 0}
		<section class="px-6 py-24 md:px-12">
			<div class="mx-auto max-w-7xl">
				<div class="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
					<div>
						<h2
							class="font-headline text-5xl leading-none font-black tracking-tighter text-on-surface uppercase"
						>
							Captured by Temanna
						</h2>
						<p class="mt-4 font-body text-sm text-on-surface-variant opacity-60">
							Community-curated digital blue-prints of the morning.
						</p>
					</div>
					<a
						href="#collective"
						class="group flex items-center gap-3 font-headline text-xs font-bold tracking-widest text-primary uppercase"
					>
						Join the collective <ArrowRight
							size={16}
							class="transition-transform group-hover:translate-x-2"
						/>
					</a>
				</div>

				<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
					{#each product.gallery as img (img)}
						<div class="group aspect-square overflow-hidden bg-surface-container-low">
							<img
								src={img}
								alt="Gallery item"
								class="h-full w-full object-cover grayscale-[0.5] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
							/>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Newsletter -->
	<section class="bg-primary px-6 py-32 text-center text-on-primary md:px-12">
		<div class="mx-auto max-w-4xl">
			<h2
				class="mb-8 font-headline text-6xl font-black tracking-tighter uppercase italic md:text-8xl"
			>
				Fuel your inbox.
			</h2>
			<p class="mx-auto mb-12 max-w-xl font-body text-sm opacity-80 md:text-lg">
				Get exclusive access to secret drops and early entry to our co-working spaces.
			</p>

			<div class="relative mx-auto max-w-xl">
				<input
					type="email"
					placeholder="ENTER YOUR EMAIL"
					class="w-full border-b-2 border-white bg-transparent py-4 text-center font-headline font-bold tracking-widest uppercase transition-colors placeholder:text-white focus:border-white focus:outline-none"
				/>
				<button
					class="mt-8 font-headline text-sm font-black tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
				>
					Join
				</button>
			</div>
		</div>
	</section>
</main>

<footer
	class="border-t border-outline-variant/10 bg-surface px-6 pt-24 pb-12 text-on-surface md:px-12"
>
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-16 md:grid-cols-3">
			<div>
				<div class="font-headline text-4xl font-black tracking-tighter text-primary">NAMANA</div>
				<p
					class="mt-8 max-w-xs font-body text-[10px] leading-relaxed tracking-widest uppercase opacity-60"
				>
					© 2024 THE COBALT EDITORIAL. ALL RIGHTS RESERVED.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-8 md:col-span-2">
				<div class="space-y-4">
					<p class="font-label text-[10px] font-black tracking-[0.2em] uppercase opacity-40">
						Navigation
					</p>
					<nav class="flex flex-col space-y-2 font-body text-xs tracking-widest uppercase">
						<a href="/" class="transition-colors hover:text-primary">Experience</a>
						<a href="/menu" class="transition-colors hover:text-primary">Menu</a>
						<a href="/#locations" class="transition-colors hover:text-primary">Locations</a>
					</nav>
				</div>
				<div class="space-y-4">
					<p class="font-label text-[10px] font-black tracking-[0.2em] uppercase opacity-40">
						Legal
					</p>
					<nav class="flex flex-col space-y-2 font-body text-xs tracking-widest uppercase">
						<a href="#privacy" class="transition-colors hover:text-primary">Privacy</a>
						<a href="#terms" class="transition-colors hover:text-primary">Terms</a>
						<a href="#sustainability" class="transition-colors hover:text-primary">Sustainability</a
						>
						<a href="#press" class="transition-colors hover:text-primary">Press</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(h1) {
		word-spacing: 100vw;
	}
</style>
