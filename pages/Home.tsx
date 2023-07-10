import Navbar from '../containers/Navbar';
import Header from '../containers/Header';
import AboutUs from '../containers/AboutUs';
import Equipments from '../containers/Equipments';
import Fields from '../containers/Fields';
import Booking from '../containers/Booking';
import Footer from '../containers/Footer';
import OpenGame from '../containers/OpenGame';
import AddServices from '../containers/AddServices';

import React from 'react';

export default function Home() {

  const ola= ""

  

  return (
  <>        
    <Navbar></Navbar>
    <Header></Header> 
    <AboutUs></AboutUs>
    <div className="flex flex-col gap-20 pt-20">
      <Equipments></Equipments>
      <Fields></Fields>
      <OpenGame></OpenGame>
      <AddServices></AddServices>
      <Booking></Booking> 
      <Footer></Footer> 
    </div>
  </>
  )
}