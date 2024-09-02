import LogoImage from '../../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<div className='z-50 flex flex-col sm:flex-row sm:gap-0 gap-5 sm:justify-between p-5 px-10 items-center bg-base-100'>
			<div className='flex-1'>
				<Link to='/' className='flex flex-row gap-2 items-center'>
					<img
						src={LogoImage}
						width={20}
						height={20}
						alt='TestAccess'
						className='w-8 h-8'
					/>
					<h2 className='font-semibold text-xl'>TestAccess</h2>
				</Link>
			</div>
			<div className='flex-none flex gap-5'>
				<Link to='/blog'>
					<span>Blog</span>
				</Link>
				<Link to='/our-mission'>
					<span>Our mission</span>
				</Link>
				<Link to='/about'>
					<span>About</span>
				</Link>
			</div>
		</div>
	);
};
