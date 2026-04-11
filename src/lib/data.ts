import { Coffee, Wind, Flame, Star, Cake } from 'lucide-svelte';

export const categories = [
	{ name: 'Espresso', icon: Coffee },
	{ name: 'Cold Brew', icon: Wind },
	{ name: 'Pour Over', icon: Flame },
	{ name: 'Seasonal', icon: Star },
	{ name: 'Bakery', icon: Cake }
];

export const products = [
	{
		id: 1,
		name: 'DOUBLE SHOT NITRO',
		desc: 'Ekstraksi kafein presisi untuk kerja kognitif yang cepat.',
		price: 'Rp 65.000',
		image: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
		category: 'Espresso',
		tag: 'BATCH DIGITAL #01',
		vibeNotes: 'Teman sempurna untuk kerja fokus. Halus, tebal, dan dirancang untuk memacu pagi produktif Anda.',
		details: {
			caffeine: 'Tinggi',
			flavor: 'Krim & Tebal'
		},
		gallery: [
			'/feature/497473078_18507098299017362_7767216781664247105_n.jpg',
			'/feature/624003152_18114974422541337_8190005105986273144_n.jpg',
			'/feature/624949019_2349820035457438_8495859316638335246_n.jpg',
			'/scenery/498280138_2167924453649630_8383188952732617144_n.jpg'
		]
	},
	{
		id: 2,
		name: 'COBALT COLD BREW',
		desc: 'Ekstraksi tetesan lambat 24 jam. Tanpa rasa pahit. Tenaga penuh.',
		price: 'Rp 72.000',
		image: '/product/473903495_18484460062017362_7702279212235018828_n.jpg',
		category: 'Cold Brew',
		tag: 'PERFORMA PUNCAK',
		vibeNotes: 'Diteteskan perlahan selama 24 jam untuk memastikan dorongan kafein yang paling bersih.',
		details: {
			caffeine: 'Menengah-Tinggi',
			flavor: 'Halus & Segar'
		},
		gallery: [
			'/product/473903495_18484460062017362_7702279212235018828_n.jpg',
			'/scenery/502734466_1416529052708555_837181136922468108_n.jpg',
			'/scenery/642921837_936515735728776_3352510710565148966_n.jpg',
			'/feature/497473078_18507098299017362_7767216781664247105_n.jpg'
		]
	},
	{
		id: 3,
		name: 'ARCHITECT LATTE',
		desc: 'Lapisan terstruktur dari busa mikro dan espresso dataran tinggi.',
		price: 'Rp 58.000',
		image: '/product/515105493_18517103239017362_614143355468016190_n.jpg',
		category: 'Espresso',
		vibeNotes: 'Karya agung struktural antara busa dan espresso. Sangat seimbang.',
		details: {
			caffeine: 'Menengah',
			flavor: 'Seimbang & Halus'
		},
		gallery: []
	},
	{
		id: 4,
		name: 'KINETIC ICED',
		desc: 'Solusi dingin seketika untuk kaum urban yang bergerak cepat.',
		price: 'Rp 60.000',
		image: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
		category: 'Cold Brew',
		vibeNotes: 'Didinginkan dengan cepat untuk mengunci karakter segar dari biji asal tunggal kami.',
		details: {
			caffeine: 'Menengah',
			flavor: 'Renik & Cerah'
		},
		gallery: []
	},
	{
		id: 5,
		name: 'VOID BLACK SPECIAL',
		desc: 'Campuran biji kopi eksperimental dari puncak vulkanik Sulawesi.',
		price: 'Rp 85.000',
		image: '/product/655347876_18100859437939858_6919636928105541099_n.jpg',
		category: 'Seasonal',
		tag: "PILIHAN EDITOR",
		special: true,
		vibeNotes: 'Perjalanan eksperimental di tanah vulkanik Sulawesi.',
		details: {
			caffeine: 'Sangat Tinggi',
			flavor: 'Alami & Intens'
		},
		gallery: []
	},
	{
		id: 6,
		name: 'COBALT CROISSANT',
		desc: 'Kelezatan mentega dengan kejutan selei kobalt beri yang tersembunyi.',
		price: 'Rp 49.000',
		image: '/product/481868530_18491762725017362_4940742496875771162_n.jpg',
		category: 'Bakery',
		vibeNotes: 'Lapisan mentega renyah dengan pusat biru kobalt berry yang mengejutkan.',
		details: {
			caffeine: 'Tidak Ada',
			flavor: 'Manis & Gurih Mentega'
		},
		gallery: []
	},
	{
		id: 7,
		name: 'COBALT DIRTY LATTE',
		desc: 'Paduan khas kami. Espresso yang diinfusi kobalt berpadu dengan susu bertekstur.',
		price: 'Rp 65.000',
		image: '/product/501226394_18509736802017362_5944014104648471794_n.jpg',
		category: 'Espresso',
		tag: 'PENGALAMAN KHAS',
		special: true,
		vibeNotes: 'Teman sempurna untuk kerja fokus. Terasa tebal dan kaya untuk menghidupi kinerja tinggi Anda.',
		details: {
			caffeine: 'Tinggi',
			flavor: 'Krim & Tebal'
		},
		gallery: [
			'/feature/497473078_18507098299017362_7767216781664247105_n.jpg',
			'/feature/624003152_18114974422541337_8190005105986273144_n.jpg',
			'/feature/624949019_2349820035457438_8495859316638335246_n.jpg',
			'/scenery/498280138_2167924453649630_8383188952732617144_n.jpg'
		]
	},
	{
		id: 8,
		name: 'QUARTZ FLAT WHITE',
		desc: 'Busa mikro selembut sutra di atas dosis ganda campuran khas kaum urban kami.',
		price: 'Rp 55.000',
		image: '/product/464710870_1056169755978613_4412213918762711123_n.jpg',
		category: 'Espresso',
		vibeNotes: 'Sehalus batu kuarsa, sekuat beton. Keseimbangan pamungkas.',
		details: { caffeine: 'Menengah-Tinggi', flavor: 'Halus & Kacang' },
		gallery: []
	},
	{
		id: 9,
		name: 'URBAN CARAMEL',
		desc: 'Karamel gurih manis dipadukan dengan espresso panggang gelap dan susu bertekstur.',
		price: 'Rp 62.000',
		image: '/product/501602578_18509736781017362_5273869525265987872_n.jpg',
		category: 'Espresso',
		tag: 'FAVORIT LOKAL',
		vibeNotes: 'Rasa manis berpadu gurih dalam keseimbangan favorit gaya urban tinggi.',
		details: { caffeine: 'Menengah', flavor: 'Manis & Gurih' },
		gallery: []
	},
	{
		id: 10,
		name: 'CHROME MUFFIN',
		desc: 'Muffin cokelat hitam dengan hiasan glasir mengkilap serta garam laut.',
		price: 'Rp 45.000',
		image: '/product/657290535_18577963453017362_7821735844328436573_n.jpg',
		category: 'Bakery',
		vibeNotes: 'Sentuhan elegan layaknya logam, menyelimuti klasiknya kenikmatan cokelat hitam.',
		details: { caffeine: 'Rendah', flavor: 'Kaya Kandungan' },
		gallery: []
	},
	{
		id: 11,
		name: 'KINETIC V60',
		desc: 'Ekstraksi pour-over yang memamerkan keasaman cerah dari biji kopi musiman.',
		price: 'Rp 75.000',
		image: '/product/651621931_17917261155289162_3846129621922149798_n.jpg',
		category: 'Pour Over',
		tag: 'PILIHAN ARTISAN',
		vibeNotes: 'Penyeduhan presisi tinggi bagi kaum urban yang paham kualitas.',
		details: { caffeine: 'Tinggi', flavor: 'Cerah & Bunga' },
		gallery: []
	}
];

