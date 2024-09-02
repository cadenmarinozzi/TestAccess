import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addFeedback } from '../../../modules/firebase';
import { useState } from 'react';

export default () => {
	const [feedback, setFeedback] = useState({
		type: 'Website interface',
		comment: '',
	});

	const submit = () => {
		addFeedback(feedback);
	};

	const updateFeedbackComment = (event) => {
		setFeedback({
			...feedback,
			comment: event.target.value,
		});
	};

	const updateFeedbackType = (event) => {
		setFeedback({
			...feedback,
			type: event.target.value,
		});
	};

	return (
		<div className='flex flex-col sm:gap-10 gap-5 items-center justify-center h-full mx-10 sm:mx-0 my-10'>
			<div className='flex flex-col sm:gap-10 gap-5'>
				<div className='flex flex-col gap-5 sm:place-items-start place-items-center'>
					<h1 className='sm:text-4xl text-2xl'>Send us feedback</h1>
					<span className='sm:text-left text-center'>
						Sending us feedback helps us improve our services.
					</span>
				</div>
				<div className='flex flex-col gap-5'>
					<span>What are you commenting on?</span>
					<select
						className='select select-bordered w-full max-w-xl'
						onSelect={updateFeedbackType}>
						<option>Website interface</option>
						<option>Broken link</option>
						<option>Extra info</option>
						<option>Other</option>
					</select>
				</div>
				<div className='flex flex-col gap-5'>
					<span>Enter your comment</span>
					<textarea
						className='textarea textarea-bordered  w-full max-w-xl max-h-48'
						placeholder='Describe your feedback here'
						onChange={updateFeedbackComment}
					/>
				</div>
				<button className='btn btn-primary' onClick={submit}>
					<FontAwesomeIcon icon={faPaperPlane} />
					Submit
				</button>
			</div>
		</div>
	);
};
