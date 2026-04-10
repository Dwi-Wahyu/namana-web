<script lang="ts">
	import { cn } from '$lib/utils';
	import { Search, Plus, ShoppingBag } from 'lucide-svelte';
	import { categories, products } from '$lib/data';

	let activeCategory = $state('Espresso');
	let searchQuery = $state('');

	let filteredProducts = $derived(
		products.filter((p) => {
			const matchesCategory = p.category === activeCategory;
			const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);
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

<main class="min-h-screen bg-surface pt-32 pb-24 px-6 md:px-12">
	<div class="mx-auto max-w-7xl">
		<!-- Search Header -->
		<div class="relative mb-16">
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="SEARCH PERFORMANCE CAFFEINE..."
				class="w-full border-2 border-primary bg-transparent px-6 py-6 font-headline text-xl font-bold tracking-tight placeholder:text-primary/30 focus:outline-none focus:ring-0 md:text-2xl"
			/>
			<div class="absolute right-6 top-1/2 -translate-y-1/2 text-primary">
				<Search size={32} strokeWidth={3} />
			</div>
		</div>

		<div class="grid gap-12 lg:grid-cols-[280px_1fr]">
			<!-- Sidebar -->
			<aside class="space-y-12">
				<div class="bg-surface-container-low p-8 border border-outline-variant/10">
					<h2 class="font-headline text-2xl font-black tracking-tighter text-primary uppercase">
						NAMANA MENU
					</h2>
					<p class="mt-2 font-label text-[10px] font-bold tracking-[0.2em] text-on-surface-variant opacity-60">
						HIGH PERFORMANCE CAFFEINE
					</p>

					<nav class="mt-12 flex flex-col space-y-2">
						{#each categories as category}
							<button
								onclick={() => (activeCategory = category.name)}
								class={cn(
									'group flex items-center justify-between px-4 py-4 font-headline text-xs font-bold tracking-widest uppercase transition-all',
									activeCategory === category.name
										? 'bg-primary text-on-primary'
										: 'text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
								)}
							>
								<div class="flex items-center gap-4">
									<category.icon size={16} strokeWidth={activeCategory === category.name ? 3 : 2} />
									<span>{category.name}</span>
								</div>
								{#if activeCategory === category.name}
									<div class="h-1.5 w-1.5 bg-on-primary rounded-full"></div>
								{/if}
							</button>
						{/each}
					</nav>

					<div class="mt-12 pt-12 border-t border-outline-variant/15">
						<button
							class="flex w-full items-center justify-center gap-4 border-2 border-primary py-4 font-headline text-xs font-bold tracking-widest text-primary transition-all hover:bg-primary hover:text-on-primary"
						>
							<ShoppingBag size={18} />
							<span>VIEW CART (0)</span>
						</button>
					</div>
				</div>

				<!-- Promo/Texture block -->
				<div class="hidden lg:block aspect-[3/4] bg-primary overflow-hidden relative group">
					<div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
					<div class="absolute inset-0 flex flex-col justify-end p-8 text-on-primary">
						<h3 class="font-headline text-4xl font-black italic leading-[0.8] tracking-tighter">
							FUELING<br />THE<br />URBAN<br />SHIFT.
						</h3>
					</div>
				</div>
			</aside>

			<!-- Product Grid -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
							<p class="mt-2 font-body text-xs text-on-surface-variant leading-relaxed opacity-70 line-clamp-2">
								{product.desc}
							</p>
							
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
