import Article from './Article';

const articles = [
	{
		title: 'I live in Northern California. Why do I have to travel hundreds of miles to take the SAT?',
		image: 'https://ca-times.brightspotcdn.com/dims4/default/edf5c6a/2147483647/strip/true/crop/5184x3456+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F32%2Fef%2Fda59374245c78a34898f5d638ffb%2Fla-me-uc-drops-sat.01.JPG',
		link: 'https://www.latimes.com/opinion/story/2024-05-31/sat-test-college-board-exams-applications',
		description:
			'I live in Northern California, but I’m traveling to Texas to take the SAT on Saturday. It’s not due to lack of planning on my part. I went on the College Board site to register for the June SAT the first hour of the first day that students could sign up. But within minutes, all the seats in my county and across Northern California were gone.',
		date: 'May 31, 2024',
	},
	{
		title: `California students struggle to find SAT spots: Like ‘snagging tickets to a Taylor Swift concert'`,
		image: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/06/672/378/SAT_College-Board.png?ve=1&tl=1',
		link: 'https://www.foxnews.com/media/california-students-struggle-find-sat-spots-snagging-tickets-taylor-swift-concert',
		description: `High school students in California are having difficulties finding open spots to take the SAT with only a few locations open to serve thousands of people, according to a recent report. 
"It was my first and only chance to take it for the school year, and I was fairly pissed off because I had other plans that I canceled in order to keep the test," high school student Alice Onderwater told SFGate. "I had been ready for the test."`,
		date: 'June 7, 2024',
	},
	{
		title: 'SAT testing suddenly canceled in Oakland, affecting 1,400 students',
		image: 'https://fox59.com/wp-content/uploads/sites/21/2022/05/GettyImages-462153091.jpg?w=2560&h=1440&crop=1',
		link: 'https://www.nbcbayarea.com/news/local/sat-testing-suddenly-canceled-oakland/3554549/',
		description: `A scheduled SAT testing was suddenly canceled in Oakland Saturday due to Wi-Fi issues, the College Board said.

The exams took place at the Marriott Hotel in downtown Oakland.

The College Board, which runs the SAT, said in a statement Saturday that a Wi-Fi problem caused the cancellation and about 1,400 students were affected.`,
		date: 'June 2, 2024',
	},
	{
		title: 'The need for testing sites in California',
		image: 'https://assets.libsyn.com/secure/item/32052437',
		link: 'https://testsandtherest.libsyn.com/',
		description:
			'California is the most populous American state with a veritable cornucopia of exceptional and reasonably well-funded high schools. Why, then, do Californian teens need to travel hundreds–and sometimes thousands–of miles to sit for the SAT or ACT?',
		date: 'July 9, 2024',
	},
];

export default () => {
	const articlesMap = articles
		.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		})
		.map((article, index) => (
			<>
				<Article key={index} article={article} />
				{index !== articles.length - 1 && <div className='divider' />}
			</>
		));
	return (
		<div className='flex flex-col items-center justify-center my-10 sm:my-32 gap-5 sm:gap-10'>
			<div className='flex flex-col gap-5 items-center'>
				<h1 className='text-2xl sm:text-4xl font-semibold'>
					TestAccess in the news
				</h1>
				<p className='text-center sm:text-left'>
					We've been featured in the following publications:
				</p>
			</div>
			<div className='divider' />
			<div className='flex flex-col items-center gap-10'>
				{articlesMap}
			</div>
		</div>
	);
};
