import React from 'react';
import { useState } from 'react';
import WarriorRepository from './repository/WarriorRepository';
import Home from './components/Home';
import SelectWarrior from './components/SelectWarrior';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

const App = () =>
{
    const [warrior, setWarrior] = useState(WarriorRepository.getInstance().getWarriors()[0]);

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/select-warrior'>
                        <SelectWarrior {...warrior} {...setWarrior} />
                    </Route>
                    <Route path='/'>
                        <Home {...warrior} />
                    </Route>
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
