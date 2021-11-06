import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './Redux/store';
import {Provider} from 'react-redux';


const App = () => {
return (
 <Provider store={store}>
<Router>
<div className="App">

<Route exact path='/' component={Home} />

</div>
</Router>
</Provider>
           
);
}

export default App;
