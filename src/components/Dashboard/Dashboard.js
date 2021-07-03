import React from 'react';
import './Dashboard.css';

export default function Dashboard () {
    return(
        <div className="container-fluid">
            <div className="dashboard">
                <div className="row">
                    <div className="col">
                        <h2 className="heading-secondary">Оплата</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <div className="account-nav">
                            <ul className="account-nav__list">
                                <li className="account-nav__list-item">
                                    <a href="/" className="account-nav__list-link">Пополнение баланса</a>
                                </li>
                                <li className="account-nav__list-item">
                                    <a href="/" className="account-nav__list-link">Детализация расходов</a>
                                </li>
                                <li className="account-nav__list-item">
                                    <a href="/" className="account-nav__list-link active">Тарифы, доп. услуги</a>
                                </li>
                                <li className="account-nav__list-item">
                                    <a href="/" className="account-nav__list-link">История платежей</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-4 col-md-6">
                        <article className="card-info">
                            <div className="card-header">
                                <h3 className="heading-tertiary">Wildberries — Аналитика</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Анализ заказов, продаж, остатков, товарная аналитика по каждому складу маркетплейса
                                </p>
                                <table className="card-table">
                                    <thead>
                                        <tr> 
                                            <th>Количество товаров</th>
                                            <th>Месяц</th>
                                            <th>День</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>до 50</td>
                                            <td>2 370&#8381;</td>
                                            <td>79&#8381;</td>
                                        </tr>
                                        <tr>
                                            <td>от 50 до 100</td>
                                            <td>2 9700&#8381;</td>
                                            <td>99&#8381;</td>
                                        </tr>
                                        <tr>
                                            <td>от 101 до 500</td>
                                            <td>4 470&#8381;</td>
                                            <td>149&#8381;</td>
                                        </tr>
                                        <tr>
                                            <td>от 501 до 1000</td>
                                            <td>7 470&#8381;</td>
                                            <td>249&#8381;</td>
                                        </tr>
                                        <tr>
                                            <td>от 1001 до 5000</td>
                                            <td>10 470&#8381;</td>
                                            <td>349&#8381;</td>
                                        </tr>
                                        <tr>
                                            <td>Безлимитный от 5001</td>
                                            <td>14 970&#8381;</td>
                                            <td>499&#8381;</td>
                                        </tr>
                                    </tbody>
                                </table>
                    </div>
                        </article>
                    </div>  
                    <div className="col-lg-4 col-md-6">
                        <article className="card-info">
                                
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <article className="card-info">
                            
                        </article>
                    </div>  
                </div>
            </div>
        </div>
    )
}