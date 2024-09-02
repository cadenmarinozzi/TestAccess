export default ({ article: { title, description, link, image, date } }) => {
	return (
		<div className='flex flex-col gap-10 m-10 sm:w-1/2'>
			<div className='flex flex-col gap-5'>
				<h2 className='text-xl'>{title}</h2>
				<span>{date}</span>
			</div>
			<a href={link}>
				<img className='border-2 rounded-lg' src={image} alt={title} />
			</a>
			<div className='flex flex-col gap-5'>
				<p>{description}</p>
				<a href={link}>Read more</a>
			</div>
		</div>
	);
};
