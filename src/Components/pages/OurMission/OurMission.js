import { Link } from 'react-router-dom';
import ButtonArrow from '../../shared/ButtonArrow';

export default () => {
	return (
		<div className='flex flex-col w-full items-center justify-center gap-10 overflow-y-auto my-32 sm:my-0'>
			<h1 className='text-xl sm:text-2xl'>
				Here's what we strive to achieve:
			</h1>
			<ol className='list-decimal list-inside flex flex-col gap-20 w-80 sm:w-2/3 mw-80 sm:mw-2/3 items-center'>
				<li>
					<div className='flex flex-col gap-10 mx-10'>
						<p className='flex flex-col gap-2'>
							<span className='font-semibold text-nowrap'>
								The problem:
							</span>
							<span className='text-wrap'>
								Standardized tests can be expensive, causing
								some students of lower financial classes to miss
								the opportunity to take the SAT or ACT.
							</span>
						</p>
						<p className='flex flex-col gap-2'>
							<span className='font-semibold text-nowrap'>
								Here's what we'll do:
							</span>
							<span className='text-wrap'>
								Every school district will provide a free
								testing day for students to take the SAT or ACT
								with no cost to the student or to the student's
								family.
							</span>
						</p>
					</div>
				</li>
				<li>
					<div className='flex flex-col gap-10 mx-10'>
						<p className='flex flex-col gap-2'>
							<span className='font-semibold text-nowrap'>
								The problem:
							</span>
							<span className='text-wrap'>
								Standardized tests can be extremely difficult to
								fit into a student's busy schedule, especially
								if they have to travel long distances to take
								the test.
							</span>
						</p>
						<p className='flex flex-col gap-2'>
							<span className='font-semibold text-nowrap'>
								Here's what we'll do:
							</span>
							<span className='text-wrap'>
								Every school district offers a school day and
								weekend day for students to take the SAT or ACT
								at one of their district's high schools.
							</span>
						</p>
					</div>
				</li>
			</ol>
			<Link to='/registration'>
				<button className='btn btn-primary group'>
					<span>Register a testing site</span>
					<ButtonArrow />
				</button>
			</Link>
		</div>
	);
};
