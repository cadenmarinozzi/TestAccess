import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRef } from 'react';
import { getCookie } from '../../../modules/cookies';

export default () => {
	const adminName = getCookie('adminName');
	const yourName = getCookie('yourName');
	const schoolName = getCookie('schoolName');
	const grade = getCookie('grade');
	const role = getCookie('role');

	const emailRef = createRef();

	const copyEmail = () => {
		const emailText = emailRef.current.innerText;

		navigator.clipboard.writeText(emailText);
	};

	return (
		<div className='w-full flex flex-col gap-10 justify-center items-center my-32 sm:my-32'>
			<div className='flex flex-col gap-5 items-center mx-10 sm:mx-0'>
				<h1 className='text-2xl sm:text-4xl'>
					Send an email to an administrator to make a change.
				</h1>
				<span className='text-center'>
					This email asks for the addition of SAT and ACT testing
					sites in your district.
				</span>
			</div>
			<div className='divider' />
			<div className='mx-10 sm:mx-0 sm:w-1/2 gap-10 flex flex-col justify-center text-pretty'>
				<div className='flex flex-col gap-5'>
					<h3>
						Subject: Request for Increased Access to SAT and ACT
						Testing
					</h3>
					<p ref={emailRef}>
						Dear {adminName}
						,<br />
						<br />I hope this message finds you well. I am writing
						to address a critical issue concerning access to
						standardized testing for students in California. I am a{' '}
						{role.toLowerCase()}{' '}
						{role === 'Parent' ? `of a ${grade}th grader` : ''} and
						I have watched the struggle to find standardized testing
						opportunities in California . Due to the limited
						availability of SAT and ACT testing opportunities,
						Californians{' '}
						{role === 'Parent' ? 'like my child' : 'like me'} are
						now stuck as standardized testing becomes reinstated in
						colleges across the country. To ensure that all students
						have a fair chance to perform their best and pursue
						their higher education goals, I kindly request the
						administration to consider holding SAT and ACT tests on
						weekends and implementing an SAT School Day. These
						additional testing dates would greatly alleviate the
						current constraints and provide much-needed flexibility
						for students, a fundamental goal of testaccess.org, a
						student coalition aimed at expanding testing
						availability in California. By offering more testing
						opportunities,{' '}
						{role === 'Parent'
							? 'students such as my child'
							: 'students like me'}{' '}
						can better manage their academic and extracurricular
						commitments, reduce stress, and ultimately improve their
						chances of success. We believe that this initiative will
						have a positive impact on our school community and
						support our students in achieving their full potential.
						Beyond the need for students, we understand that this
						seems like a large undertaking. However, schools across
						the country have been successfully making the transition
						back. For your convenience, all the necessary
						information and links to register to administer the ACT,
						SAT, and SAT School Day are available on testaccess.org.
						Thank you for your attention to this matter. We
						appreciate your consideration and look forward to your
						positive response.
						<br />
						<br />
						Sincerely,
						<br />
						{yourName}, {role === 'Parent' ? 'Parent' : 'Student'}{' '}
						{role === 'Parent' ? 'at' : 'of'} {schoolName}
					</p>
				</div>
				<div className='flex flex-row items-center justify-center sm:justify-start'>
					<button className='btn btn-primary' onClick={copyEmail}>
						<FontAwesomeIcon icon={faCopy} />
						Copy Email
					</button>
				</div>
			</div>
		</div>
	);
};
