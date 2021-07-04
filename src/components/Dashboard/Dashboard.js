import React from "react";
import "./Dashboard.css";

import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";
import DashboardNav from "../DashboardNav";
import CardsInfo from "../CardsInfo";

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <section className="dashboard">
        <HeadingSecondary text={"Оплата"} />
        <DashboardNav />
        <CardsInfo />
      </section>
    </div>
  );
}
