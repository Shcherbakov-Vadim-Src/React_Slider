import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Foto from './Foto';

class App extends Component {
    render(){
        return  (
            <Foto />
        );   
    }
}


const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);