<script lang="ts">
	import BentoGallery from '$lib/components/ui/bento-gallery.svelte';
	import BottleOrder from '$lib/components/ui/bottle-order.svelte';
	import StoryProfiles from '$lib/components/ui/story-profiles.svelte';
	import { Leaf } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	let activeCategory = $state('Espresso');
	let activeProduct = $state();

	$effect(() => {
		const filtered = products.filter((p) => p.category === activeCategory || activeCategory === 'Espresso');
		if (!activeProduct || !filtered.some((p) => p.id === activeProduct.id)) {
			activeProduct = filtered[0];
		}
	});

	const categories = ['Espresso', 'Cold Brew', 'Pour Over'];

	const products = [
		{
			id: 'p1',
			name: 'COBALT DIRTY LATTE',
			price: 'IDR 42.000',
			tag: 'BEST SELLER',
			image: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
			category: 'Espresso'
		},
		{
			id: 'p2',
			name: '12H NITRO COLD BREW',
			price: 'IDR 48.000',
			image: '/product/473903495_18484460062017362_7702279212235018828_n.jpg',
			category: 'Cold Brew'
		},
		{
			id: 'p3',
			name: 'V60 SINGLE ORIGIN',
			price: 'IDR 35.000',
			image: '/product/515105493_18517103239017362_614143355468016190_n.jpg',
			category: 'Pour Over'
		}
	];

	const bentoImages = [
		{
			id: 1,
			title: 'Seduhan Biru',
			desc: 'Nuansa kobalt khas di setiap cangkir.',
			url: '/scenery/498280138_2167924453649630_8383188952732617144_n.jpg',
			span: 'md:col-span-2 md:row-span-2'
		},
		{
			id: 2,
			title: 'Kenyamanan Industrial',
			desc: 'Beton padu biru kobalt.',
			url: '/product/501226394_18509736802017362_5944014104648471794_n.jpg',
			span: 'md:row-span-1'
		},
		{
			id: 3,
			title: 'Momen Keemasan',
			desc: 'Cahaya tepat bagi seduhan tepat.',
			url: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
			span: 'md:row-span-1'
		},
		{
			id: 4,
			title: 'Pusat Produktivitas',
			desc: 'Tempat merampungkan hal penting.',
			url: '/scenery/502734466_1416529052708555_837181136922468108_n.jpg',
			span: 'md:row-span-2'
		},
		{
			id: 5,
			title: 'Proses Artisan',
			desc: 'Presisi tingkat tetes.',
			url: '/product/651621931_17917261155289162_3846129621922149798_n.jpg',
			span: 'md:row-span-1'
		},
		{
			id: 6,
			title: 'Eksterior Namana',
			desc: 'Mercusuar bagi nomad digital.',
			url: '/scenery/642921837_936515735728776_3352510710565148966_n.jpg',
			span: 'md:col-span-2 md:row-span-1'
		}
	];

	let coffeePerWeek = $state(3);
	let monthlySavings = $derived(coffeePerWeek * 4 * 2000);
	let plasticSaved = $derived(coffeePerWeek * 4);

	let scrollY = $state(0);
	let isScrolled = $derived(scrollY > 50);
	let isMenuOpen = $state(false);

	const navLinks = [
		{ name: 'Menu', href: '#menu' },
		{ name: 'Katering', href: '#catering' },
		{ name: 'Lokasi', href: '#location' },
	];
</script>

<svelte:window bind:scrollY />

<!-- Navigation -->
<nav
	class="fixed top-0 z-50 w-full overflow-hidden transition-all duration-300 ease-out {isScrolled ||
	isMenuOpen
		? 'bg-primary shadow-lg backdrop-blur-xl'
		: 'bg-transparent'} {isMenuOpen ? 'flex h-screen flex-col' : 'h-16 md:h-24'}"
>
	<div
		class="mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between px-6 py-4 md:px-12 md:py-6"
	>
		<!-- Left: Logo -->
		<a href="/#hero">
			<img src="/logo.png" alt="Namana Logo" class="h-8 w-auto brightness-0 invert" />
		</a>

		<!-- Center: Desktop Menu -->
		<div
			class="hidden items-center justify-center font-label text-xs font-bold tracking-widest text-white/90 uppercase md:flex"
		>
			{#each navLinks as link (link.name)}
				<a href={link.href} class="transition-colors hover:text-white ml-8">{link.name}</a>
			{/each}
		</div>

		<!-- Right: Desktop Reservasi & Mobile Toggle -->
		<div class="flex items-center justify-end gap-4">
			<button
				class="hidden px-6 py-2 font-headline text-xs font-bold tracking-widest transition-all active:scale-95 md:block {isScrolled
					? 'bg-white text-primary hover:bg-white/90'
					: 'bg-primary text-white hover:bg-primary-dim'}"
			>
				RESERVASI
			</button>

			<!-- Mobile Toggle Button -->
			<button
				onclick={() => (isMenuOpen = !isMenuOpen)}
				class="relative z-50 flex h-10 w-10 items-center justify-center text-white md:hidden"
				aria-label="Toggle Menu"
			>
				<div class="relative h-6 w-6">
					<span
						class="absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 {isMenuOpen
							? 'top-3 rotate-42'
							: 'top-1'}"
					></span>
					<span
						class="absolute top-3 left-0 h-0.5 w-6 bg-current transition-all duration-300 {isMenuOpen
							? 'scale-x-0 opacity-0'
							: 'scale-x-100 opacity-100'}"
					></span>
					<span
						class="absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 {isMenuOpen
							? 'top-3 -rotate-42'
							: 'top-5'}"
					></span>
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isMenuOpen}
		<div class="flex flex-1 flex-col items-center justify-center gap-10 px-6 pb-20 md:hidden">
			{#each navLinks as link, i (link.name)}
				<div in:fly={{ y: 30, duration: 300, delay: 100 + i * 50 }}>
					<a
						href={link.href}
						onclick={() => (isMenuOpen = false)}
						class="block font-headline text-5xl font-black tracking-tighter text-white"
					>
						{link.name}
					</a>
				</div>
			{/each}

			<div in:fly={{ y: 30, duration: 300, delay: 100 + navLinks.length * 50 }}>
				<button
					class="w-full max-w-xs bg-white px-12 py-5 font-headline text-sm font-bold tracking-widest text-primary shadow-2xl active:scale-95"
				>
					RESERVASI SEKARANG
				</button>
			</div>
		</div>
	{/if}
</nav>

<main class="overflow-hidden">
	<!-- Hero Section -->
	<section
		id="hero"
		class="relative flex h-svh items-center justify-center overflow-hidden bg-black text-white"
	>
		<!-- Background Image with Overlay -->
		<div class="absolute inset-0 z-0">
			<img
				src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920"
				alt="Empty Aesthetic Coffee Shop"
				class="h-full w-full object-cover opacity-60 grayscale-[0.2]"
			/>
			<div class="absolute inset-0 bg-black/50"></div>
			<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
		</div>

		<div class="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
			<span
				class="inline-block rounded-sm bg-primary px-2 py-1 font-headline text-[10px] font-bold tracking-[0.4em] text-on-primary uppercase opacity-90"
			>
				Ruang Ketiga Digital
			</span>
			<h1
				class="mt-4 font-headline text-4xl leading-[1.1] font-black tracking-tighter md:text-6xl lg:text-7xl"
			>
				DISEDUH UNTUK KAUM<br />
				<span class="text-primary italic">URBAN.</span>
			</h1>
			<p
				class="mx-auto mt-10 hidden max-w-lg font-body text-lg leading-relaxed text-white/80 md:block"
			>
				Tempat perlindungan berkonsep digital di pusat Makassar. Ekstraksi presisi, minimalisme industrial, dan budaya kopi tanpa hambatan bagi kaum urban produktif.
			</p>
			<div class="mt-4 hidden flex-wrap justify-center gap-6 md:mt-14 md:flex">
				<a href="/menu"
					class="rounded-full bg-primary px-12 py-5 font-headline text-sm font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95"
				>
					LIHAT MENU
			</a>
				<button
					class="rounded-full border border-white/30 bg-white/5 px-12 py-5 font-headline text-sm font-bold tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
				>
					RESERVASI
				</button>
			</div>
		</div>
	</section>

	<!-- Signatures Section -->
	<section id="menu" class="bg-surface px-4 py-16 md:px-12 md:py-32">
		<div class="mx-auto max-w-7xl">
			<!-- Header & Filters -->
			<div class="flex flex-col gap-10">
				<div class="max-w-2xl">
					<h2 class="font-headline text-5xl font-black tracking-tighter md:text-7xl">
						MENU <br> <span class="text-primary italic">UNGGULAN.</span>
					</h2>
					<p class="mt-4 font-body text-lg text-on-surface-variant/70">
						Koleksi pilihan ekstraksi kopi terbaik dan racikan musiman yang dirancang untuk dinamika
						urban.
					</p>
				</div>

				<div class="flex flex-wrap gap-8">
					{#each categories as category (category)}
						<button
							onclick={() => (activeCategory = category)}
							class="relative py-2 font-headline text-[10px] font-bold tracking-widest uppercase transition-all
                        {activeCategory === category
								? 'text-primary'
								: 'text-on-surface-variant/50 hover:text-on-surface'}"
						>
							{category}
							<div
								class="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ease-out
                            {activeCategory === category ? 'w-full' : 'w-0'}"
							></div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Mobile Product Showcase -->
			<div class="mt-6 block md:hidden">
				{#if activeProduct}
					<!-- Main Highlighted Product -->
					<div class="group relative mb-6 bg-white p-4 pb-6 shadow-sm transition-all">
						{#if activeProduct.tag}
							<span
								class="absolute top-6 right-6 z-10 bg-primary px-2 py-1 font-headline text-[8px] font-bold text-on-primary"
							>
								{activeProduct.tag}
							</span>
						{/if}
						<div class="relative aspect-[4/5] overflow-hidden bg-surface-container-high">
							{#key activeProduct.id}
								<img
									src={activeProduct.image}
									alt={activeProduct.name}
									class="h-full w-full animate-in zoom-in-95 fade-in object-cover duration-500"
								/>
							{/key}
						</div>
						<div class="mt-6 flex flex-col">
							<div
								class="flex items-end justify-between border-b border-dashed border-outline-variant/15 pb-4"
							>
								<div>
									<h3
										class="font-headline text-2xl leading-none font-black tracking-tighter text-primary uppercase"
									>
										{activeProduct.name}
									</h3>
									<p class="mt-2 font-headline text-sm font-bold text-on-surface-variant italic">
										"{activeProduct.category} Selection"
									</p>
								</div>
								<span
									class="font-headline text-[10px] font-bold tracking-widest text-on-surface-variant/50 uppercase"
									>2026</span
								>
							</div>
							<div class="mt-4 flex items-center justify-between">
								<span class="font-headline text-sm font-bold text-on-surface-variant"
									>{activeProduct.price}</span
								>
								<button
									class="flex h-8 w-8 cursor-pointer items-center justify-center bg-primary text-on-primary transition-all hover:bg-primary-dim active:scale-90"
								>
									<span class="material-symbols-outlined text-sm">add</span>
								</button>
							</div>
						</div>
					</div>
				{/if}

				<!-- Thumbnails Carousel -->
				<div
					class="hide-scrollbar flex gap-4 overflow-x-auto px-1 pt-2 pb-6 snap-x snap-mandatory"
					style="scrollbar-width: none; -ms-overflow-style: none;"
				>
					{#each products.filter((p) => p.category === activeCategory || activeCategory === 'Espresso') as product (product.id)}
						<button
							onclick={() => (activeProduct = product)}
							class="w-[110px] shrink-0 cursor-pointer snap-start flex-col items-center bg-white p-2 pb-3 shadow-sm transition-all {activeProduct?.id ===
							product.id
								? 'scale-105 ring-2 ring-primary ring-offset-2 ring-offset-surface opacity-100 grayscale-0'
								: 'hover:scale-105 hover:shadow-md grayscale-[0.8] opacity-70 hover:grayscale-0 hover:opacity-100'}"
						>
							<div class="relative aspect-square w-full overflow-hidden bg-surface-container-high">
								<img src={product.image} alt={product.name} class="h-full w-full object-cover" />
							</div>
							<span
								class="mt-3 block w-full truncate text-center font-headline text-[9px] font-bold tracking-widest text-primary uppercase"
								>{product.name}</span
							>
						</button>
					{/each}
				</div>
			</div>

			<!-- Desktop Product Grid -->
			<div class="mt-6 hidden gap-8 md:grid lg:grid-cols-3">
				{#each products.filter((p) => p.category === activeCategory || activeCategory === 'Espresso') as product (product.id)}
					<div class="group relative bg-surface-container-low p-6 transition-all hover:bg-white">
						{#if product.tag}
							<span
								class="absolute top-8 right-8 z-10 bg-primary px-2 py-1 font-headline text-[8px] font-bold text-on-primary"
							>
								{product.tag}
							</span>
						{/if}
						<div class="aspect-square overflow-hidden bg-surface-container-high">
							<img
								src={product.image}
								alt={product.name}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div class="mt-8">
							<h3 class="font-headline text-xl font-black tracking-tight">{product.name}</h3>
							<div
								class="mt-4 flex items-center justify-between border-t border-outline-variant/15 pt-4"
							>
								<span class="font-headline text-sm font-bold text-on-surface-variant"
									>{product.price}</span
								>
								<button
									class="flex h-8 w-8 items-center justify-center bg-primary text-on-primary transition-all hover:bg-primary-dim active:scale-90"
								>
									<span class="material-symbols-outlined text-sm">add</span>
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Bottom Action -->
			<div class="mt-16 flex justify-center">
				<a
					href="/menu"
					class="w-full max-w-md bg-primary py-5 text-center font-headline text-xs font-bold tracking-[0.2em] text-on-primary text-white uppercase transition-all hover:bg-primary-dim active:scale-95 md:w-auto md:px-16"
				>
					LIHAT SEMUA MENU
				</a>
			</div>
		</div>
	</section>

	<!-- Space Philosophy Section -->
	<section class="bg-surface-container-low py-16">
		<!-- Kopi Botol Order Section -->
		<BottleOrder />

		<!-- Social Currency - IG Stories -->
		<StoryProfiles />

		<!-- Bring Your Own Tumbler Section -->
		<section class="relative overflow-hidden bg-white px-4 py-16 md:px-12 md:py-32">
			<!-- Rattan Texture Background -->
			<div class="rattan-texture pointer-events-none absolute inset-0 opacity-[0.03]"></div>

			<div class="relative z-10 mx-auto max-w-7xl">
				<!-- Content & Calculator -->
				<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
					<div>
						<div
							class="mb-6 inline-block bg-primary px-4 py-2 font-headline text-[10px] font-black tracking-widest text-on-primary"
						>
							CASHBACK 2RB
						</div>

						<h2
							class="mb-8 font-headline text-5xl leading-[0.9] font-black tracking-tighter uppercase md:text-7xl"
						>
							Bawa Tumbler,<br /><span class="text-primary">Hemat</span> Lebih Banyak!
						</h2>

						<p class="mb-10 max-w-lg font-body text-lg leading-relaxed text-on-surface-variant">
							Setiap kali temanNa membawa tumbler sendiri, nikmati diskon spesial sebagai upaya kita
							bersama mengurangi limbah plastik. Kurangi sampah, nikmati kopi lebih lama!
						</p>
					</div>

					<!-- Savings Calculator with peeking Tumbler -->
					<div class="relative w-full max-w-2xl md:mt-12 lg:mt-0 lg:ml-auto">
						<!-- Tumbler peeking from behind -->
						<div
							class="pointer-events-none absolute -top-20 left-full z-0 w-64 -translate-x-1/2 opacity-40 transition-transform duration-700 hover:scale-110 md:-top-40 md:w-80"
						>
							<img
								src="/tumbler_removed_bg.png"
								alt="Namana Signature Tumblers"
								class="w-full drop-shadow-[0_20px_40px_rgba(8,70,237,0.15)]"
							/>
						</div>

						<!-- Calculator Card -->
						<div
							class="relative z-10 overflow-hidden border border-outline-variant/10 bg-surface-container-low p-8 shadow-2xl backdrop-blur-sm md:p-12"
						>
							<div
								class="absolute top-0 right-0 h-full w-1 bg-[repeating-linear-gradient(0deg,#0846ed,#0846ed_2px,transparent_2px,transparent_4px)] opacity-20"
							></div>

							<div class="relative z-10 text-left">
								<label
									for="coffee-range"
									class="mb-6 flex flex-col justify-between gap-4 font-headline text-[10px] font-bold tracking-widest uppercase sm:flex-row sm:items-center"
								>
									<span>Berapa kali temanNa ngopi dalam seminggu?</span>
									<span class="text-2xl font-black text-primary">{coffeePerWeek}x</span>
								</label>
								<input
									id="coffee-range"
									type="range"
									min="1"
									max="21"
									bind:value={coffeePerWeek}
									class="mb-8 h-1 w-full cursor-pointer appearance-none bg-surface-container-highest accent-primary"
								/>

								<div
									class="grid grid-cols-1 gap-4 border-t border-outline-variant/15 pt-8 md:grid-cols-2 md:gap-8"
								>
									<div>
										<p class="font-headline text-4xl leading-none font-black text-primary">
											Rp{(monthlySavings / 1000).toFixed(0)}K
										</p>
										<p
											class="mt-2 font-label text-[10px] font-bold tracking-widest uppercase opacity-60"
										>
											Hemat per bulan
										</p>
									</div>
									<div>
										<p class="font-headline text-4xl leading-none font-black text-primary">
											{plasticSaved}
										</p>
										<p
											class="mt-2 font-label text-[10px] font-bold tracking-widest uppercase opacity-60"
										>
											Gelas diselamatkan
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Catering Section -->
		<section id="catering" class="px-4 py-16 md:px-12 md:py-32">
			<div class="mx-auto grid max-w-7xl md:gap-20 lg:grid-cols-2">
				<div class="bg-surface-container-low md:p-12">
					<span
						class="font-headline text-[10px] font-bold tracking-[0.3em] text-primary uppercase md:hidden"
					>
						Namana Untuk Bisnis
					</span>
					<h3 class="font-headline text-3xl font-black tracking-tighter uppercase">
						TINGKATKAN ACARA ANDA
					</h3>
					<form class="mt-12 space-y-8">
						<div class="group">
							<label
								for="name"
								class="font-headline text-[10px] font-bold tracking-widest uppercase"
								>Nama Perusahaan / Acara</label
							>
							<input
								type="text"
								id="name"
								class="w-full border-0 border-b border-outline-variant/30 bg-transparent py-3 focus:border-primary focus:ring-0"
							/>
						</div>
						<div class="group">
							<label
								for="type"
								class="font-headline text-[10px] font-bold tracking-widest uppercase"
								>Jenis Layanan</label
							>
							<select
								id="type"
								class="w-full border-0 border-b border-outline-variant/30 bg-transparent py-3 focus:border-primary focus:ring-0"
							>
								<option>Bar Pop-up Kantor</option>
								<option>Katering Privat</option>
								<option>Workshop Kopi</option>
							</select>
						</div>
						<div class="group">
							<label
								for="email"
								class="font-headline text-[10px] font-bold tracking-widest uppercase"
								>Detail Kontak</label
							>
							<input
								type="email"
								id="email"
								placeholder="email@address.com"
								class="w-full border-0 border-b border-outline-variant/30 bg-transparent py-3 focus:border-primary focus:ring-0"
							/>
						</div>
						<button
							class="w-full bg-[#2e5bff] py-5 font-headline text-xs font-bold tracking-[0.2em] text-on-primary text-white transition-all hover:bg-primary-dim"
						>
							MINTA PROPOSAL
						</button>
					</form>
				</div>

				<div class="flex flex-col justify-center">
					<span
						class="hidden font-headline text-[10px] font-bold tracking-[0.3em] text-primary uppercase md:block"
					>
						Namana Untuk Bisnis
					</span>
					<h2
						class="mt-6 hidden font-headline text-5xl leading-tight font-black tracking-tighter md:block md:text-6xl"
					>
						KATERING <br />PREMIUM.
					</h2>
					<p
						class="mt-8 hidden max-w-lg font-body text-lg leading-relaxed text-on-surface-variant md:block"
					>
						Hadirkan pengalaman Namana ke kantor atau acara privat Anda. Barista profesional, perlengkapan industrial, dan pilihan biji kopi andalan kami diantarkan langsung ke lokasi.
					</p>

					<div class="mt-12 grid grid-cols-2 gap-12 border-t border-outline-variant/20 pt-12">
						<div>
							<div class="font-headline text-4xl font-black text-primary">200+</div>
							<div
								class="mt-1 font-label text-[10px] font-bold tracking-widest uppercase opacity-60"
							>
								Cangkir per jam
							</div>
						</div>
						<div>
							<div class="font-headline text-4xl font-black text-primary">3j</div>
							<div
								class="mt-1 font-label text-[10px] font-bold tracking-widest uppercase opacity-60"
							>
								Waktu persiapan
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Instagram Feed -->
		<BentoGallery
			imageItems={bentoImages}
			title="DIPOTRET DI TEMPAT."
			description="Koleksi lanskap memukau. Klik untuk memperbesar."
		/>

		<!-- Location Section -->
		<section id="location" class="bg-surface-container-low px-4 py-16 md:px-12 md:py-32">
			<div class="mx-auto max-w-7xl">
				<div class="grid gap-16 lg:grid-cols-2">
					<div>
						<h2
							class="mt-4 font-headline text-5xl leading-tight font-black tracking-tighter md:text-6xl"
						>
							KUNJUNGI <span class="text-primary italic">KAMI</span>.
						</h2>
						<p class="mt-8 max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
							Kunjungi ruang utama kami. Dirancang untuk sesi kerja tangguh dan ekstraksi kafein presisi.
						</p>

						<div class="mt-8 space-y-8">
							<div
								class="relative min-h-100 overflow-hidden bg-surface-container-high grayscale-[0.5] transition-all hover:grayscale-0 md:hidden"
							>
								<iframe
									title="Namana Location"
									width="100%"
									height="100%"
									style="border:0;"
									loading="lazy"
									allowfullscreen
									src="https://maps.google.com/maps?q=-5.133940221591248,119.50772966637625&t=&z=15&ie=UTF8&iwloc=&output=embed"
								></iframe>
							</div>

							<!-- <div>
								<h4 class="font-headline text-sm font-bold tracking-widest uppercase opacity-60">
									ADDRESS
								</h4>
								<p class="mt-2 font-body text-xl font-bold">
									JL. KEBAHAGIAAN UTARA NO.144<br />TAMALANREA, MAKASSAR 90245
								</p>
							</div>
							<div>
								<h4 class="font-headline text-sm font-bold tracking-widest uppercase opacity-60">
									CONTACT
								</h4>
								<p class="mt-2 font-body text-xl font-bold text-primary">08194094745</p>
							</div> -->
							<a
								href="https://www.google.com/maps/dir/?api=1&destination=-5.133940221591248,119.50772966637625"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-block w-full bg-primary px-8 py-4 text-center font-headline text-sm font-bold tracking-widest text-white transition-all active:scale-95"
							>
								DAPATKAN PETUNJUK ARAH
							</a>
						</div>
					</div>

					<div
						class="relative hidden min-h-100 overflow-hidden bg-surface-container-high grayscale-[0.5] transition-all hover:grayscale-0 md:block"
					>
						<iframe
							title="Namana Location"
							width="100%"
							height="100%"
							style="border:0;"
							loading="lazy"
							allowfullscreen
							src="https://maps.google.com/maps?q=-5.133940221591248,119.50772966637625&t=&z=15&ie=UTF8&iwloc=&output=embed"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	</section>
</main>

<footer class="bg-inverse-surface px-4 pt-16 pb-12 text-on-primary md:px-12 md:pt-24">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-16 md:grid-cols-3">
			<div>
				<div class="font-headline text-4xl font-black tracking-tighter text-primary">NAMANA</div>
				<p class="mt-8 max-w-xs font-body text-sm leading-relaxed opacity-60">
					JL. KEBAHAGIAAN UTARA NO. 144<br />TAMALANREA, MAKASSAR 90245
				</p>
			</div>

			<div>
				<h5 class="font-headline text-[10px] font-bold tracking-widest uppercase opacity-40">
					Jam Operasional
				</h5>
				<div class="mt-8 space-y-4 font-body text-sm">
					<div class="flex justify-between">
						<span class="opacity-60">SEN - JUM</span>
						<span>08:00 — 22:00</span>
					</div>
					<div class="flex justify-between border-t border-on-primary/10 pt-4">
						<span class="opacity-60">SAB - MIN</span>
						<span>07:00 — 23:00</span>
					</div>
				</div>
			</div>

			<div class="flex flex-col items-end space-y-8">
				<div class="flex space-x-8 font-headline text-[10px] font-bold tracking-widest uppercase">
					<a href="#instagram" class="hover:text-primary">Instagram</a>
					<a href="#privacy" class="hover:text-primary">Privasi</a>
					<a href="#terms" class="hover:text-primary">Ketentuan</a>
				</div>
				<p class="font-body text-[10px] tracking-widest uppercase opacity-40">
					© 2024 NAMANA COFFEE. MAKASSAR, INDONESIA.
				</p>
				<p class="uppercase">Powered By Solnetz ID</p>
			</div>
		</div>
	</div>
</footer>

<style>
	@keyframes slideUpFade {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.rattan-texture {
		background-image:
			radial-gradient(var(--color-primary) 0.5px, transparent 0.5px),
			radial-gradient(var(--color-primary) 0.5px, #ffffff 0.5px);
		background-size: 20px 20px;
		background-position:
			0 0,
			10px 10px;
	}
</style>
