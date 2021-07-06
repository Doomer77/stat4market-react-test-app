import React from "react";
import "./ServicesBlock.css";

import attentionIcon from "../../img/check_in_circle.svg";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";

export default function ServicesBlock() {
  return (
    <div className="row">
      <div className="col">
        <div className="services-block">
          <div className="service service--sm-mb">
            <div className="row d-flex row--768px">
              <div className="col-xxl-auto col-xl-3 col-md-12">
                <div className="service-img-block">
                  <img
                    src={img1}
                    alt={img1}
                    className="servise-img-block__img"
                  />
                </div>
              </div>
              <div className="col-xxl-8 col-xl-6 col-lg-8 col-md-12">
                <div className="service-content">
                  <h3 className="service-content__heading">
                    Оптимизация продаж на маркетплейсе
                  </h3>
                  <p className="service-content__text service-content__text--mb">
                    Наш основной продукт для тех, кто уже продаёт
                    на Wildberries, направленный напрямую на увеличение вашей
                    прибыли от работы с маркетплейсом. В нашем сервисе
                    уже несколько сотен поставщиков и мы понимаем основные
                    ошибки поставщиков, которые тормозят их рост и рычаги
                    увеличения ваших продаж на маркетплейсах. Наша команда
                    и основатель сервиса Дмитрий Бакланов проанализирует
                    ваш бренд, найдут точки роста, оптимизации товаров.
                  </p>
                  <p className="service-content__text">
                    Для начала работы необходимо заполнить заявку по ссылке
                    «Заказать».
                  </p>
                  <div className="service-content__attention">
                    <div className="service-content__attention-icon">
                      <img src={attentionIcon} alt={attentionIcon} />
                    </div>
                    <p className="service-content__attention-text">
                      Вы получите полное понимание своих дальнейших действий
                      для развития бренда, также чек-лист из более 30 пунктов
                      по улучшениям или проблемам именно вашего бренда
                      для оптимизации, увеличения выручки и прибыли
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-auto col-xl-3 col-lg-4 col-md-12">
                <div className="price-block">
                  <div className="price-block__conditions">
                    <span className="price-block__price price-block__price--initial">
                      29 900&#8381;
                    </span>
                    <span className="price-block__price">24 900&#8381;</span>
                    <span className="price-block__period">2 часа</span>
                  </div>
                  <div className="price-block__order">
                    <button className="price-block__btn price-block__btn--order">
                      Заказать
                    </button>
                    <button className="price-block__btn price-block__btn--about">
                      Подробнее об услуге
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service service--big-mb">
            <div className="row row--768px">
              <div className="col-xxl-auto col-xl-3 col-md-12">
                <div className="service-img-block">
                  <img
                    src={img2}
                    alt={img2}
                    className="servise-img-block__img"
                  />
                </div>
              </div>
              <div className="col-xxl-8 col-xl-6 col-lg-8 col-md-12">
                <div className="service-content">
                  <h3 className="service-content__heading">
                    Помощь в выходе на маркетплейс
                  </h3>
                  <p className="service-content__text service-content__text--mb">
                    Продукт для тех кто только собирается выйти на Wildberries.
                    Состоит из пошагового плана со всеми этапами выхода на
                    маркетплейс до первой поставки а также 2-х часовая
                    консультация с экспертом, ответы на все вопросы. Необходимо
                    предварительно заполнить заявку по ссылке «Заказать».
                  </p>
                  <div className="service-content__attention service-content__attention--mt">
                    <div className="service-content__attention-icon">
                      <img src={attentionIcon} alt={attentionIcon} />
                    </div>
                    <p className="service-content__attention-text">
                      Вы получите полное понимание своих дальнейших действий
                      для развития бренда, также чек-лист из более 30 пунктов
                      по улучшениям или проблемам именно вашего бренда
                      для оптимизации, увеличения выручки и прибыли
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-auto col-xl-3 col-lg-4 col-md-12">
                <div className="price-block">
                  <div className="price-block__conditions">
                    <span className="price-block__price price-block__price--initial">
                      9 900&#8381;
                    </span>
                    <span className="price-block__price">4 900&#8381;</span>
                    <span className="price-block__period">2 часа</span>
                  </div>
                  <div className="price-block__order">
                    <button className="price-block__btn price-block__btn--order">
                      Заказать
                    </button>
                    <button className="price-block__btn price-block__btn--about">
                      Подробнее об услуге
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
