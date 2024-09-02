import { Link } from 'react-router-dom';
import ButtonArrow from '../../shared/ButtonArrow';

export default () => {
	return (
		<div className='sm:my-0 sm:h-full justify-center my-10 hero flex flex-col'>
			<div className='flex flex-col items-center text-center gap-10 mx-10'>
				<h1 className='text-4xl sm:text-6xl font-semibold text-wrap'>
					<span className='font-black'>No one</span> should have to
					travel
					<br />
					100 miles for an SAT.
				</h1>
				<p>
					TestAccess is dedicated to changing standardized testing
					availability in California.
				</p>
				<div className='flex flex-col items-center text-center gap-5'>
					<h2 className='font-semibold text-2xl sm:text-4xl text-nowrap'>
						Who are you?
					</h2>
					<span>
						Join TestAccess in changing SAT availability in
						California as a whole.
					</span>
					<div className='flex flex-col md:flex-row gap-5 items-center place-content-center'>
						<Link to='/email'>
							<button className='btn btn-primary group'>
								<span>I'm a parent</span>
								<ButtonArrow />
							</button>
						</Link>
						<Link to='/registration'>
							<button className='btn btn-outline group'>
								<span>I'm an administrator</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
