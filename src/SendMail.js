import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import './SendMail.css';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
function SendMail() {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = (formData) => {
		console.log(formData);
	};
	const dispatch = useDispatch();
	return (
		<div className="sendMail">
			<div className="sendMail_header">
				<h3>New Message</h3>
				<CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="email" placeholder="To" name="to" className="" ref={register({ required: true })} />
				{errors.to && <p className="sendMail_error">To is required</p>}

				<input
					type="text"
					placeholder="Subject"
					name="subject"
					className=""
					ref={register({ required: true })}
				/>
				{errors.subject && <p className="sendMail_error">subject is required</p>}

				<input
					type="text"
					placeholder="Message..."
					name="message"
					className="sendMail_message"
					ref={register({ required: true })}
				/>
				{errors.message && <p className="sendMail_error">message is required</p>}

				<div className="sendMail_options">
					<Button className="sendMail_send" variant="container" color="primary" type="submit">
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
