import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Hello extends React.Component{
	render(){
		// debugger;
		return <h1>Hello</h1>
	}
};

ReactDOM.render(<Hello/>,document.getElementById('app'));