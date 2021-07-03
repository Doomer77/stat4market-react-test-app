import React from 'react';

import './Navigation.css';
export default function Navigation () {
    return (
        <div className="container-fluid">
            <nav className="nav">
                <div className="row">
                    <div className="col">
                        <ul className="nav-list">
                            <li className="list-item">
                                <a href="/" className="nav-link">Настройки</a>
                            </li>
                            <li className="list-item">
                                <a href="/" className="nav-link active">Оплата</a>
                            </li>
                            <li className="list-item">
                                <a href="/" className="nav-link">Уведомления</a>
                            </li>
                            <li className="list-item">
                                <a href="/" className="nav-link">Партнёрская программа</a>
                            </li>
                            <li className="list-item">
                                <a href="/" className="nav-link">Обучение</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    )
}