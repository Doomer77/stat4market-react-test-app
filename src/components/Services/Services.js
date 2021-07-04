import React from "react";
import "./Services.css";

import HeadingSecondary from "../HeadingSecondary";
import ServicesBlock from "../ServicesBlock";

export default function Services() {
  return (
    <div className="container-fluid">
      <section className="services">
        <HeadingSecondary text={"Дополнительные услуги:"} marginbottom={true} />
        <p className="services-text">
          Помощь от команды Stat4market, основателя сервиса и партнеров, для
          увеличения продаж и помощи по работе с маркетплейсом.
        </p>
        <ServicesBlock />
      </section>
    </div>
  );
}
