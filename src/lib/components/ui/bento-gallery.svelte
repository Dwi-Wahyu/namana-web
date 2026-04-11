<script lang="ts">
	import { Motion, AnimatePresence } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import { X } from 'lucide-svelte';

	type ImageItem = {
		id: number | string;
		title: string;
		desc: string;
		url: string;
		span: string;
	};

	let {
		imageItems = [],
		title = '',
		description = ''
	}: {
		imageItems: ImageItem[];
		title: string;
		description: string;
	} = $props();

	let selectedItem = $state<ImageItem | null>(null);
</script>

<section class="relative w-full overflow-hidden bg-surface py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 md:px-8">
		<!-- Section Header -->
		<div class="mb-10 sm:mb-14">
			<h2
				class="font-headline text-5xl font-black tracking-tighter text-on-surface italic md:text-7xl"
			>
				{title}
			</h2>
			<p class="mt-4 max-w-xl font-body text-base leading-relaxed text-on-surface-variant/70">
				{description}
			</p>
		</div>

		<!-- ── DESKTOP: Proper Bento Grid ── -->
		<div
			class="hidden auto-rows-[20rem] grid-cols-4 gap-4 md:grid lg:auto-rows-[22rem]"
		>
			{#each imageItems as item (item.id)}
				<button
					class={cn(
						'group relative cursor-pointer overflow-hidden border border-outline-variant/10 bg-surface-container-low text-left transition-all duration-500 hover:border-primary/30 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
						item.span
					)}
					onclick={() => (selectedItem = item)}
					aria-label="View {item.title}"
				>
					<!-- Image -->
					<img
						src={item.url}
						alt={item.title}
						class="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>

					<!-- Gradient -->
					<div
						class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					></div>

					<!-- Text Content -->
					<div
						class="absolute inset-x-0 bottom-0 z-20 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
					>
						<h3 class="font-headline text-xl font-black uppercase tracking-tight text-white">
							{item.title}
						</h3>
						<p class="mt-1 font-body text-sm text-white/70">{item.desc}</p>
					</div>
				</button>
			{/each}
		</div>

		<!-- ── MOBILE: 2-column tap grid ── -->
		<div class="grid grid-cols-2 gap-3 md:hidden">
			{#each imageItems as item, i (item.id)}
				<button
					class={cn(
						'group relative overflow-hidden border border-outline-variant/10 bg-surface-container-low text-left transition-all duration-300 active:scale-[0.97]',
						i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
					)}
					onclick={() => (selectedItem = item)}
					aria-label="View {item.title}"
				>
					<!-- Image -->
					<img
						src={item.url}
						alt={item.title}
						class="absolute inset-0 z-0 h-full w-full object-cover"
					/>

					<!-- Always-visible gradient on mobile -->
					<div
						class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
					></div>

					<!-- Badge tag for first item -->
					{#if i === 0}
						<div
							class="absolute top-4 left-4 z-20 bg-primary px-2 py-1 font-headline text-[9px] font-bold tracking-widest text-on-primary uppercase"
						>
							Featured
						</div>
					{/if}

					<!-- Text always visible on mobile -->
					<div class="absolute inset-x-0 bottom-0 z-20 p-3">
						<h3
							class="font-headline text-xs font-black uppercase leading-tight tracking-tight text-white {i === 0 ? 'text-sm' : ''}"
						>
							{item.title}
						</h3>
						{#if i === 0}
							<p class="mt-1 font-body text-[11px] text-white/60 line-clamp-1">{item.desc}</p>
						{/if}
					</div>
				</button>
			{/each}
		</div>
	</div>

	<!-- ── Lightbox Modal ── -->
	<AnimatePresence show={!!selectedItem}>
		{#if selectedItem}
			<Motion
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				let:motion={overlayMotion}
			>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					use:overlayMotion
					class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
					onclick={() => (selectedItem = null)}
				>
					<Motion
						initial={{ scale: 0.92, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.92, opacity: 0, y: 20 }}
						transition={{ type: 'spring', stiffness: 280, damping: 22 }}
						let:motion={contentMotion}
					>
						<div
							use:contentMotion
							class="relative mx-auto w-full max-w-4xl"
							onclick={(e) => e.stopPropagation()}
						>
							<img
								src={selectedItem.url}
								alt={selectedItem.title}
								class="mx-auto h-auto max-h-[80vh] w-full border border-white/10 object-contain shadow-2xl"
							/>
							<div class="mt-4 text-center">
								<h3 class="font-headline text-xl font-black uppercase tracking-tighter text-white md:text-2xl">
									{selectedItem.title}
								</h3>
								<p class="mt-1 font-body text-sm text-white/50">{selectedItem.desc}</p>
							</div>
						</div>
					</Motion>

					<button
						onclick={() => (selectedItem = null)}
						class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
						aria-label="Close image view"
					>
						<X size={20} />
					</button>
				</div>
			</Motion>
		{/if}
	</AnimatePresence>
</section>
