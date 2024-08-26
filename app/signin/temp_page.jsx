"use client"
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/Calendar";
import Geography from "./scenes/geography";

function App() {

  return (
        <div className="app">
          <main className="content">
              <Dashboard />
              <Team />
              <Contacts />
              <Invoices />
              <Bar />
              <Pie />
              <Line />
              <FAQ />
              <Calendar />
              <Geography />
          </main>
        </div>
  );
}

export default App;
