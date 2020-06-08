import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './frontpage';
import Dropdown from './dropdown';
import SecondPage from './SecondPage';

const App= ()=>{
	return (<div>
		<Demo/>
		<Dropdown/>
		</div>
		
);
};

ReactDOM.render(<App/>, document.querySelector('#root'));