import React from 'react';
import { Header } from "../../components/shared/header/header";
import { Footer } from "../../components/shared/footer/footer";
import { Card } from "../../components/structure/card/card";
import { HomeDiv } from "../../pages/home/style";

export function Home() {
  return (
    <>
        <Header/>
        <HomeDiv/>
          <Card/>
          <Card/>
          <Card/>
        <HomeDiv/>        
        <Footer/>
    </>
  );
}

