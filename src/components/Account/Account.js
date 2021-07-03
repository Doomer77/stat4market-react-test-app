import React from 'react';
import './Account.css';

import Heading from '../Heading';
import Navigation from '../Navigation';
import Dashboard from '../Dashboard';

export default function Account () {
    return(
        <main className="main">
            <Heading />
            <Navigation />
            <Dashboard />
        </main>
    )
}