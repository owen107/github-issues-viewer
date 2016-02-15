import React from 'react';
import ReactDOM from 'react-dom';
require('octicons/octicons/octicons.scss');
require('../styles/main.scss');

class App extends React.Component {
	render() {
		return <h1><span className="octicon octicon-mark-github"></span> Fight! Owen! Twitter Offer!!!</h1>
	}
}

ReactDOM.render(<App />, document.getElementById('app'));