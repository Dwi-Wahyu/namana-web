<script lang="ts">
	import BentoGallery from '$lib/components/ui/bento-gallery.svelte';
	import BottleOrder from '$lib/components/ui/bottle-order.svelte';
	import StoryProfiles from '$lib/components/ui/story-profiles.svelte';
	import { Leaf } from 'lucide-svelte';

	let activeCategory = $state('Espresso');

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
			title: 'The Blue Brew',
			desc: 'Signature cobalt vibes in every cup.',
			url: '/scenery/498280138_2167924453649630_8383188952732617144_n.jpg',
			span: 'md:col-span-2 md:row-span-2'
		},
		{
			id: 2,
			title: 'Industrial Comfort',
			desc: 'Concrete meets cobalt blue.',
			url: '/product/501226394_18509736802017362_5944014104648471794_n.jpg',
			span: 'md:row-span-1'
		},
		{
			id: 3,
			title: 'Golden Hour',
			desc: 'The perfect light for the perfect brew.',
			url: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
			span: 'md:row-span-1'
		},
		{
			id: 4,
			title: 'Productivity Hub',
			desc: 'Where urbanites get things done.',
			url: '/scenery/502734466_1416529052708555_837181136922468108_n.jpg',
			span: 'md:row-span-2'
		},
		{
			id: 5,
			title: 'Artisan Process',
			desc: 'Precision in every drop.',
			url: '/product/651621931_17917261155289162_3846129621922149798_n.jpg',
			span: 'md:row-span-1'
		},
		{
			id: 6,
			title: 'Namana Exterior',
			desc: 'A beacon for the digital nomad.',
			url: '/scenery/642921837_936515735728776_3352510710565148966_n.jpg',
			span: 'md:col-span-2 md:row-span-1'
		}
	];

	let coffeePerWeek = $state(3);
	let monthlySavings = $derived(coffeePerWeek * 4 * 2000);
	let plasticSaved = $derived(coffeePerWeek * 4);

	let scrollY = $state(0);
	let isScrolled = $derived(scrollY > 50);
</script>

<svelte:window bind:scrollY />

<!-- Navigation -->
<nav
	class="fixed top-0 z-50 w-full transition-all duration-300 px-6 py-4 md:px-12 {isScrolled
		? 'bg-primary shadow-lg border-b border-primary-dim py-3'
		: 'bg-transparent border-b border-white/10'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<div
			class="font-headline text-2xl font-black tracking-tighter transition-colors duration-300 {isScrolled
				? 'text-white'
				: 'text-white'}"
		>
			NAMANA
		</div>

		<div
			class="hidden space-x-8 font-label text-xs font-bold tracking-widest uppercase md:flex {isScrolled
				? 'text-white/90'
				: 'text-white/90'}"
		>
			<a href="#menu" class="transition-colors hover:text-white">Menu</a>
			<a href="#location" class="transition-colors hover:text-white">Location</a>
			<a href="#catering" class="transition-colors hover:text-white">Catering</a>
			<a href="#loyalty" class="transition-colors hover:text-white">Join Loyalty</a>
		<div class="hidden space-x-8 font-label text-xs font-bold tracking-widest uppercase md:flex">
			<a href="#menu" class="hover:text-primary">Menu</a>
			<a href="#kopi-botol" class="hover:text-primary">Kopi Botol</a>
			<a href="#location" class="hover:text-primary">Location</a>
			<a href="#catering" class="hover:text-primary">Catering</a>
			<a href="#loyalty" class="hover:text-primary">Join Loyalty</a>
		</div>

		<div class="flex items-center space-x-6">
			<button
				class="px-6 py-2 font-headline text-xs font-bold tracking-widest transition-all active:scale-95 {isScrolled
					? 'bg-white text-primary hover:bg-white/90'
					: 'bg-primary text-white hover:bg-primary-dim'}"
			>
				ORDER NOW
			</button>
		</div>
	</div>
</nav>

<main class="overflow-hidden">
	<!-- Hero Section -->
	<section class="relative flex h-[100svh] items-center justify-center overflow-hidden bg-black text-white">
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
				class="inline-block font-headline text-[10px] font-bold tracking-[0.4em] text-primary uppercase opacity-90"
			>
				The Digital Third Space
			</span>
			<h1
				class="mt-8 font-headline text-5xl leading-[1.1] font-black tracking-tighter md:text-7xl lg:text-8xl"
			>
				Charged with <span class="italic text-primary">energy.</span><br />
				<span class="text-white/95">Inspired by the City.</span>
			</h1>
			<p class="mx-auto mt-10 max-w-lg font-body text-lg leading-relaxed text-white/80">
				A digital-first sanctuary in the heart of Makassar. Precise extractions, industrial
				minimalism, and zero-friction coffee culture for the high-performance urbanite.
			</p>
			<div class="mt-14 flex flex-wrap justify-center gap-6">
				<button
					class="rounded-full bg-primary px-12 py-5 font-headline text-sm font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95"
				>
					LIHAT MENU
				</button>
				<button
					class="rounded-full border border-white/30 bg-white/5 px-12 py-5 font-headline text-sm font-bold tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
				>
					RESERVASI
				</button>
			</div>
		</div>

		<!-- Bottom Scroll Indicator -->
		<div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
			<span class="material-symbols-outlined text-4xl">expand_more</span>
		</div>
	</section>

	<!-- Space Philosophy Section -->
	<section class="bg-surface-container-low px-6 py-24 md:px-12 md:py-32">
		<div class="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
			<div>
				<span class="font-headline text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
					Space Philosophy
				</span>
				<h2
					class="mt-4 font-headline text-5xl leading-tight font-black tracking-tighter md:text-6xl"
				>
					THE THIRD SPACE<br />EVOLUTION.
				</h2>
				<p class="mt-8 max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
					Namana isn't just a cafe; it's a productivity hub. We've optimized every square inch for
					the high-performance urbanite, balancing hyper-fast fiber connectivity with editorial
					design.
				</p>

				<div class="mt-12 space-y-6">
					<div class="flex items-start gap-4">
						<span class="material-symbols-outlined text-primary">bolt</span>
						<div>
							<h4 class="font-headline text-sm font-bold tracking-widest uppercase">GIGABIT HUB</h4>
							<p class="mt-1 text-sm text-on-surface-variant">
								Uninterrupted connectivity for your digital workflow.
							</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<span class="material-symbols-outlined text-primary">architecture</span>
						<div>
							<h4 class="font-headline text-sm font-bold tracking-widest uppercase">
								INDUSTRIAL ERGONOMICS
							</h4>
							<p class="mt-1 text-sm text-on-surface-variant">
								Furniture designed for long-stay deep work sessions.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="relative grid grid-cols-2 gap-4">
				<div class="pt-12">
					<img
						src="/scenery/498280138_2167924453649630_8383188952732617144_n.jpg"
						alt="Workspace"
						class="aspect-square w-full object-cover grayscale transition-all hover:grayscale-0"
					/>
				</div>
				<div class="flex aspect-[3/4] items-center justify-center bg-primary/10 p-8 text-center">
					<h3 class="font-headline text-4xl font-black text-primary italic">
						Café<br />culture<br />2.0
					</h3>
				</div>
				<div class="col-span-2 -mt-12 ml-12 overflow-hidden border-8 border-surface-container-low">
					<img
						src="/scenery/502734466_1416529052708555_837181136922468108_n.jpg"
						alt="Vibe"
						class="h-64 w-full object-cover grayscale transition-all hover:grayscale-0"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Signatures Section -->
	<section id="menu" class="bg-surface px-6 py-24 md:px-12 md:py-32">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col items-end justify-between gap-8 md:flex-row md:items-center">
				<h2 class="font-headline text-6xl font-black tracking-tighter italic md:text-8xl">
					SIGNATURES.
				</h2>
				<div class="flex flex-wrap items-center justify-end gap-4">
					<div class="flex gap-2">
						{#each categories as category (category)}
							<button
								onclick={() => (activeCategory = category)}
								class="px-4 py-2 font-headline text-[10px] font-bold tracking-widest uppercase transition-all
                            {activeCategory === category
									? 'bg-primary text-on-primary'
									: 'bg-surface-container-highest text-on-surface hover:bg-surface-container-high'}"
							>
								{category}
							</button>
						{/each}
					</div>
					<a
						href="/menu"
						class="bg-primary px-6 py-2 font-headline text-[10px] font-bold tracking-widest text-on-primary uppercase transition-all hover:bg-primary-dim active:scale-95"
					>
						LIHAT SEMUA MENU
					</a>
				</div>
			</div>

			<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
		</div>
	</section>

	<!-- Kopi Botol Order Section -->
	<BottleOrder />

	<!-- Social Currency - IG Stories -->
	<StoryProfiles />

	<!-- Bring Your Own Tumbler Section -->
	<section class="relative overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32">
		<!-- Rattan Texture Background -->
		<div class="rattan-texture pointer-events-none absolute inset-0 opacity-[0.03]"></div>

		<div class="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
			<!-- Primary Visual -->
			<div class="relative order-2 lg:order-1">
				<div class="relative flex items-center justify-center">
					<!-- Blue Tumbler -->
					<div
						class="group relative z-20 w-64 -rotate-6 transition-transform duration-700 hover:rotate-0 md:w-80"
					>
						<img
							src="/feature/624003152_18114974422541337_8190005105986273144_n.jpg"
							alt="Royal Cobalt Tumbler"
							class="aspect-[4/5] w-full object-cover shadow-2xl grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0"
						/>
						<div
							class="absolute -top-4 -right-4 bg-primary px-6 py-3 font-headline text-sm font-black tracking-tighter text-on-primary shadow-xl"
						>
							CASHBACK 2RB
						</div>
					</div>
					<!-- Black Tumbler (Contrast) -->
					<div
						class="absolute z-10 w-56 translate-x-12 translate-y-8 rotate-12 opacity-40 grayscale transition-all duration-700 group-hover:grayscale-0 md:w-72"
					>
						<img
							src="/656192897_18577713091017362_7078097776712408698_n.jpg"
							alt="Modern Black Tumbler"
							class="aspect-[4/5] w-full object-cover shadow-xl"
						/>
					</div>
				</div>
			</div>

			<!-- Content & Calculator -->
			<div class="order-1 lg:order-2">
				<div class="mb-6 flex items-center gap-3">
					<Leaf class="text-primary" size={24} />
					<span class="font-headline text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
						Eco-Sustainability
					</span>
				</div>

				<h2
					class="mb-8 font-headline text-5xl leading-[0.9] font-black tracking-tighter uppercase md:text-6xl"
				>
					Bawa Tumbler,<br /><span class="text-primary">Hemat</span> Lebih Banyak!
				</h2>

				<p class="mb-12 max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
					Setiap kali temanNa membawa tumbler sendiri, nikmati diskon spesial sebagai upaya kita
					bersama mengurangi limbah plastik. Kurangi sampah, nikmati kopi lebih lama!
				</p>

				<!-- Savings Calculator -->
				<div
					class="relative overflow-hidden border border-outline-variant/10 bg-surface-container-low p-8"
				>
					<div
						class="absolute top-0 right-0 h-full w-1 bg-[repeating-linear-gradient(0deg,#0846ed,#0846ed_2px,transparent_2px,transparent_4px)] opacity-20"
					></div>

					<div class="relative z-10">
						<label
							for="coffee-range"
							class="mb-6 block font-headline text-[10px] font-bold tracking-widest uppercase"
						>
							Berapa kali temanNa ngopi dalam seminggu?
						</label>
						<input
							id="coffee-range"
							type="range"
							min="1"
							max="21"
							bind:value={coffeePerWeek}
							class="mb-8 h-1 w-full cursor-pointer appearance-none bg-surface-container-highest accent-primary"
						/>

						<div class="grid grid-cols-2 gap-8 border-t border-outline-variant/15 pt-8">
							<div>
								<p class="font-headline text-3xl leading-none font-black text-primary">
									Rp{(monthlySavings / 1000).toFixed(0)}K
								</p>
								<p
									class="mt-2 font-label text-[10px] font-bold tracking-widest uppercase opacity-60"
								>
									Hemat per bulan
								</p>
							</div>
							<div>
								<p class="font-headline text-3xl leading-none font-black text-primary">
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
	</section>

	<!-- Catering Section -->
	<section id="catering" class="px-6 py-24 md:px-12 md:py-32">
		<div class="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
			<div class="bg-surface-container-low p-8 md:p-12">
				<h3 class="font-headline text-3xl font-black tracking-tighter uppercase">
					ELEVATE YOUR EVENT
				</h3>
				<form class="mt-12 space-y-8">
					<div class="group">
						<label for="name" class="font-headline text-[10px] font-bold tracking-widest uppercase"
							>Company / Event Name</label
						>
						<input
							type="text"
							id="name"
							class="w-full border-0 border-b border-outline-variant/30 bg-transparent py-3 focus:border-primary focus:ring-0"
						/>
					</div>
					<div class="group">
						<label for="type" class="font-headline text-[10px] font-bold tracking-widest uppercase"
							>Service Type</label
						>
						<select
							id="type"
							class="w-full border-0 border-b border-outline-variant/30 bg-transparent py-3 focus:border-primary focus:ring-0"
						>
							<option>Office Pop-up Bar</option>
							<option>Private Catering</option>
							<option>Coffee Workshop</option>
						</select>
					</div>
					<div class="group">
						<label for="email" class="font-headline text-[10px] font-bold tracking-widest uppercase"
							>Contact Details</label
						>
						<input
							type="email"
							id="email"
							placeholder="email@address.com"
							class="w-full border-0 border-b border-outline-variant/30 bg-transparent py-3 focus:border-primary focus:ring-0"
						/>
					</div>
					<button
						class="w-full bg-primary py-5 font-headline text-xs font-bold tracking-[0.2em] text-on-primary transition-all hover:bg-primary-dim"
					>
						REQUEST PROPOSAL
					</button>
				</form>
			</div>

			<div class="flex flex-col justify-center">
				<span class="font-headline text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
					Namana For Business
				</span>
				<h2
					class="mt-6 font-headline text-5xl leading-tight font-black tracking-tighter md:text-6xl"
				>
					PREMIUM<br />MOBILE CATERING.
				</h2>
				<p class="mt-8 max-w-lg font-body text-lg leading-relaxed text-on-surface-variant">
					Bring the Namana experience to your office or private event. Professional baristas,
					industrial equipment, and our signature bean selection delivered on-site.
				</p>

				<div class="mt-12 grid grid-cols-2 gap-12 border-t border-outline-variant/20 pt-12">
					<div>
						<div class="font-headline text-4xl font-black text-primary">200+</div>
						<div class="mt-1 font-label text-[10px] font-bold tracking-widest uppercase opacity-60">
							Cups per hour
						</div>
					</div>
					<div>
						<div class="font-headline text-4xl font-black text-primary">3h</div>
						<div class="mt-1 font-label text-[10px] font-bold tracking-widest uppercase opacity-60">
							Setup time
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Instagram Feed -->
	<BentoGallery
		imageItems={bentoImages}
		title="SHOT ON COBALT."
		description="A collection of stunning landscapes. Drag to explore, click to expand."
	/>

	<!-- Location Section -->
	<section id="location" class="bg-surface-container-low px-6 py-24 md:px-12 md:py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-16 lg:grid-cols-2">
				<div>
					<span class="font-headline text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
						Find Us
					</span>
					<h2
						class="mt-4 font-headline text-5xl leading-tight font-black tracking-tighter md:text-6xl"
					>
						VISIT <span class="text-primary italic">US</span>.
					</h2>
					<p class="mt-8 max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
						Visit our flagship space. Designed for high-performance work sessions and precise
						caffeine extractions.
					</p>

					<div class="mt-12 space-y-8">
						<div>
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
						</div>
						<a
							href="https://www.google.com/maps/dir/?api=1&destination=-5.133940221591248,119.50772966637625"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block bg-primary px-8 py-4 font-headline text-sm font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95"
						>
							GET DIRECTIONS
						</a>
					</div>
				</div>

				<div
					class="relative min-h-[400px] overflow-hidden bg-surface-container-high grayscale-[0.5] transition-all hover:grayscale-0"
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
</main>

<footer class="bg-inverse-surface px-6 pt-24 pb-12 text-on-primary md:px-12">
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
					Operating Hours
				</h5>
				<div class="mt-8 space-y-4 font-body text-sm">
					<div class="flex justify-between">
						<span class="opacity-60">MON - FRI</span>
						<span>08:00 — 22:00</span>
					</div>
					<div class="flex justify-between border-t border-on-primary/10 pt-4">
						<span class="opacity-60">SAT - SUN</span>
						<span>07:00 — 23:00</span>
					</div>
				</div>
			</div>

			<div class="flex flex-col items-end space-y-8">
				<div class="flex space-x-8 font-headline text-[10px] font-bold tracking-widest uppercase">
					<a href="#instagram" class="hover:text-primary">Instagram</a>
					<a href="#privacy" class="hover:text-primary">Privacy</a>
					<a href="#terms" class="hover:text-primary">Terms</a>
				</div>
				<p class="font-body text-[10px] tracking-widest uppercase opacity-40">
					© 2024 NAMANA COFFEE. MAKASSAR, INDONESIA.
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
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
