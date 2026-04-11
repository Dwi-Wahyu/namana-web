<script lang="ts">
	import { ShoppingCart, Minus, Plus, CupSoda, MessageCircle } from 'lucide-svelte';

	interface BottleProduct {
		id: string;
		name: string;
		variant: string;
		price: number;
		size: string;
		image: string;
		description: string;
		tag?: string;
	}

	const bottles: BottleProduct[] = [
		{
			id: 'kopina',
			name: "KOPI'NA",
			variant: 'Original Coffee',
			price: 33000,
			size: '500ml',
			image: '/product/kopina-bottle.png',
			description:
				'Kopi susu premium dalam kemasan botol 500ml. Freshly made by order, pas buat stock kopi di rumah atau kantor.',
			tag: 'BEST SELLER'
		},
		{
			id: 'coklat',
			name: 'COKLAT',
			variant: 'Chocolate Coffee',
			price: 30000,
			size: '500ml',
			image: '/product/coklat-bottle.png',
			description:
				'Perpaduan kopi dan coklat premium dalam botol 500ml. Varian coklat yang bikin mood setiap aktivitas mu.',
			tag: 'NEW'
		}
	];

	let quantities = $state<Record<string, number>>({
		kopina: 0,
		coklat: 0
	});

	let showCart = $state(false);
	let selectedProduct = $state<string | null>(null);

	function increment(id: string) {
		quantities[id] = (quantities[id] || 0) + 1;
	}

	function decrement(id: string) {
		if (quantities[id] > 0) {
			quantities[id]--;
		}
	}

	let totalItems = $derived(Object.values(quantities).reduce((a, b) => a + b, 0));
	let totalPrice = $derived(
		bottles.reduce((sum, bottle) => sum + bottle.price * (quantities[bottle.id] || 0), 0)
	);

	function formatPrice(price: number): string {
		return new Intl.NumberFormat('id-ID').format(price);
	}

	function orderViaWhatsApp() {
		const items = bottles
			.filter((b) => quantities[b.id] > 0)
			.map(
				(b) =>
					`• ${b.name} (${b.size}) x${quantities[b.id]} — Rp${formatPrice(b.price * quantities[b.id])}`
			)
			.join('\n');

		const message = encodeURIComponent(
			`Halo Namana Coffee! ☕\n\nSaya ingin memesan Kopi Botol:\n\n${items}\n\nTotal: Rp${formatPrice(totalPrice)}\n\nTerima kasih! 🙏`
		);

		window.open(`https://wa.me/6282192076?text=${message}`, '_blank');
	}
</script>

<section
	id="kopi-botol"
	class="relative overflow-hidden bg-surface-container-low px-4 pb-12 md:px-12"
>
	<!-- Subtle Background Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02]">
		<div
			class="h-full w-full"
			style="background-image: radial-gradient(var(--color-primary) 1px, transparent 1px); background-size: 32px 32px;"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl">
		<!-- Section Header -->
		<div class="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<div class="mb-4 flex items-center gap-3">
					<CupSoda class="text-primary" size={20} />
					<span class="font-headline text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
						Bawa & Pergi
					</span>
				</div>
				<h2
					class="font-headline text-5xl leading-[0.9] font-black tracking-tighter uppercase md:text-7xl"
				>
					KOPI<br /><span class="text-primary italic">BOTOL.</span>
				</h2>
				<p class="mt-6 max-w-lg font-body text-base leading-relaxed text-on-surface-variant">
					Mager keluar rumah tapi stock kopi habis? Amankan Kopi'Na kemasan 500ml — lebih hemat dan
					siapnya banyak! Freshly made by order setiap hari.
				</p>
			</div>

			<!-- Floating Cart Summary (Desktop) -->
			{#if totalItems > 0}
				<div
					class="hidden items-center gap-6 border border-outline-variant/15 bg-surface-container-lowest p-6 shadow-lg md:flex"
					style="animation: slideUp 0.3s ease-out;"
				>
					<div>
						<p class="font-headline text-[10px] font-bold tracking-widest uppercase opacity-60">
							Keranjang
						</p>
						<p class="mt-1 font-headline text-2xl font-black text-primary">
							Rp{formatPrice(totalPrice)}
						</p>
						<p class="font-body text-xs text-on-surface-variant">{totalItems} botol</p>
					</div>
					<button
						onclick={orderViaWhatsApp}
						class="flex items-center gap-2 bg-[#25D366] px-6 py-3 font-headline text-xs font-bold tracking-widest text-white transition-all hover:bg-[#1fb855] active:scale-95"
					>
						<MessageCircle size={16} />
						PESAN
					</button>
				</div>
			{/if}
		</div>

		<!-- Products Grid -->
		<div 
			class="flex gap-4 overflow-x-auto pb-6 pt-2 px-1 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible md:pb-0 md:px-0 md:gap-8"
			style="scrollbar-width: none; -ms-overflow-style: none;"
		>
			{#each bottles as bottle (bottle.id)}
				<div
					class="w-[85vw] shrink-0 snap-center md:w-auto group relative overflow-hidden border border-outline-variant/10 bg-surface-container-lowest transition-all duration-500 hover:border-primary/20 hover:shadow-xl"
				>
					<!-- Tag Badge -->
					{#if bottle.tag}
						<div
							class="absolute top-6 left-6 z-10 bg-primary px-3 py-1 font-headline text-[9px] font-bold tracking-widest text-on-primary"
						>
							{bottle.tag}
						</div>
					{/if}

					<!-- Product Image -->
					<div
						class="relative overflow-hidden bg-linear-to-b from-surface-container-high/50 to-surface-container-low/30 p-8 md:p-12"
					>
						<div class="relative mx-auto w-48 md:w-56">
							<img
								src={bottle.image}
								alt={bottle.name}
								class="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2"
							/>
						</div>
						<!-- Size Badge -->
						<div
							class="absolute right-6 bottom-6 bg-inverse-surface px-3 py-1 font-headline text-[10px] font-bold tracking-wider text-on-primary"
						>
							{bottle.size}
						</div>
					</div>

					<!-- Product Info -->
					<div class="p-6 md:p-8">
						<div class="flex items-start justify-between gap-4">
							<div>
								<h3 class="font-headline text-2xl font-black tracking-tight md:text-3xl">
									{bottle.name}
								</h3>
								<p
									class="mt-1 font-headline text-xs font-bold tracking-widest text-on-surface-variant uppercase"
								>
									{bottle.variant}
								</p>
							</div>
							<div class="text-right">
								<p class="font-body text-xs tracking-wider text-on-surface-variant uppercase">Rp</p>
								<p class="font-headline text-2xl font-black text-primary md:text-3xl">
									{(bottle.price / 1000).toFixed(0)}K
								</p>
							</div>
						</div>

						<p class="mt-4 font-body text-sm leading-relaxed text-on-surface-variant">
							{bottle.description}
						</p>

						<!-- Quantity Controls -->
						<div
							class="mt-6 flex flex-col items-center justify-between gap-2 border-t border-outline-variant/15 pt-6 md:flex-row"
						>
							<div class="flex w-full items-center gap-1">
								<button
									onclick={() => decrement(bottle.id)}
									class="flex h-10 w-10 items-center justify-center border border-outline-variant/20 bg-surface-container-low text-on-surface transition-all hover:border-primary hover:text-primary active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
								>
									<Minus size={16} />
								</button>
								<div
									class="flex h-10 w-full items-center justify-center border-y border-outline-variant/20 font-headline text-lg font-bold md:w-14"
								>
									{quantities[bottle.id]}
								</div>
								<button
									onclick={() => increment(bottle.id)}
									class="flex h-10 w-10 items-center justify-center border border-outline-variant/20 bg-surface-container-low text-on-surface transition-all hover:border-primary hover:text-primary active:scale-90"
								>
									<Plus size={16} />
								</button>
							</div>

							{#if quantities[bottle.id] > 0}
								<p
									class="font-headline text-lg font-black text-primary"
									style="animation: fadeIn 0.2s ease-out;"
								>
									Rp{formatPrice(bottle.price * quantities[bottle.id])}
								</p>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Info Banner -->
		<div class="mt-12 grid gap-4 sm:grid-cols-3">
			<div
				class="flex items-center gap-4 border border-outline-variant/10 bg-surface-container-lowest p-5"
			>
				<span class="material-symbols-outlined text-2xl text-primary">local_shipping</span>
				<div>
					<p class="font-headline text-xs font-bold tracking-wider uppercase">Dibuat Segar</p>
					<p class="mt-0.5 text-xs text-on-surface-variant">Dibuat fresh setiap hari</p>
				</div>
			</div>
			<div
				class="flex items-center gap-4 border border-outline-variant/10 bg-surface-container-lowest p-5"
			>
				<span class="material-symbols-outlined text-2xl text-primary">verified</span>
				<div>
					<p class="font-headline text-xs font-bold tracking-wider uppercase">Biji Premium</p>
					<p class="mt-0.5 text-xs text-on-surface-variant">100% biji kopi pilihan</p>
				</div>
			</div>
			<div
				class="flex items-center gap-4 border border-outline-variant/10 bg-surface-container-lowest p-5"
			>
				<span class="material-symbols-outlined text-2xl text-primary">inventory_2</span>
				<div>
					<p class="font-headline text-xs font-bold tracking-wider uppercase">Stok Tersedia</p>
					<p class="mt-0.5 text-xs text-on-surface-variant">Kemasan 500ml hemat</p>
				</div>
			</div>
		</div>

		<!-- Mobile Sticky Order Bar -->
		{#if totalItems > 0}
			<div
				class="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-between border-t border-outline-variant/15 bg-surface-container-lowest/95 px-6 py-4 shadow-2xl backdrop-blur-xl md:hidden"
				style="animation: slideUp 0.3s ease-out;"
			>
				<div>
					<p class="font-headline text-lg font-black text-primary">
						Rp{formatPrice(totalPrice)}
					</p>
					<p class="font-body text-xs text-on-surface-variant">{totalItems} botol</p>
				</div>
				<button
					onclick={orderViaWhatsApp}
					class="flex items-center gap-2 bg-[#25D366] px-6 py-3 font-headline text-xs font-bold tracking-widest text-white transition-all hover:bg-[#1fb855] active:scale-95"
				>
					<MessageCircle size={16} />
					PESAN
				</button>
			</div>
		{/if}
	</div>
</section>

<style>
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
