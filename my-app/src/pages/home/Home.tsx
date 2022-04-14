import React, { useState, useEffect } from 'react';
import { Header } from "../../components/shared/header/header";
import { Footer } from "../../components/shared/footer/footer";
import { Card } from "../../components/structure/card/card";
import { HomeDiv, InvisibleButton } from "../../pages/home/style";
import { staffApi } from '../../services/staffApi';
import './Style.css';

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
  const [openModal, setOpenModal] = useState<boolean>(false);

  const getStaff = async () => {
    const req = await staffApi.getStaff();
    setStaff(req)
  }

  function modalControl (){
    console.log(openModal);
    if(openModal === false){
        setOpenModal(true)
    } else{
        setOpenModal(false)
    }
}

  useEffect(() => {
    getStaff()
  }, [])

  return (
    <>
        <Header/>
        <HomeDiv>
          {staff?.map(colaborador => {
            return (
              <InvisibleButton onClick={modalControl} key={colaborador._id}>
                <Card 
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
              </InvisibleButton> 
            )
          })}
          
        </HomeDiv>     
        {openModal ? 
        <div className='container'>
          <div className="modal-dialog modal-dialog-centered modal-app">

            <div className='modal-card'>
              <div>foto</div>
              <div>detalhes</div>
            </div>
          </div>
        </div>
          : null
          }   
        <Footer/>
    </>
  );
}

