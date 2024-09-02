import { Link } from 'react-router-dom';

export default () => {
	return (
		<div className='flex flex-row justify-center gap-5 p-5 px-10 place-items-center w-full bg-base-100'>
			<Link to='/feedback'>Feedback</Link>
			<Link to='/contact'>Contact</Link>
		</div>
	);
};
