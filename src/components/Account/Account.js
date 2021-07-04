import React from "react";
import "./Account.css";

import HeadingPrimary from "../HeadingPrimary";
import Navigation from "../Navigation";
import Dashboard from "../Dashboard";
import Services from "../Services";

export default function Account() {
  return (
    <main className="main">
      <HeadingPrimary />
      <Navigation />
      <Dashboard />
      <Services />
    </main>
  );
}
