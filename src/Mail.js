import { IconButton } from '@material-ui/core';
import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';

function Mail() {
	const history = useHistory();

	return (
		<div className="mail">
			<div className="mail_tools">
				<div className="mail_toolsLeft">
					<IconButton onClick={() => history.push('/')}>
						<ArrowBackIcon />
					</IconButton>
					<IconButton>
						<MoveToInboxIcon />
					</IconButton>
					<IconButton>
						<ErrorIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
					<IconButton>
						<EmailIcon />
					</IconButton>
					<IconButton>
						<WatchLaterIcon />
					</IconButton>
					<IconButton>
						<CheckCircleIcon />
					</IconButton>
					<IconButton>
						<LabelImportantIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="mail_toolsRight">
					<IconButton>
						<UnfoldMoreIcon />
					</IconButton>
					<IconButton>
						<PrintIcon />
					</IconButton>
					<IconButton>
						<ExitToAppIcon />
					</IconButton>
				</div>
			</div>
			<div className="mail_body">
				<div className="mail_bodyHeader">
					<h2>Subject</h2>
					<LabelImportantIcon className="mail_important" />
					<p>Title</p>
					<p>10pm</p>
				</div>
				<div className="mail_message">
					<p>
						This is a message In publishing and graphic design, Lorem ipsum is a placeholder text commonly
						used to demonstrate the visual form of a document or a typeface without relying on meaningful
						content. Lorem ipsum may be used as a placeholder before final copy is available. It is also
						used to temporarily replace text in a process called greeking, which allows designers to
						consider the form of a webpage or publication, without the meaning of the text influencing the
						design.
					</p>
				</div>
			</div>
			<h1>hello vaibhav</h1>
		</div>
	);
}

export default Mail;
