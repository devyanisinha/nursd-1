import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './frontpage';
import Dropdown from './dropdown';
import SecondPage from './SecondPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const App= ()=>{
	return (
		<Router>
		<div>
		
		<Route path="/" exact component={Demo } />
		<Route path ="/" exact component={Dropdown}/>
		<Route path="/Next" exact component={SecondPage}/>
		
		</div>
		</Router>
		
);
};


ReactDOM.render(<App/>, document.querySelector('#root'));