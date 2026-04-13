<script lang="ts">
	import { cn } from '$lib/utils';
	import { Plus, Heart, Search, Star, Medal, Sparkles, Zap, ChevronDown } from 'lucide-svelte';
	import { categories, products } from '$lib/data';

	let activeCategory = $state('Espresso');
	let searchQuery = $state('');
	let isFilterOpen = $state(false);
	let wishlist = $state<number[]>([]);

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

	function toggleWishlist(e: MouseEvent, id: number) {
		e.preventDefault();
		e.stopPropagation();
		if (wishlist.includes(id)) {
			wishlist = wishlist.filter((w) => w !== id);
		} else {
			wishlist = [...wishlist, id];
		}
	}

	function handleAddToCart(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
	}

	// Badge mapping — returns icon component + label + style class
	function getBadge(product: (typeof products)[0]) {
		if (product.tag === 'BATCH DIGITAL #01' || product.tag === 'FAVORIT LOKAL')
			return { icon: Star, label: 'Most Popular', style: 'badge-popular' };
		if (product.tag === 'PENGALAMAN KHAS' || product.tag === 'PILIHAN EDITOR')
			return { icon: Medal, label: 'Best Seller', style: 'badge-bestseller' };
		if (product.tag === 'PILIHAN ARTISAN')
			return { icon: Sparkles, label: 'Artisan Pick', style: 'badge-artisan' };
		if (product.tag === 'PERFORMA PUNCAK')
			return { icon: Zap, label: 'Peak Performance', style: 'badge-peak' };
		return null;
	}
</script>

<!-- Navigation -->
<nav class="glass-nav fixed top-0 z-50 w-full border-b border-outline-variant/15 bg-surface-container-lowest/80 px-6 py-4 md:px-12 backdrop-blur-md">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
	<a href="/">
	
		<img src="/logo.png" alt="Namana Coffee" class="h-8 w-auto" />
	</a>
		<div class="hidden space-x-8 font-label text-xs font-bold uppercase tracking-widest md:flex">
			<a href="/menu" class="border-b-2 border-primary text-primary">Menu</a>
			<a href="/#location" class="hover:text-primary transition-colors">Lokasi</a>
			<a href="/#catering" class="hover:text-primary transition-colors">Katering</a>
		</div>
		<div class="flex items-center space-x-6">
			<a href="#loyalty" class="hidden font-label text-xs font-bold uppercase tracking-widest md:block">Gabung Loyalty</a>
			<button class="bg-primary px-6 py-2 font-headline text-xs font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95">
				PESAN SEKARANG
			</button>
		</div>
	</div>
</nav>

<main class="min-h-screen bg-surface pt-24 md:pt-32 pb-24 px-0 md:px-12">
	<div class="mx-auto max-w-7xl">

		<!-- Page Header -->
		<div class="mb-6 px-5 md:mb-12 md:px-0 md:text-left">
			<!-- Mobile subtitle -->
			<p class="font-label text-xs font-bold uppercase tracking-widest text-primary/60 mb-1 md:hidden">— Namana Coffee</p>
			<!-- Desktop heading (original style) -->
			<h1 class="hidden font-headline text-4xl font-black tracking-tighter text-primary uppercase md:block md:text-6xl">
				DAFTAR MENU
			</h1>
			<!-- Mobile heading -->
			<h1 class="font-headline text-3xl font-black tracking-tighter text-on-surface uppercase md:hidden">
				Daftar Menu
			</h1>
		</div>

		<!-- ============================================================ -->
		<!-- DESKTOP: Search + Dropdown Filter (original) — hidden mobile -->
		<!-- ============================================================ -->
		<div class="hidden gap-4 mb-12 md:grid md:grid-cols-[1fr_280px]">
			<!-- Search Input -->
			<div class="relative group">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="CARI MENU..."
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

		<!-- ============================================================ -->
		<!-- MOBILE: Search bar + Category pills — hidden desktop          -->
		<!-- ============================================================ -->
		<div class="md:hidden">
			<!-- Search Bar -->
			<div class="relative mb-4 px-5">
				<div class="relative flex items-center">
					<Search class="absolute left-4 text-on-surface-variant/40" size={18} />
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Cari minuman atau makanan..."
						class="w-full rounded-xl bg-surface-container-low border border-outline-variant/20 pl-11 pr-5 py-3.5 font-body text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
					/>
				</div>
			</div>

			<!-- Category Pills -->
			<div class="mb-4 flex gap-2 overflow-x-auto px-5 pb-1 scrollbar-hide">
				{#each categories as category}
					<button
						onclick={() => selectCategory(category.name)}
						class={cn(
							'flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 font-headline text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95',
							activeCategory === category.name
								? 'bg-primary text-on-primary shadow-lg shadow-primary/25'
								: 'bg-surface-container-low text-on-surface-variant border border-outline-variant/20'
						)}
					>
						<category.icon size={14} />
						{category.name}
					</button>
				{/each}
			</div>

			<!-- Product Count -->
			<div class="px-5 mb-2">
				<p class="font-label text-xs text-on-surface-variant/50">
					{filteredProducts.length} produk ditemukan
				</p>
			</div>
		</div>

		<!-- ============================================================ -->
		<!-- MOBILE product list                                           -->
		<!-- ============================================================ -->
		<div class="flex flex-col divide-y divide-outline-variant/10 md:hidden">
			{#each filteredProducts as product (product.id)}
				{@const badge = getBadge(product)}
				<a
					href="/menu/{product.id}"
					class="group relative flex items-center gap-4 px-5 py-4 transition-all duration-200 active:bg-surface-container"
				>
					<!-- Thumbnail -->
					<div class="relative shrink-0">
						<div class="h-[96px] w-[96px] overflow-hidden rounded-2xl bg-surface-container-low shadow-md">
							<img
								src={product.image}
								alt={product.name}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
						{#if product.special}
							<div class="absolute inset-0 rounded-2xl ring-2 ring-primary/50 ring-offset-1 ring-offset-surface pointer-events-none"></div>
						{/if}
					</div>

					<!-- Info -->
					<div class="flex min-w-0 flex-1 flex-col gap-1">
						<!-- Badge with Lucide icon -->
						{#if badge}
							{@const BadgeIcon = badge.icon}
							<span class={cn('inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-0.5 font-headline text-[10px] font-bold tracking-wide', badge.style)}>
								<BadgeIcon size={10} />
								{badge.label}
							</span>
						{/if}

						<h3 class="font-headline text-[15px] font-black leading-snug tracking-tight text-on-surface">
							{product.name}
						</h3>

						<p class="line-clamp-2 font-body text-[12px] leading-relaxed text-on-surface-variant/70">
							{product.desc}
						</p>

						<span class="mt-1 font-headline text-[15px] font-bold text-on-surface">
							{product.price}
						</span>
					</div>

					<!-- Actions -->
					<div class="flex shrink-0 flex-col items-center gap-3">
						<button
							onclick={(e) => toggleWishlist(e, product.id)}
							class={cn(
								'flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 active:scale-90',
								wishlist.includes(product.id) ? 'text-primary' : 'text-on-surface-variant/30'
							)}
							aria-label="Tambah ke wishlist"
						>
							<Heart
								size={18}
								class={cn('transition-all', wishlist.includes(product.id) && 'fill-primary')}
							/>
						</button>

						<button
							onclick={handleAddToCart}
							class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-primary/30 transition-all duration-200 active:scale-90"
							aria-label="Tambah ke keranjang"
						>
							<Plus size={18} strokeWidth={2.5} />
						</button>
					</div>
				</a>
			{/each}

			{#if filteredProducts.length === 0}
				<div class="flex flex-col items-center gap-4 py-24 text-center px-5">
					<div class="flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant/30">
						<Search size={28} />
					</div>
					<div>
						<p class="font-headline text-lg font-black text-on-surface-variant/40 uppercase tracking-widest">Tidak Ditemukan</p>
						<p class="mt-1 font-body text-sm text-on-surface-variant/30">Coba kata kunci atau kategori lain</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- ============================================================ -->
		<!-- DESKTOP product grid (original)                               -->
		<!-- ============================================================ -->
		<div class="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filteredProducts as product (product.id)}
				{@const badge = getBadge(product)}
				<a
					href="/menu/{product.id}"
					class={cn(
						'group flex flex-col bg-surface-container-lowest transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(8,70,237,0.08)]',
						product.special && 'ring-2 ring-primary ring-inset'
					)}
				>
					<div class="relative aspect-square overflow-hidden bg-surface-container-low">
						{#if badge}
							{@const BadgeIcon = badge.icon}
							<div class={cn('absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2 py-0.5 font-headline text-[7px] font-bold tracking-widest', badge.style)}>
								<BadgeIcon size={8} />
								{badge.label}
							</div>
						{:else if product.tag}
							<div class="absolute top-3 left-3 z-10 bg-primary px-2 py-0.5 font-headline text-[7px] font-bold tracking-widest text-on-primary">
								{product.tag}
							</div>
						{/if}

						{#if product.special}
							<div class="absolute bottom-3 right-3 z-10 bg-surface-container-lowest px-2 py-0.5 font-headline text-[7px] font-bold tracking-widest text-primary shadow-xl">
								PILIHAN EDITOR
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
						Kafein performa tidak ditemukan.
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
					<a href="#privacy" class="hover:text-primary transition-colors">Privasi</a>
					<a href="#terms" class="hover:text-primary transition-colors">Ketentuan</a>
				</div>
				<p class="font-body text-[10px] tracking-widest uppercase opacity-40">
					© 2024 NAMANA COFFEE. MAKASSAR, INDONESIA.
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Badge styles — shared mobile & desktop */
	:global(.badge-popular) {
		background-color: color-mix(in srgb, #f97316 15%, transparent);
		color: #c2410c;
		border: 1px solid color-mix(in srgb, #f97316 25%, transparent);
	}

	:global(.badge-bestseller) {
		background-color: color-mix(in srgb, #84cc16 15%, transparent);
		color: #4d7c0f;
		border: 1px solid color-mix(in srgb, #84cc16 25%, transparent);
	}

	:global(.badge-artisan) {
		background-color: color-mix(in srgb, #a78bfa 15%, transparent);
		color: #6d28d9;
		border: 1px solid color-mix(in srgb, #a78bfa 25%, transparent);
	}

	:global(.badge-peak) {
		background-color: color-mix(in srgb, #38bdf8 15%, transparent);
		color: #0369a1;
		border: 1px solid color-mix(in srgb, #38bdf8 25%, transparent);
	}

	/* Hide scrollbar */
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
