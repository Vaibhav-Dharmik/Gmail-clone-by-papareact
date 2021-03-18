import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux';
function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="app_body">
					<Sidebar />
					<Switch>
						<Route path="/mail">
							<Mail />
						</Route>
						<Route path="/">
							<EmailList />
						</Route>
					</Switch>
				</div>
				{sendMessageIsOpen && <SendMail />}
				
				{/* <h2>lets build gmail-clone</h2> */}
			</div>
		</Router>
	);
}

export default App;
