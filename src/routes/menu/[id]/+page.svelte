<script lang="ts">
	import { page } from '$app/state';
	import { products } from '$lib/data';
	import { Zap, Sparkles, ArrowLeft, MessageCircle } from 'lucide-svelte';

	const id = $derived(Number(page.params.id));
	const product = $derived(products.find((p) => p.id === id) || products[0]);
</script>

<!-- Navigation -->
<nav
	class="glass-nav fixed top-0 z-50 hidden w-full border-b border-outline-variant/15 bg-surface-container-lowest/80 px-4 py-3 backdrop-blur-xl md:flex md:px-12 md:py-4"
>
	<div class="relative mx-auto flex max-w-7xl items-center justify-between gap-4">
		<!-- Desktop Nav Links (kiri) -->
		<div class="hidden space-x-8 font-label text-xs font-bold tracking-widest uppercase md:flex">
			<a href="/menu" class="transition-colors hover:text-primary">Menu</a>
			<a href="/#location" class="transition-colors hover:text-primary">Lokasi</a>

			<!-- Logo (tengah, absolute) -->
			<img src="/logo.png" alt="Namana" class="h-7 w-auto md:h-8" />

			<a href="/#catering" class="transition-colors hover:text-primary">Katering</a>
			<a href="/#" class="transition-colors hover:text-primary">Pesan</a>
		</div>

	
	</div>
</nav>

<main class="min-h-screen bg-surface">
	<!-- ── MOBILE HERO: Full-bleed image + overlay ── -->
	<section class="relative md:hidden">
		<!-- Full-width image -->
		<div class="relative h-[55vw] min-h-[260px] w-full overflow-hidden bg-surface-container-high">
			<img
				src={product.image}
				alt={product.name}
				class="h-full w-full object-cover"
			/>
			<!-- gradient overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"
			></div>
			<!-- Floating back button -->
			<a
				href="/menu"
				class="absolute rounded-full top-4 left-4 z-10 flex h-9 w-9 items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/20 text-on-surface shadow-lg transition-all active:scale-95"
				aria-label="Kembali ke Menu"
			>
				<ArrowLeft size={18} />
			</a>
		</div>

		<!-- Content card below image -->
		<div class="relative z-10 -mt-8 px-4">
			<!-- Price badge -->
			<div class="mb-4 inline-flex items-center gap-2 bg-primary px-4 py-2 text-on-primary">
				<span class="font-label text-[9px] font-bold tracking-widest uppercase opacity-80"
					>Mulai dari</span
				>
				<span class="font-headline text-xl font-black tracking-tighter leading-none"
					>{product.price}</span
				>
			</div>

			<!-- Title -->
			<h1
				class="mb-5 font-headline text-4xl leading-[0.88] font-black tracking-tighter text-on-surface uppercase"
			>
				{product.name}
			</h1>

			<!-- Badges row -->
			<div class="mb-6 flex flex-wrap gap-3">
				<div class="flex items-center gap-2 bg-surface-container-high px-3 py-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2e5bff" d="M2 9.5c0 3.1 1.64 5.77 3.98 6.91c0-.15-.02-.3-.02-.45c.01-1.98.7-3.96 1.91-5.64c-.05-.06-.09-.13-.15-.19c-.54-.68-1.22-1.52-1.22-3.12s.68-2.44 1.22-3.12c.47-.59.78-.98.78-1.87c-3.58 0-6.5 3.36-6.5 7.5Zm8.48-7.14c-.09 1.37-.7 2.14-1.2 2.77c-.47.59-.78.98-.78 1.87s.28 1.25.72 1.79c1.13-1.06 2.45-1.86 3.84-2.31c.42-.14.84-.24 1.26-.32c-.77-1.81-2.15-3.19-3.84-3.8m5.49 12.79c-.11.88-.26 1.96-1.42 3.12s-2.25 1.3-3.12 1.42c-.66.09-1.17.15-1.75.64c1.15 1.14 2.68 1.7 4.29 1.7c1.95 0 4-.82 5.6-2.42c2.37-2.36 3.02-5.73 1.84-8.27c-.97.76-1.88.89-2.63.98c-.75.1-1.29.17-1.97.85s-.75 1.22-.85 1.97Z"/><path fill="#2e5bff" d="M13.69 8.38a8.3 8.3 0 0 0-3.3 2.04c-1.53 1.53-2.41 3.55-2.42 5.55c0 .97.2 1.89.58 2.72c.97-.76 1.88-.88 2.63-.98s1.29-.17 1.97-.85s.75-1.22.85-1.97c.11-.88.26-1.96 1.42-3.12s2.25-1.3 3.12-1.42c.67-.09 1.17-.15 1.75-.64c-1.63-1.62-4.16-2.13-6.59-1.33Z"/></svg>
					<div>
						<p class="font-label text-[8px] font-bold tracking-widest uppercase opacity-50">
							Kafein
						</p>
						<p class="font-headline text-xs font-bold tracking-tight uppercase">
							{product.details?.caffeine || 'Tinggi'}
						</p>
					</div>
				</div>
				<div class="flex items-center gap-2 bg-surface-container-high px-3 py-2">
					<Sparkles size={14} class="text-primary" />
					<div>
						<p class="font-label text-[8px] font-bold tracking-widest uppercase opacity-50">
							Rasa
						</p>
						<p class="font-headline text-xs font-bold tracking-tight uppercase">
							{product.details?.flavor || 'Krim & Tebal'}
						</p>
					</div>
				</div>
			</div>

			<!-- CTA Buttons -->
			<div class="flex gap-3">
				<button
					class="flex flex-1 items-center justify-center gap-2 bg-primary py-4 font-headline text-xs font-bold tracking-widest text-on-primary transition-all active:scale-95"
				>
					<MessageCircle size={15} />
					PESAN SEKARANG
				</button>
				
			</div>
		</div>
	</section>

	<!-- ── DESKTOP HERO: Classic two-column layout ── -->
	<section class="relative hidden px-12 pt-28 pb-24 md:block">
		<div class="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
			<!-- Product Info -->
			<div class="order-2 lg:order-1">
				<h1
					class="mb-12 font-headline text-8xl leading-[0.85] font-black tracking-tighter text-on-surface uppercase"
				>
					{product.name}
				</h1>

				<div class="mb-16 grid grid-cols-2 gap-8">
					<div>
						<p
							class="mb-1 font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-60"
						>
							Tingkat Kafein
						</p>
						<div class="flex w-fit items-center gap-2 bg-primary p-2 text-on-primary">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M2 9.5c0 3.1 1.64 5.77 3.98 6.91c0-.15-.02-.3-.02-.45c.01-1.98.7-3.96 1.91-5.64c-.05-.06-.09-.13-.15-.19c-.54-.68-1.22-1.52-1.22-3.12s.68-2.44 1.22-3.12c.47-.59.78-.98.78-1.87c-3.58 0-6.5 3.36-6.5 7.5Zm8.48-7.14c-.09 1.37-.7 2.14-1.2 2.77c-.47.59-.78.98-.78 1.87s.28 1.25.72 1.79c1.13-1.06 2.45-1.86 3.84-2.31c.42-.14.84-.24 1.26-.32c-.77-1.81-2.15-3.19-3.84-3.8m5.49 12.79c-.11.88-.26 1.96-1.42 3.12s-2.25 1.3-3.12 1.42c-.66.09-1.17.15-1.75.64c1.15 1.14 2.68 1.7 4.29 1.7c1.95 0 4-.82 5.6-2.42c2.37-2.36 3.02-5.73 1.84-8.27c-.97.76-1.88.89-2.63.98c-.75.1-1.29.17-1.97.85s-.75 1.22-.85 1.97Z"/><path fill="#fff" d="M13.69 8.38a8.3 8.3 0 0 0-3.3 2.04c-1.53 1.53-2.41 3.55-2.42 5.55c0 .97.2 1.89.58 2.72c.97-.76 1.88-.88 2.63-.98s1.29-.17 1.97-.85s.75-1.22.85-1.97c.11-.88.26-1.96 1.42-3.12s2.25-1.3 3.12-1.42c.67-.09 1.17-.15 1.75-.64c-1.63-1.62-4.16-2.13-6.59-1.33Z"/></svg>
							<p class="font-headline text-sm font-medium tracking-tight uppercase">
								{product.details?.caffeine || 'Tinggi'}
							</p>
						</div>
					</div>
					<div>
						<p
							class="mb-1 font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-60"
						>
							Profil Rasa
						</p>
						<div class="flex w-fit items-center gap-2 bg-primary p-2 text-on-primary">
							<Sparkles size={24} />
							<p class="font-headline text-sm font-medium tracking-tight uppercase">
								{product.details?.flavor || 'Krim & Tebal'}
							</p>
						</div>
					</div>
				</div>

				<div class="flex flex-wrap gap-4">
					<button
						class="bg-primary px-10 py-5 font-headline text-sm font-bold tracking-widest text-on-primary transition-all hover:bg-primary-dim active:scale-95"
					>
						PESAN SEKARANG
					</button>
					<a
						href="/menu"
						class="bg-surface-container-highest px-10 py-5 font-headline text-sm font-bold tracking-widest text-on-surface transition-all hover:bg-surface-dim active:scale-95"
					>
						LIHAT MENU
					</a>
				</div>
			</div>

			<!-- Product Image -->
			<div class="relative order-1 lg:order-2">
				<div class="group relative aspect-square overflow-hidden bg-surface-container-high shadow-2xl">
					<img
						src={product.image}
						alt={product.name}
						class="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
					/>
				</div>
				<!-- Price Tag Desktop -->
				<div class="absolute bottom-0 left-0 bg-primary p-8 text-on-primary shadow-2xl">
					<p class="mb-2 font-label text-[10px] font-bold tracking-widest uppercase opacity-80">
						Mulai dari
					</p>
					<p class="font-headline text-4xl leading-none font-black tracking-tighter">
						{product.price}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ── Vibe Notes ── -->
	<section class="bg-surface-container-lowest px-4 py-10 md:px-12 md:py-16">
		<div class="mx-auto max-w-7xl">
			<div class="relative border-l-4 border-primary/80 pl-5 md:py-12 md:pl-12">
				<p
					class="mb-3 font-label text-[10px] font-bold tracking-[0.3em] text-primary uppercase md:mb-8"
				>
					Catatan Suasana
				</p>
				<h2
					class="max-w-2xl font-headline text-2xl leading-tight font-black tracking-tighter text-on-surface md:text-5xl"
				>
					{product.vibeNotes ||
						'Teman sempurna untuk kerja fokus. Halus, tebal, dan dirancang untuk memacu pagi produktif Anda.'}
				</h2>
			</div>
		</div>
	</section>

	<!-- ── Newsletter ── -->
	<section class="bg-primary px-4 py-16 text-center text-on-primary md:px-12 md:py-32">
		<div class="mx-auto max-w-4xl">
			<h2
				class="mb-6 font-headline text-4xl font-black tracking-tighter uppercase italic md:mb-8 md:text-8xl"
			>
				Ikuti Berita Kami.
			</h2>
			<p class="mx-auto mb-10 max-w-xl font-body text-sm opacity-80 md:mb-12 md:text-lg">
				Dapatkan akses eksklusif ke rilis rahasia dan akses awal ke ruang co-working kami.
			</p>

			<div class="relative mx-auto max-w-xl">
				<input
					type="email"
					placeholder="MASUKKAN EMAIL ANDA"
					class="w-full border-b-2 border-white bg-transparent py-4 text-center font-headline text-sm font-bold tracking-widest uppercase transition-colors placeholder:text-white/60 focus:border-white focus:outline-none"
				/>
				<button
					class="mt-6 font-headline text-sm font-black tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
				>
					Gabung
				</button>
			</div>
		</div>
	</section>
</main>

<footer
	class="border-t border-outline-variant/10 bg-surface px-4 pt-12 pb-10 text-on-surface md:px-12 md:pt-24"
>
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-10 md:grid-cols-3 md:gap-16">
			<div>
				<div class="font-headline text-3xl font-black tracking-tighter text-primary md:text-4xl">
					NAMANA
				</div>
				<p
					class="mt-4 max-w-xs font-body text-[10px] leading-relaxed tracking-widest uppercase opacity-60"
				>
					© 2024 THE COBALT EDITORIAL. HAK CIPTA DILINDUNGI KHAS.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-8 md:col-span-2">
				<div class="space-y-4">
					<p class="font-label text-[10px] font-black tracking-[0.2em] uppercase opacity-40">
						Navigasi
					</p>
					<nav class="flex flex-col space-y-2 font-body text-xs tracking-widest uppercase">
						<a href="/" class="transition-colors hover:text-primary">Pengalaman</a>
						<a href="/menu" class="transition-colors hover:text-primary">Menu</a>
						<a href="/#locations" class="transition-colors hover:text-primary">Lokasi</a>
					</nav>
				</div>
				<div class="space-y-4">
					<p class="font-label text-[10px] font-black tracking-[0.2em] uppercase opacity-40">
						Legal
					</p>
					<nav class="flex flex-col space-y-2 font-body text-xs tracking-widest uppercase">
						<a href="#privacy" class="transition-colors hover:text-primary">Privasi</a>
						<a href="#terms" class="transition-colors hover:text-primary">Syarat & Ketentuan</a>
						<a href="#sustainability" class="transition-colors hover:text-primary">Keberlanjutan</a>
						<a href="#press" class="transition-colors hover:text-primary">Pers</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(h1) {
		word-spacing: normal;
	}
</style>
