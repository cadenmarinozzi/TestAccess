export default () => {
	return (
		<div className='h-full justify-center hero flex flex-col my-0'>
			<div className='flex flex-col items-center text-center gap-10 mx-10'>
				<h1 className='text-4xl sm:text-6xl font-semibold text-wrap'>
					Register to host an SAT or ACT test center
				</h1>
				<p className='w-80 sm:w-1/2'>
					Are you the owner of a school or community center? Easily
					register to host an SAT or ACT test center by filling out a
					simple application.
				</p>
				<div className='flex flex-col md:flex-row gap-5 items-center place-content-center'>
					<button className='btn btn-primary group'>
						<a href='https://forms.collegeboard.org/apply-to-become-sat-test-center/s/?excmpid=mtg891-pr-1-m13902-pb'>
							Register for SAT
						</a>
					</button>
					<button className='btn btn-outline group'>
						<a href='https://www.act.org/content/act/en/products-and-services/the-act-educator/act-test-center-request-form.html'>
							Register for ACT
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};
