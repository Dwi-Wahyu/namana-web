<script lang="ts">
	import { cn } from '$lib/utils';
	import { Plus, ChevronDown } from 'lucide-svelte';
	import { categories, products } from '$lib/data';

	let activeCategory = $state('Espresso');
	let searchQuery = $state('');
	let isFilterOpen = $state(false);

	let filteredProducts = $derived(
		products.filter((p) => {
			const matchesCategory = p.category === activeCategory;
			const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);

	function selectCategory(name: string) {
		activeCategory = name;
		isFilterOpen = false;
	}
</script>

<!-- Navigation (Simplified for Menu) -->
<nav
	class="glass-nav fixed top-0 z-50 w-full border-b border-outline-variant/15 bg-surface-container-lowest/70 px-6 py-4 md:px-12"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<a href="/" class="font-headline text-2xl font-black tracking-tighter text-primary">NAMANA</a>

		<div class="hidden space-x-8 font-label text-xs font-bold uppercase tracking-widest md:flex">
			<a href="/menu" class="border-b-2 border-primary text-primary">Menu</a>
			<a href="/#location" class="hover:text-primary transition-colors">Location</a>
			<a href="/#catering" class="hover:text-primary transition-colors">Catering</a>
		</div>

		<div class="flex items-center space-x-6">
			<a href="#loyalty" class="hidden font-label text-xs font-bold uppercase tracking-widest md:block"
				>Join Loyalty</a
			>
			<button
				class="bg-primary px-6 py-2 font-headline text-xs font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95"
			>
				ORDER NOW
			</button>
		</div>
	</div>
</nav>

<main class="min-h-screen bg-surface pt-24 md:pt-32 pb-24 px-6 md:px-12">
	<div class="mx-auto max-w-7xl">
		<!-- Click-bait Header -->
		<div class="mb-12 text-center md:text-left">
			<h1 class="font-headline text-4xl font-black tracking-tighter text-primary uppercase md:text-6xl">
				THE PERFORMANCE ARCHIVE
			</h1>
		</div>

		<!-- Search & Filter Controls -->
		<div class="grid gap-4 mb-12 md:grid-cols-[1fr_280px]">
			<!-- Search Header -->
			<div class="relative group">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="SEARCH MENU..."
					class="w-full border-2 border-primary bg-transparent px-6 py-4 md:py-6 font-headline text-xl font-bold tracking-tight placeholder:text-primary/30 focus:outline-none focus:ring-0 md:text-2xl"
				/>
			</div>

			<!-- Dropdown Filter -->
			<div class="relative">
				<button
					onclick={() => (isFilterOpen = !isFilterOpen)}
					class="flex w-full items-center justify-between border-2 border-primary bg-surface-container-low px-6 py-4 md:py-6 font-headline text-lg font-bold tracking-tight text-primary transition-all hover:bg-primary/5"
				>
					<span class="uppercase">{activeCategory}</span>
					<ChevronDown class={cn('transition-transform duration-300', isFilterOpen && 'rotate-180')} />
				</button>

				{#if isFilterOpen}
					<div class="absolute left-0 right-0 top-full z-20 mt-2 border-2 border-primary bg-surface shadow-2xl overflow-hidden">
						{#each categories as category}
							<button
								onclick={() => selectCategory(category.name)}
								class={cn(
									'flex w-full items-center gap-4 px-6 py-4 font-headline text-sm font-bold tracking-widest uppercase transition-all hover:bg-primary hover:text-on-primary',
									activeCategory === category.name ? 'bg-primary/10 text-primary' : 'text-on-surface-variant'
								)}
							>
								<category.icon size={18} />
								<span>{category.name}</span>
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filteredProducts as product (product.id)}
				<a
					href="/menu/{product.id}"
					class={cn(
						'group flex flex-col bg-surface-container-lowest transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(8,70,237,0.08)]',
						product.special && 'ring-2 ring-primary ring-inset'
					)}
				>
					<div class="relative aspect-square overflow-hidden bg-surface-container-low">
						{#if product.tag}
							<div class="absolute top-3 left-3 z-10 bg-primary px-2 py-0.5 font-headline text-[7px] font-bold tracking-widest text-on-primary">
								{product.tag}
							</div>
						{/if}
						
						{#if product.special}
							<div class="absolute bottom-3 right-3 z-10 bg-surface-container-lowest px-2 py-0.5 font-headline text-[7px] font-bold tracking-widest text-primary shadow-xl">
								EDITOR'S CHOICE
							</div>
						{/if}

						<img
							src={product.image}
							alt={product.name}
							class="h-full w-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
						/>
					</div>

					<div class="flex flex-col p-5">
						<h3 class="font-headline text-lg font-black leading-tight tracking-tight uppercase">
							{product.name}
						</h3>
						
						<div class="mt-4 pt-4 border-t border-outline-variant/15 flex items-center justify-between">
							<span class="font-headline text-lg font-bold text-primary">
								{product.price}
							</span>
							<button
								class="bg-primary flex h-8 w-8 items-center justify-center text-on-primary transition-all hover:bg-primary-dim active:scale-90"
							>
								<Plus size={18} strokeWidth={3} />
							</button>
						</div>
					</div>
				</a>
			{/each}

			{#if filteredProducts.length === 0}
				<div class="col-span-full py-24 text-center">
					<p class="font-headline text-2xl font-black text-on-surface-variant opacity-40 uppercase tracking-widest">
						No performance caffeine found.
					</p>
				</div>
			{/if}
		</div>
	</div>
</main>

<footer class="bg-inverse-surface px-6 pt-24 pb-12 text-on-primary md:px-12">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-16 md:grid-cols-3">
			<div>
				<div class="font-headline text-4xl font-black tracking-tighter text-primary">NAMANA</div>
				<p class="mt-8 max-w-xs font-body text-sm leading-relaxed opacity-60">
					JL. A. P. PETTARANI NO. 102<br />MAKASSAR, INDONESIA
				</p>
			</div>

			<div class="flex flex-col items-end space-y-8 md:col-span-2">
				<div class="flex space-x-8 font-headline text-[10px] font-bold tracking-widest uppercase">
					<a href="#instagram" class="hover:text-primary transition-colors">Instagram</a>
					<a href="#privacy" class="hover:text-primary transition-colors">Privacy</a>
					<a href="#terms" class="hover:text-primary transition-colors">Terms</a>
				</div>
				<p class="font-body text-[10px] tracking-widest uppercase opacity-40">
					© 2024 NAMANA COFFEE. MAKASSAR, INDONESIA.
				</p>
			</div>
		</div>
	</div>
</footer>
