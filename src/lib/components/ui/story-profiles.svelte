<script lang="ts">
	import { onMount } from 'svelte';

	// Story profiles - each profile has 5 stories
	const profiles = [
		{
			id: 'p1',
			username: 'sarah.mks',
			initial: 'S',
			color: 'from-[#feda75] via-[#fa7e1e] to-[#d62976]',
			stories: [
				{
					src: '/product/501226394_18509736802017362_5944014104648471794_n.jpg',
					caption: 'Cobalt Dirty Latte 💙',
					time: '2h'
				},
				{
					src: '/scenery/498280138_2167924453649630_8383188952732617144_n.jpg',
					caption: 'Vibes on point ✨',
					time: '4h'
				},
				{
					src: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
					caption: 'Kunjungan ke-3! ☕',
					time: '1d'
				},
				{
					src: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
					caption: 'Sore vibe 🌇',
					time: '2d'
				},
				{
					src: '/feature/624949019_2349820035457438_8495859316638335246_n.jpg',
					caption: 'Almost there! 4/5 🎉',
					time: '3d'
				}
			]
		},
		{
			id: 'p2',
			username: 'rizkyvlntn',
			initial: 'R',
			color: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
			stories: [
				{
					src: '/scenery/502734466_1416529052708555_837181136922468108_n.jpg',
					caption: 'Workspace vibes 🖥️',
					time: '1h'
				},
				{
					src: '/product/473903495_18484460062017362_7702279212235018828_n.jpg',
					caption: 'Cold brew day 🧊',
					time: '5h'
				},
				{
					src: '/product/515105493_18517103239017362_614143355468016190_n.jpg',
					caption: 'V60 perfection 🫶',
					time: '1d'
				},
				{
					src: '/feature/497473078_18507098299017362_7767216781664247105_n.jpg',
					caption: 'Fourth visit! 🔥',
					time: '2d'
				},
				{
					src: '/product/651621931_17917261155289162_3846129621922149798_n.jpg',
					caption: 'Free drink earned! 🎊',
					time: '4d'
				}
			]
		},
		{
			id: 'p3',
			username: 'coffeelover_',
			initial: 'C',
			color: 'from-[#405de6] via-[#5851db] to-[#c13584]',
			stories: [
				{
					src: '/product/655347876_18100859437939858_6919636928105541099_n.jpg',
					caption: 'First timer here 🤩',
					time: '3h'
				},
				{
					src: '/scenery/642921837_936515735728776_3352510710565148966_n.jpg',
					caption: 'The exterior is 🔥',
					time: '8h'
				},
				{
					src: '/product/481868530_18491762725017362_4940742496875771162_n.jpg',
					caption: 'Halfway there! 🏃',
					time: '1d'
				},
				{
					src: '/product/501602578_18509736781017362_5273869525265987872_n.jpg',
					caption: 'New menu alert 🚨',
					time: '3d'
				},
				{
					src: '/feature/624003152_18114974422541337_8190005105986273144_n.jpg',
					caption: 'Tumbler love 🌿',
					time: '5d'
				}
			]
		},
		{
			id: 'p4',
			username: 'dwi.wahyu',
			initial: 'D',
			color: 'from-[#f77737] via-[#e1306c] to-[#833ab4]',
			stories: [
				{
					src: '/product/464710870_1056169755978613_4412213918762711123_n.jpg',
					caption: 'Morning fuel ☕',
					time: '1h'
				},
				{
					src: '/product/657290535_18577963453017362_7821735844328436573_n.jpg',
					caption: 'Back for more 💪',
					time: '6h'
				},
				{
					src: '/scenery/498280138_2167924453649630_8383188952732617144_n.jpg',
					caption: 'Golden hour brew 🌅',
					time: '1d'
				},
				{
					src: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
					caption: 'Dirty latte again 😍',
					time: '2d'
				},
				{
					src: '/product/515105493_18517103239017362_614143355468016190_n.jpg',
					caption: 'Free drink! Cheers! 🥳',
					time: '4d'
				}
			]
		},
		{
			id: 'p5',
			username: 'andin.mks',
			initial: 'A',
			color: 'from-[#fd1d1d] via-[#e1306c] to-[#c13584]',
			stories: [
				{
					src: '/feature/624949019_2349820035457438_8495859316638335246_n.jpg',
					caption: 'Namana date 💕',
					time: '2h'
				},
				{
					src: '/product/473903495_18484460062017362_7702279212235018828_n.jpg',
					caption: 'Nitro cold brew 🧊',
					time: '7h'
				},
				{
					src: '/scenery/502734466_1416529052708555_837181136922468108_n.jpg',
					caption: 'Study session 📚',
					time: '1d'
				},
				{
					src: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
					caption: 'Sore at Namana 🌆',
					time: '3d'
				},
				{
					src: '/product/651621931_17917261155289162_3846129621922149798_n.jpg',
					caption: 'Last story! Free drink! 🎉',
					time: '5d'
				}
			]
		},
		{
			id: 'p6',
			username: 'makassar.eats',
			initial: 'M',
			color: 'from-[#fcb045] via-[#fd1d1d] to-[#833ab4]',
			stories: [
				{
					src: '/product/655347876_18100859437939858_6919636928105541099_n.jpg',
					caption: 'Review time! ⭐',
					time: '30m'
				},
				{
					src: '/product/501226394_18509736802017362_5944014104648471794_n.jpg',
					caption: 'Cobalt vibes 💙',
					time: '4h'
				},
				{
					src: '/feature/497473078_18507098299017362_7767216781664247105_n.jpg',
					caption: '3rd kunjungan! 🏆',
					time: '2d'
				},
				{
					src: '/scenery/642921837_936515735728776_3352510710565148966_n.jpg',
					caption: 'Best spot in MKS 📍',
					time: '3d'
				},
				{
					src: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
					caption: 'Minuman gratis! 🆓',
					time: '5d'
				}
			]
		},
		{
			id: 'p7',
			username: 'naya.coffee',
			initial: 'N',
			color: 'from-[#5851db] via-[#405de6] to-[#2e5bff]',
			stories: [
				{
					src: '/product/501602578_18509736781017362_5273869525265987872_n.jpg',
					caption: 'Iced latte love 🧋',
					time: '1h'
				},
				{
					src: '/product/481868530_18491762725017362_4940742496875771162_n.jpg',
					caption: 'Visit #2 done! ✅',
					time: '3h'
				},
				{
					src: '/scenery/498280138_2167924453649630_8383188952732617144_n.jpg',
					caption: 'Blue aesthetic 💎',
					time: '1d'
				},
				{
					src: '/product/657290535_18577963453017362_7821735844328436573_n.jpg',
					caption: 'Almost free drink! 🤞',
					time: '2d'
				},
				{
					src: '/feature/624003152_18114974422541337_8190005105986273144_n.jpg',
					caption: 'CLAIMED! 🏆☕',
					time: '4d'
				}
			]
		},
		{
			id: 'p8',
			username: 'kopi.daily',
			initial: 'K',
			color: 'from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
			stories: [
				{
					src: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
					caption: 'Daily dose! ☕',
					time: '45m'
				},
				{
					src: '/scenery/502734466_1416529052708555_837181136922468108_n.jpg',
					caption: 'Cozy corner 🛋️',
					time: '3h'
				},
				{
					src: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
					caption: 'Third time here 💫',
					time: '1d'
				},
				{
					src: '/product/657290535_18577963453017362_7821735844328436573_n.jpg',
					caption: 'Satu lagi! 🤘',
					time: '2d'
				},
				{
					src: '/feature/624949019_2349820035457438_8495859316638335246_n.jpg',
					caption: 'Free drink here! 🍹',
					time: '4d'
				}
			]
		},
		{
			id: 'p9',
			username: 'fikri.mks',
			initial: 'F',
			color: 'from-[#ff6b6b] via-[#ee5a24] to-[#f9ca24]',
			stories: [
				{
					src: '/product/473903495_18484460062017362_7702279212235018828_n.jpg',
					caption: 'Cold brew addict 🧊',
					time: '2h'
				},
				{
					src: '/product/655347876_18100859437939858_6919636928105541099_n.jpg',
					caption: 'Back again! 🔄',
					time: '5h'
				},
				{
					src: '/scenery/642921837_936515735728776_3352510710565148966_n.jpg',
					caption: 'Namana vibes 🏠',
					time: '1d'
				},
				{
					src: '/product/501226394_18509736802017362_5944014104648471794_n.jpg',
					caption: 'Latte art 🎨',
					time: '3d'
				},
				{
					src: '/product/515105493_18517103239017362_614143355468016190_n.jpg',
					caption: 'DONE! Free drink! 🎉',
					time: '5d'
				}
			]
		},
		{
			id: 'p10',
			username: 'tia.aesthetic',
			initial: 'T',
			color: 'from-[#a18cd1] via-[#fbc2eb] to-[#f093fb]',
			stories: [
				{
					src: '/feature/497473078_18507098299017362_7767216781664247105_n.jpg',
					caption: 'Aesthetic spot 📸',
					time: '1h'
				},
				{
					src: '/product/464710870_1056169755978613_4412213918762711123_n.jpg',
					caption: 'Coffee date 💖',
					time: '4h'
				},
				{
					src: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
					caption: 'Fav menu 😍',
					time: '2d'
				},
				{
					src: '/scenery/498280138_2167924453649630_8383188952732617144_n.jpg',
					caption: 'Blue hour ☁️',
					time: '3d'
				},
				{
					src: '/product/651621931_17917261155289162_3846129621922149798_n.jpg',
					caption: 'Claimed my drink! 🥤',
					time: '5d'
				}
			]
		},
		{
			id: 'p11',
			username: 'budi.ngopi',
			initial: 'B',
			color: 'from-[#11998e] via-[#38ef7d] to-[#11998e]',
			stories: [
				{
					src: '/product/501602578_18509736781017362_5273869525265987872_n.jpg',
					caption: 'Weekend brew 🫖',
					time: '30m'
				},
				{
					src: '/product/481868530_18491762725017362_4940742496875771162_n.jpg',
					caption: 'Second visit ✌️',
					time: '6h'
				},
				{
					src: '/feature/624003152_18114974422541337_8190005105986273144_n.jpg',
					caption: 'Tumbler squad 🌱',
					time: '1d'
				},
				{
					src: '/product/473903495_18484460062017362_7702279212235018828_n.jpg',
					caption: 'Almost there 🏁',
					time: '3d'
				},
				{
					src: '/scenery/502734466_1416529052708555_837181136922468108_n.jpg',
					caption: 'Minuman gratis! 🆓',
					time: '4d'
				}
			]
		},
		{
			id: 'p12',
			username: 'rara.journal',
			initial: 'R',
			color: 'from-[#ff9a9e] via-[#fecfef] to-[#fad0c4]',
			stories: [
				{
					src: '/scenery/642921837_936515735728776_3352510710565148966_n.jpg',
					caption: 'Journal time 📝',
					time: '1h'
				},
				{
					src: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
					caption: 'Sore coffee ☀️',
					time: '5h'
				},
				{
					src: '/product/657290535_18577963453017362_7821735844328436573_n.jpg',
					caption: 'Visit ke-3 🎯',
					time: '2d'
				},
				{
					src: '/feature/624949019_2349820035457438_8495859316638335246_n.jpg',
					caption: 'One more to go! 🔥',
					time: '3d'
				},
				{
					src: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
					caption: 'Free drink! ☕🎊',
					time: '5d'
				}
			]
		}
	];

	// Randomized positions for 12 profiles — scattered but balanced grid
	const profilePositions = [
		// Row 1
		{ top: '0%', left: '3%', delay: '0s' },
		{ top: '5%', left: '26%', delay: '0.08s' },
		{ top: '2%', left: '50%', delay: '0.16s' },
		{ top: '7%', left: '76%', delay: '0.04s' },
		// Row 2
		{ top: '30%', left: '8%', delay: '0.2s' },
		{ top: '34%', left: '35%', delay: '0.12s' },
		{ top: '28%', left: '60%', delay: '0.24s' },
		{ top: '32%', left: '84%', delay: '0.06s' },
		// Row 3
		{ top: '58%', left: '1%', delay: '0.28s' },
		{ top: '63%', left: '24%', delay: '0.14s' },
		{ top: '56%', left: '52%', delay: '0.22s' },
		{ top: '61%', left: '78%', delay: '0.1s' }
	];

	// State
	let activeProfile: (typeof profiles)[0] | null = $state(null);
	let activeStoryIndex = $state(0);
	let storyProgress = $state(0);
	let storyTimer: ReturnType<typeof setInterval> | null = null;
	let isModalOpen = $state(false);
	let profilesVisible = $state(false);

	const STORY_DURATION = 5000; // 5 seconds per story
	const PROGRESS_INTERVAL = 50;

	function openStories(profile: (typeof profiles)[0]) {
		activeProfile = profile;
		activeStoryIndex = 0;
		storyProgress = 0;
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
		startStoryTimer();
	}

	function closeStories() {
		isModalOpen = false;
		activeProfile = null;
		activeStoryIndex = 0;
		storyProgress = 0;
		document.body.style.overflow = '';
		stopStoryTimer();
	}

	function startStoryTimer() {
		stopStoryTimer();
		storyProgress = 0;
		storyTimer = setInterval(() => {
			storyProgress += (PROGRESS_INTERVAL / STORY_DURATION) * 100;
			if (storyProgress >= 100) {
				nextStory();
			}
		}, PROGRESS_INTERVAL);
	}

	function stopStoryTimer() {
		if (storyTimer) {
			clearInterval(storyTimer);
			storyTimer = null;
		}
	}

	function nextStory() {
		if (!activeProfile) return;
		if (activeStoryIndex < activeProfile.stories.length - 1) {
			activeStoryIndex++;
			storyProgress = 0;
			startStoryTimer();
		} else {
			closeStories();
		}
	}

	function prevStory() {
		if (activeStoryIndex > 0) {
			activeStoryIndex--;
			storyProgress = 0;
			startStoryTimer();
		}
	}

	function handleStoryClick(e: MouseEvent) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		if (clickX < rect.width / 3) {
			prevStory();
		} else {
			nextStory();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isModalOpen) return;
		if (e.key === 'Escape') closeStories();
		if (e.key === 'ArrowRight') nextStory();
		if (e.key === 'ArrowLeft') prevStory();
	}

	onMount(() => {
		// Trigger entrance animation
		setTimeout(() => {
			profilesVisible = true;
		}, 300);

		return () => {
			stopStoryTimer();
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<section class="story-section relative overflow-hidden bg-primary px-6 py-24 text-on-primary md:px-12 md:py-32">
	<!-- Decorative Elements -->
	<div class="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl"></div>
	<div class="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#003cd3]/30 blur-3xl"></div>
	<div class="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl"></div>

	<div class="mx-auto max-w-7xl">
		<!-- 1. Title -->
		<div class="mb-8 text-center md:mb-12">
			<span class="font-headline text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
				Snap · Share · Savor
			</span>
			<h2 class="mt-4 font-headline text-5xl leading-[0.85] font-black tracking-tighter md:text-7xl lg:text-8xl">
				5 STORIES =<br /><span class="italic opacity-90">1 FREE DRINK.</span>
			</h2>
		</div>

		<!-- 2. IG Profile Bubbles - Scattered Layout -->
		<div class="profile-field relative mx-auto my-8 h-[440px] max-w-5xl md:my-12 md:h-[480px]">
			{#each profiles as profile, i (profile.id)}
				<button
					onclick={() => openStories(profile)}
					class="profile-bubble group absolute flex flex-col items-center gap-1.5 transition-all duration-700"
					class:profile-visible={profilesVisible}
					style="
						top: {profilePositions[i].top};
						left: {profilePositions[i].left};
						transition-delay: {profilePositions[i].delay};
					"
				>
					<!-- IG Gradient Ring -->
					<div class="relative transition-transform duration-300 group-hover:scale-110">
						<div class="ig-ring rounded-full p-[3px] bg-gradient-to-tr {profile.color}">
							<div class="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#2e5bff] bg-surface-container-high md:h-[72px] md:w-[72px]">
								<img
									src={profile.stories[0].src}
									alt={profile.username}
									class="h-full w-full rounded-full object-cover"
								/>
							</div>
						</div>
						<!-- Story count indicator -->
						<div class="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff3040] text-[8px] font-bold text-white ring-2 ring-[#2e5bff] md:h-[22px] md:w-[22px] md:text-[9px]">
							5
						</div>
					</div>
					<!-- Username -->
					<span class="max-w-[72px] truncate font-label text-[9px] font-semibold text-white/70 transition-colors group-hover:text-white md:max-w-[90px] md:text-[10px]">
						{profile.username}
					</span>
				</button>
			{/each}

			<!-- Floating decorative dots -->
			<div class="pointer-events-none absolute top-[18%] left-[22%] h-1 w-1 animate-pulse rounded-full bg-white/20"></div>
			<div class="pointer-events-none absolute top-[45%] left-[48%] h-1.5 w-1.5 animate-pulse rounded-full bg-white/15" style="animation-delay: 0.5s;"></div>
			<div class="pointer-events-none absolute top-[72%] left-[15%] h-1 w-1 animate-pulse rounded-full bg-white/10" style="animation-delay: 1s;"></div>
			<div class="pointer-events-none absolute top-[12%] left-[70%] h-0.5 w-0.5 animate-pulse rounded-full bg-white/25" style="animation-delay: 1.5s;"></div>
			<div class="pointer-events-none absolute top-[55%] left-[75%] h-1 w-1 animate-pulse rounded-full bg-white/15" style="animation-delay: 2s;"></div>
			<div class="pointer-events-none absolute top-[82%] left-[45%] h-0.5 w-0.5 animate-pulse rounded-full bg-white/20" style="animation-delay: 0.8s;"></div>
		</div>

		<!-- 3. Description & Rules -->
		<div class="mx-auto max-w-3xl">
			<!-- Description -->
			<p class="mx-auto max-w-xl text-center font-body text-base leading-relaxed text-white/85 md:text-lg">
				Buat 5 story di Instagram setiap kali berkunjung ke
				<strong class="text-white">@namana.coffee</strong>. Unggah satu story setiap kunjungan
				berbeda, dan setelah lima kunjungan, nikmati minuman gratis pilihanmu!
			</p>

			<!-- Rules Cards -->
			<div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
				<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 font-headline text-xs font-bold text-white">
						1
					</div>
					<span class="font-body text-[12px] leading-snug text-white/70 md:text-[13px]">
						Satu story = satu kunjungan
					</span>
				</div>
				<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 font-headline text-xs font-bold text-white">
						5
					</div>
					<span class="font-body text-[12px] leading-snug text-white/70 md:text-[13px]">
						Total 5 kunjungan untuk klaim
					</span>
				</div>
				<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 font-headline text-xs font-bold text-white">
						@
					</div>
					<span class="font-body text-[12px] leading-snug text-white/70 md:text-[13px]">
						Wajib tag @namana.coffee
					</span>
				</div>
			</div>

			<!-- CTA -->
			<div class="mt-8 text-center">
				<button
					class="border border-white/30 bg-white/10 px-8 py-3 font-headline text-xs font-bold tracking-widest backdrop-blur-sm transition-all hover:bg-white hover:text-primary"
				>
					MULAI SEKARANG
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Story Viewer Modal -->
{#if isModalOpen && activeProfile}
	<!-- Backdrop -->
	<div
		class="story-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
		role="dialog"
		aria-modal="true"
		aria-label="Story viewer"
	>
		<!-- Close Button -->
		<button
			onclick={closeStories}
			class="absolute top-4 right-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 md:top-6 md:right-6"
			aria-label="Close stories"
		>
			<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		</button>

		<!-- Story Container (Phone frame) -->
		<div
			class="story-container relative mx-auto h-[85vh] w-[min(380px,92vw)] overflow-hidden rounded-2xl bg-black shadow-2xl md:h-[90vh] md:w-[380px] md:rounded-3xl"
			onclick={handleStoryClick}
			onkeydown={(e) => e.key === 'Enter' && nextStory()}
			role="button"
			tabindex="0"
		>
			<!-- Story Image -->
			{#key activeStoryIndex}
				<img
					src={activeProfile.stories[activeStoryIndex].src}
					alt={activeProfile.stories[activeStoryIndex].caption}
					class="story-image absolute inset-0 h-full w-full object-cover"
				/>
			{/key}

			<!-- Top Gradient -->
			<div class="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

			<!-- Bottom Gradient -->
			<div class="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

			<!-- Progress Bars (5 segments) -->
			<div class="absolute inset-x-0 top-0 z-20 flex gap-[3px] px-3 pt-3">
				{#each activeProfile.stories as _, segIndex (segIndex)}
					<div class="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
						<div
							class="h-full rounded-full bg-white transition-none"
							style="width: {segIndex < activeStoryIndex
								? 100
								: segIndex === activeStoryIndex
									? storyProgress
									: 0}%;"
						></div>
					</div>
				{/each}
			</div>

			<!-- User Row -->
			<div class="absolute top-5 right-3 left-3 z-20 flex items-center justify-between">
				<div class="flex items-center gap-2.5">
					<!-- IG Gradient Ring Avatar -->
					<div class="rounded-full bg-gradient-to-tr p-[2px] {activeProfile.color}">
						<div class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-surface-container-high">
							<img
								src={activeProfile.stories[0].src}
								alt={activeProfile.username}
								class="h-full w-full rounded-full object-cover"
							/>
						</div>
					</div>
					<span class="text-sm font-semibold text-white drop-shadow-sm">
						{activeProfile.username}
					</span>
					<span class="text-xs text-white/50">{activeProfile.stories[activeStoryIndex].time}</span>
				</div>
				<!-- Close -->
				<button
					onclick={(e) => {
						e.stopPropagation();
						closeStories();
					}}
					class="text-white/70 hover:text-white"
					aria-label="Close"
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>
			</div>

			<!-- Visit Counter Badge -->
			<div class="absolute top-16 left-1/2 z-20 -translate-x-1/2">
				<div class="rounded-full bg-black/40 px-4 py-1.5 text-center backdrop-blur-sm">
					<span class="text-[11px] font-semibold text-white/90">
						Kunjungan {activeStoryIndex + 1} / 5
					</span>
				</div>
			</div>

			<!-- Caption & Reply Bar (Bottom) -->
			<div class="absolute inset-x-0 bottom-0 z-20 px-4 pb-4">
				<!-- Tag -->
				<div class="mb-2 inline-block rounded-md bg-primary/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
					@namana.coffee
				</div>
				<!-- Caption -->
				<p class="mb-3 text-sm font-medium text-white/90 drop-shadow-md">
					{activeProfile.stories[activeStoryIndex].caption}
				</p>
				<!-- Reply Bar -->
				<div class="flex items-center gap-2">
					<div class="flex-1 rounded-full border border-white/25 px-4 py-2">
						<span class="text-xs text-white/40">Kirim pesan...</span>
					</div>
					<!-- Heart -->
					<svg class="h-5 w-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
					</svg>
					<!-- Share -->
					<svg class="h-5 w-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="22" y1="2" x2="11" y2="13" />
						<polygon points="22 2 15 22 11 13 2 9 22 2" />
					</svg>
				</div>
			</div>

			<!-- Navigation Hint -->
			<div class="pointer-events-none absolute inset-0 z-[5]">
				<div class="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<svg class="h-6 w-6 text-white/30" viewBox="0 0 24 24" fill="currentColor">
						<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
					</svg>
				</div>
				<div class="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<svg class="h-6 w-6 text-white/30" viewBox="0 0 24 24" fill="currentColor">
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
					</svg>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Profile entrance animation */
	.profile-bubble {
		opacity: 0;
		transform: scale(0.5) translateY(20px);
	}

	.profile-bubble.profile-visible {
		opacity: 1;
		transform: scale(1) translateY(0);
	}

	/* IG ring animation */
	.ig-ring {
		animation: ring-shimmer 3s ease-in-out infinite;
	}

	@keyframes ring-shimmer {
		0%, 100% { filter: brightness(1); }
		50% { filter: brightness(1.2); }
	}

	/* Story image animation */
	.story-image {
		animation: story-fade-in 0.3s ease-out;
	}

	@keyframes story-fade-in {
		from { opacity: 0; transform: scale(1.05); }
		to { opacity: 1; transform: scale(1); }
	}

	/* Modal entrance */
	.story-modal {
		animation: modal-in 0.3s cubic-bezier(0.23, 1, 0.32, 1);
	}

	@keyframes modal-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.story-container {
		animation: story-container-in 0.4s cubic-bezier(0.23, 1, 0.32, 1);
	}

	@keyframes story-container-in {
		from { opacity: 0; transform: scale(0.9) translateY(20px); }
		to { opacity: 1; transform: scale(1) translateY(0); }
	}

	/* Profile bubble hover glow */
	.profile-bubble::before {
		content: '';
		position: absolute;
		inset: -8px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.profile-bubble:hover::before {
		opacity: 1;
	}
</style>
