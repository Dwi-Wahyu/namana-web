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
		desc: 'Precision-extracted caffeine for rapid cognitive deployment.',
		price: '$6.50',
		image: '/product/435688077_18429630226017362_896776942331266593_n.jpg',
		category: 'Espresso',
		tag: 'DIGITAL BATCH #01',
		vibeNotes: 'The perfect companion for deep work. Smooth, bold, and designed to fuel your high-performance morning.',
		details: {
			caffeine: 'High',
			flavor: 'Creamy & Bold'
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
		desc: '24-hour slow drip extraction. Zero bitterness. All power.',
		price: '$7.20',
		image: '/product/473903495_18484460062017362_7702279212235018828_n.jpg',
		category: 'Cold Brew',
		tag: 'PEAK PERFORMANCE',
		vibeNotes: 'Slowly dripped for 24 hours to ensure the cleanest caffeine delivery possible.',
		details: {
			caffeine: 'Medium-High',
			flavor: 'Silky & Refreshing'
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
		desc: 'Structured layers of micro-foam and high-altitude espresso.',
		price: '$5.80',
		image: '/product/515105493_18517103239017362_614143355468016190_n.jpg',
		category: 'Espresso',
		vibeNotes: 'A structural masterpiece of foam and espresso. Perfectly balanced.',
		details: {
			caffeine: 'Medium',
			flavor: 'Balanced & Smooth'
		},
		gallery: []
	},
	{
		id: 4,
		name: 'KINETIC ICED',
		desc: 'A flash-chilled solution for the high-velocity urbanite.',
		price: '$6.00',
		image: '/product/521163956_18519876091017362_4302785918758206052_n.jpg',
		category: 'Cold Brew',
		vibeNotes: 'Flash-chilled to lock in the vibrant notes of our single-origin beans.',
		details: {
			caffeine: 'Medium',
			flavor: 'Crisp & Vibrant'
		},
		gallery: []
	},
	{
		id: 5,
		name: 'VOID BLACK SPECIAL',
		desc: 'Experimental bean blend from the volcanic peaks of Sulawesi.',
		price: '$8.50',
		image: '/product/655347876_18100859437939858_6919636928105541099_n.jpg',
		category: 'Seasonal',
		tag: "EDITOR'S CHOICE",
		special: true,
		vibeNotes: 'An experimental journey into the volcanic soils of Sulawesi.',
		details: {
			caffeine: 'Very High',
			flavor: 'Earthy & Intense'
		},
		gallery: []
	},
	{
		id: 6,
		name: 'COBALT CROISSANT',
		desc: 'Buttery perfection with a hidden cobalt-berry reduction center.',
		price: '$4.90',
		image: '/product/481868530_18491762725017362_4940742496875771162_n.jpg',
		category: 'Bakery',
		vibeNotes: 'Layers of butter and a surprise cobalt-berry center.',
		details: {
			caffeine: 'None',
			flavor: 'Sweet & Buttery'
		},
		gallery: []
	},
	{
		id: 7,
		name: 'COBALT DIRTY LATTE',
		desc: 'Our signature editorial blend. Cobalt-infused espresso meets textured milk.',
		price: '$6.50',
		image: '/product/501226394_18509736802017362_5944014104648471794_n.jpg',
		category: 'Espresso',
		tag: 'SIGNATURE EXPERIENCE',
		special: true,
		vibeNotes: 'The perfect companion for deep work. Smooth, bold, and designed to fuel your high-performance morning.',
		details: {
			caffeine: 'High',
			flavor: 'Creamy & Bold'
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
		desc: 'Velvety micro-foam poured over a double shot of our urban blend.',
		price: '$5.50',
		image: '/product/464710870_1056169755978613_4412213918762711123_n.jpg',
		category: 'Espresso',
		vibeNotes: 'Smooth as quartz, strong as concrete. The ultimate balance.',
		details: { caffeine: 'Medium-High', flavor: 'Smooth & Nutty' },
		gallery: []
	},
	{
		id: 9,
		name: 'URBAN CARAMEL',
		desc: 'Salted caramel infused with dark-roasted espresso and textured milk.',
		price: '$6.20',
		image: '/product/501602578_18509736781017362_5273869525265987872_n.jpg',
		category: 'Espresso',
		tag: 'LOCAL FAVORITE',
		vibeNotes: 'Sweet meets salt in this high-contrast urban favorite.',
		details: { caffeine: 'Medium', flavor: 'Sweet & Salty' },
		gallery: []
	},
	{
		id: 10,
		name: 'CHROME MUFFIN',
		desc: 'Dark chocolate muffin with a shimmering glaze and sea salt.',
		price: '$4.50',
		image: '/product/657290535_18577963453017362_7821735844328436573_n.jpg',
		category: 'Bakery',
		vibeNotes: 'A metallic finish to a classic dark chocolate treat.',
		details: { caffeine: 'Low', flavor: 'Rich & Salty' },
		gallery: []
	},
	{
		id: 11,
		name: 'KINETIC V60',
		desc: 'Pour-over extraction showcasing the bright acidity of seasonal beans.',
		price: '$7.50',
		image: '/product/651621931_17917261155289162_3846129621922149798_n.jpg',
		category: 'Pour Over',
		tag: 'ARTISAN CHOICE',
		vibeNotes: 'Precision brewing for the discerning urbanite.',
		details: { caffeine: 'High', flavor: 'Bright & Floral' },
		gallery: []
	}
];
