import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

const RegistartionPage = () => 
    (
        <header className="App-header">
            <Link style={{ textDecoration: 'none' }} to="/"><h1>Noteful</h1></Link>{' '}
        </header>
    )
export default RegistartionPage