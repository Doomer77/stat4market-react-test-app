import React, { useState } from "react";

import "./Navigation.css";
export default function Navigation() {
  const [value, setValue] = useState("Payment");

  return (
    <div className="container-fluid">
      <nav className="nav">
        <div className="row">
          <div className="col">
            <div className="select">
              <select
                className="select"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <option value="Payment" className="option">
                  Оплата
                </option>
                <option value="Customization" className="option">
                  Настройки
                </option>
                <option value="Notifications" className="option">
                  Уведомления
                </option>
                <option value="AffiliateProgram" className="option">
                  Партнёрская программа
                </option>
                <option value="Training" className="option">
                  Обучение
                </option>
              </select>
            </div>
            <ul className="nav-list">
              <li className="list-item">
                <a href="/" className="nav-link">
                  Настройки
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="nav-link active">
                  Оплата
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="nav-link">
                  Уведомления
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="nav-link">
                  Партнёрская программа
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="nav-link">
                  Обучение
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
