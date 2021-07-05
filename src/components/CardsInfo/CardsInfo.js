import React from "react";
import "./CardsInfo.css";

export default function CardsInfo() {
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
        <article className="card-info">
          <div className="card-header">
            <h4 className="heading-card">Wildberries — Аналитика</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Анализ заказов, продаж, остатков, товарная аналитика по каждому
              складу маркетплейса
            </p>
            <table className="card-table">
              <thead>
                <tr className="tr-mb">
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
                  <td>2 970&#8381;</td>
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
      <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
        <article className="card-info">
          <div className="card-header card-header--analysis">
            <h4 className="heading-card">Wildberries — Анализ категорий</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Анализ любых категорий, страниц брендов, поисковых запросов,
              акций. Безлимитный доступ к данным по всем товарам со страницы,
              заказам, остатках на складах, скорости заказов и другим метрикам.
            </p>
            <p className="card-text card-text--mod">
              Добавление страницы в отслеживание — 99&#8381;/страница
            </p>
            <p className="card-text">
              Списывается за уникальную страницу, если вдруг удалили страницу
              и добавили заново — повторно оплата не снимается
            </p>
            <p className="card-text card-text--mb">
              Ежедневный мониторинг и обновление страниц:
            </p>
            <table className="card-table">
              <thead>
                <tr className="tr-mb">
                  <th>Количество товаров</th>
                  <th>Месяц</th>
                  <th>День</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>до 3</td>
                  <td>0&#8381;</td>
                  <td>0&#8381;</td>
                </tr>
                <tr>
                  <td>от 4 до 10</td>
                  <td>0&#8381;</td>
                  <td>0&#8381;</td>
                </tr>
                <tr>
                  <td>от 11 до 20</td>
                  <td>0&#8381;</td>
                  <td>0&#8381;</td>
                </tr>
                <tr>
                  <td>от 21 до 50</td>
                  <td>0&#8381;</td>
                  <td>0&#8381;</td>
                </tr>
                <tr>
                  <td>Безлимитный от 51</td>
                  <td>0&#8381;</td>
                  <td>0&#8381;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
      <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12">
        <article className="card-info">
          <div className="card-header card-header--positions">
            <h4 className="heading-card">Wildberries — Позиции товаров</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              Анализ позиций любых товаров на страницах категорий, бренда,
              поисковых запросов, акций.
            </p>
            <p className="card-text card-text--mod">
              Добавление нового товара — 29&#8381;/товар
            </p>
            <p className="card-text">
              Списывается за уникальный товар, если вдруг удалили товар и
              добавили заново - повторно оплата не списывается.
            </p>
            <p className="card-text card-text--mb">
              Ежедневный мониторинг позиций:
            </p>
            <table className="card-table card-table--768px">
              <thead>
                <tr className="tr-mb">
                  <th>Количество товаров</th>
                  <th>Месяц</th>
                  <th>День</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>до 20</td>
                  <td>870&#8381;</td>
                  <td>29&#8381;</td>
                </tr>
                <tr>
                  <td>от 21 до 100</td>
                  <td>1 470&#8381;</td>
                  <td>49&#8381;</td>
                </tr>
                <tr>
                  <td>от 101 до 500</td>
                  <td>2 970&#8381;</td>
                  <td>99&#8381;</td>
                </tr>
                <tr>
                  <td>от 501 до 1000</td>
                  <td>4 470&#8381;</td>
                  <td>149&#8381;</td>
                </tr>
                <tr>
                  <td>от 1001 до 5000</td>
                  <td>8 970&#8381;</td>
                  <td>299&#8381;</td>
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
    </div>
  );
}
