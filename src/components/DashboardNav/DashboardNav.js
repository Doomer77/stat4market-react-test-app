import React from "react";

import "./DashboardNav.css";

export default function DashboardNav() {
  return (
    <div className="row">
      <div className="col-auto">
        <div className="account-nav">
          <ul className="account-nav__list">
            <li className="account-nav__list-item">
              <a href="/" className="account-nav__list-link">
                Пополнение баланса
              </a>
            </li>
            <li className="account-nav__list-item">
              <a href="/" className="account-nav__list-link">
                Детализация расходов
              </a>
            </li>
            <li className="account-nav__list-item">
              <a href="/" className="account-nav__list-link active">
                Тарифы, доп. услуги
              </a>
            </li>
            <li className="account-nav__list-item">
              <a href="/" className="account-nav__list-link">
                История платежей
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
