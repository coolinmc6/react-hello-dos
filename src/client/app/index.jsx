import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import ColinsComp from './ColinsComp.jsx';
import ParentComp from './ParentComp.jsx';

class App extends React.Component {
  render () {
    return (
    	<div>
    		<p> Hello React!</p>
    		<AwesomeComponent />
    		<ColinsComp />
    		<p>Here is my ParentComp (a big group of ColinsComp's):</p>
    		<ParentComp />
    	</div>
	);
  }
}

render(<App/>, document.getElementById('app'));