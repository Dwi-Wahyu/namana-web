<script lang="ts">
	import { Motion, AnimatePresence, useViewportScroll, useTransform } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import { X } from 'lucide-svelte';
	import { onMount } from 'svelte';

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
	let dragConstraint = $state(0);
	let containerRef = $state<HTMLDivElement | null>(null);
	let gridRef = $state<HTMLDivElement | null>(null);
	let targetRef = $state<HTMLDivElement | null>(null);

	function calculateConstraints() {
		if (gridRef && containerRef) {
			const containerWidth = containerRef.offsetWidth;
			const gridWidth = gridRef.scrollWidth;
			dragConstraint = Math.min(0, containerWidth - gridWidth - 32);
		}
	}

	onMount(() => {
		calculateConstraints();
		window.addEventListener('resize', calculateConstraints);
		return () => window.removeEventListener('resize', calculateConstraints);
	});

	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
	const y = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { type: 'spring', stiffness: 100, damping: 15 }
		}
	};
</script>

<section
	bind:this={targetRef}
	class="relative w-full overflow-hidden bg-surface py-16 sm:py-24"
>
	<Motion let:motion style={{ opacity, y }}>
		<div use:motion class="container mx-auto px-4 text-center">
			<h2 class="font-headline text-3xl font-black tracking-tight text-on-surface sm:text-4xl md:text-5xl">
				{title}
			</h2>
			<p class="mx-auto mt-4 max-w-2xl font-body text-lg text-on-surface-variant opacity-70">
				{description}
			</p>
		</div>
	</Motion>

	<div
		bind:this={containerRef}
		class="relative mt-12 w-full cursor-grab active:cursor-grabbing"
	>
		<Motion
			drag="x"
			dragConstraints={{ left: dragConstraint, right: 0 }}
			dragElastic={0.05}
			let:motion
		>
			<div use:motion class="w-max">
				<Motion
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					let:motion={gridMotion}
				>
					<div
						bind:this={gridRef}
						use:gridMotion
						class="grid auto-cols-[minmax(18rem,1fr)] grid-flow-col gap-6 px-4 md:px-8"
					>
						{#each imageItems as item (item.id)}
							<Motion
								variants={itemVariants}
								let:motion={itemMotion}
							>
								<div
									use:itemMotion
									class={cn(
										'group relative flex h-[25rem] w-full min-w-[18rem] cursor-pointer items-end overflow-hidden border border-outline-variant/10 bg-surface-container-low transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
										item.span
									)}
									onclick={() => (selectedItem = item)}
									onkeydown={(e) => e.key === 'Enter' && (selectedItem = item)}
									tabindex="0"
									role="button"
									aria-label="View {item.title}"
								>
									<!-- Image: z-0 -->
									<img
										src={item.url}
										alt={item.title}
										class="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									
									<!-- Gradient Overlay: z-10 -->
									<div
										class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									></div>
									
									<!-- Text Content: z-20 -->
									<div
										class="relative z-20 w-full p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
									>
										<h3 class="font-headline text-xl font-black text-white uppercase tracking-tight">
											{item.title}
										</h3>
										<p class="font-body mt-2 text-sm text-white/70">{item.desc}</p>
									</div>
								</div>
							</Motion>
						{/each}
					</div>
				</Motion>
			</div>
		</Motion>
	</div>

	<AnimatePresence show={!!selectedItem}>
		{#if selectedItem}
			<Motion
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				let:motion={modalOverlayMotion}
			>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					use:modalOverlayMotion
					class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
					onclick={() => (selectedItem = null)}
				>
					<Motion
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: 'spring', stiffness: 260, damping: 20 }}
						let:motion={modalContentMotion}
					>
						<div
							use:modalContentMotion
							class="relative w-full max-w-5xl"
							onclick={(e) => e.stopPropagation()}
						>
							<img
								src={selectedItem.url}
								alt={selectedItem.title}
								class="h-auto max-h-[85vh] w-full border border-white/10 object-contain shadow-2xl mx-auto"
							/>
							<div class="mt-6 text-center">
								<h3 class="font-headline text-2xl font-black text-white uppercase tracking-tighter">
									{selectedItem.title}
								</h3>
								<p class="font-body mt-2 text-white/60">{selectedItem.desc}</p>
							</div>
						</div>
					</Motion>
					<button
						onclick={() => (selectedItem = null)}
						class="absolute right-8 top-8 text-white/50 transition-colors hover:text-white"
						aria-label="Close image view"
					>
						<X size={40} />
					</button>
				</div>
			</Motion>
		{/if}
	</AnimatePresence>
</section>
