// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

const CalendarApp = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={
          <LoginScreen />
        } />
        <Route exact path="/" element={
          <CalendarScreen />
        } />
      </Routes>
    </BrowserRouter>
  )
};

export default CalendarApp;