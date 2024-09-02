import { faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { setCookie } from '../../../modules/cookies';

export default () => {
	const [administratorName, setAdministratorName] = useState('');
	const [yourName, setYourName] = useState('');
	const [schoolName, setSchoolName] = useState('');
	const [grade, setGrade] = useState('');
	const [role, setRole] = useState('Parent');

	const generateEmail = () => {
		setCookie('adminName', administratorName);
		setCookie('yourName', yourName);
		setCookie('schoolName', schoolName);
		setCookie('grade', grade);
		setCookie('role', role);

		window.location = '/generated-email';
	};

	return (
		<div className='flex flex-col sm:gap-10 gap-5 items-center justify-center h-full mx-10 sm:mx-0 my-10'>
			<div className='flex flex-col sm:gap-10 gap-5 place-items-center'>
				<div className='flex flex-col gap-5 place-items-center'>
					<h1 className='sm:text-4xl text-2xl'>
						Send an email to an administrator to make a change.
					</h1>
					<span className='sm:text-left text-center'>
						This email asks for the addition of SAT and ACT testing
						sites in your district.
					</span>
				</div>
				<label className='input input-bordered flex items-center gap-2  w-full max-w-xl text-nowrap'>
					Admin Name
					<input
						type='text'
						className='grow'
						onChange={(event) =>
							setAdministratorName(event.target.value)
						}
						placeholder={`Enter the administrator's name`}
					/>
				</label>
				<label className='input input-bordered flex items-center gap-2  w-full max-w-xl text-nowrap'>
					Your Name
					<input
						type='text'
						className='grow'
						onChange={(event) => setYourName(event.target.value)}
						placeholder={'Enter your name'}
					/>
				</label>
				<label className='input input-bordered flex items-center gap-2  w-full max-w-xl text-nowrap'>
					School Name
					<input
						type='text'
						className='grow'
						onChange={(event) => setSchoolName(event.target.value)}
						placeholder={'Enter the school name'}
					/>
				</label>
				<div className='flex flex-col gap-5 w-full max-w-xl'>
					<span>Are you a parent or student?</span>
					<select
						className='select select-bordered w-full max-w-xl'
						onChange={(event) => setRole(event.target.value)}>
						<option>Parent</option>
						<option>Student</option>
					</select>
				</div>
				<label className='input input-bordered flex items-center gap-2  w-full max-w-xl text-nowrap'>
					Grade
					<input
						type='text'
						className='grow'
						onChange={(event) => setGrade(event.target.value)}
						placeholder={
							role === 'Parent'
								? `Enter your student's grade`
								: 'Enter your grade'
						}
					/>
				</label>
				<button className='btn btn-primary' onClick={generateEmail}>
					<FontAwesomeIcon icon={faEnvelope} />
					Generate Email
				</button>
			</div>
		</div>
	);
};
