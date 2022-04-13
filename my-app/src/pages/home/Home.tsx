import React, { useState, useEffect } from 'react';
import { Header } from "../../components/shared/header/header";
import { Footer } from "../../components/shared/footer/footer";
import { Card } from "../../components/structure/card/card";
import { HomeDiv } from "../../pages/home/style";
import { staffApi } from '../../services/staffApi';

type Colaborador = {
  _id: string,
  created: string,
  name: string,
  idade: string,
  email: string,
  whatsapp: string,
  fone: string,
  rg: string,
  cpf: string,
  experienceEvents: string,
  adress: string,
  pic: string,
}

export function Home() {
  const [staff, setStaff] = useState<Colaborador[]>();

  const getStaff = async () => {
    const req = await staffApi.getStaff();
    setStaff(req)
  }

  useEffect(() => {
    getStaff()
  }, [])

  return (
    <>
        <Header/>
        <HomeDiv>
          {staff?.map(colaborador => {
            return <Card 
            key={colaborador._id}
            name={colaborador.name}
            idade={colaborador.idade}
            email={colaborador.email}
            whatsapp={colaborador.whatsapp}
            fone={colaborador.fone}
            rg={colaborador.rg}
            cpf={colaborador.cpf}
            experienceEvents={colaborador.experienceEvents}
            adress={colaborador.adress}
            pic={colaborador.pic}
            
            
            />
          })}
        </HomeDiv>        
        <Footer/>
    </>
  );
}

