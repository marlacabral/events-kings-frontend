import React, { useState, useEffect } from 'react';
import { staffApi } from '../../services/staffApi';

type Infos = {
    possuiExperiencia: boolean,
    experiencia?: string,
    nome: string
}

type Colaborador = {
    idade: string,
    email: string,
    whatsapp: string,
    fone: string,
    rg: string,
    cpf: string,
    moreInfos: Infos,
    adress: string,
    pic: string,
}

type Update = {
    update?: boolean
}

export function CreatedForm(props: Update) {
    
    const [existeExperiencia, setExisteExperiencia] = useState<boolean>(false);

    const [infos, setInfos] = useState<Infos>({
        possuiExperiencia: false,
        experiencia: '',
        nome:''
    });
    
    const [colaborador, setColaborador] = useState<Colaborador>({
        idade: '',
        email: '',
        whatsapp: '',
        fone: '',
        rg: '',
        cpf: '',
        moreInfos: infos,
        adress: '',
        pic: '',
    })
    
    useEffect(() => {
        setColaborador({...colaborador, moreInfos: infos});
    }, [infos])


    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(colaborador)
        staffApi.postColaborador(colaborador);
        }        
    
    
    function AddExperiencia(){
        setExisteExperiencia(true);
    }

    function RemoveExperiencia() {
        setExisteExperiencia(false);
    }

    return (
        <div>
            <form onSubmit={submitForm} >
                <div>
                    <span>Nome: </span>
                    <input type='text' name='nome' defaultValue={colaborador.moreInfos.nome} onChange={e => setInfos({...infos, nome: e.target.value})} placeholder='Digite seu nome completo' />
                </div>
                <div>
                    <span>Idade: </span>
                    <input type='text' name='idade' defaultValue={colaborador.idade} onChange={e => setColaborador({...colaborador, idade: e.target.value})}placeholder='Digite a idade' />
                </div>
                <div>
                    <span>Email: </span>
                    <input type='text' name='email' defaultValue={colaborador.email} onChange={e => setColaborador({...colaborador, email: e.target.value})} placeholder='Digite o email' />
                </div>
                <div>
                    <span>Whatsapp: </span>
                    <input type='text' name='whatsapp' defaultValue={colaborador.whatsapp} onChange={e => setColaborador({...colaborador, whatsapp: e.target.value})} placeholder='Digite o whatsapp' />
                </div>
                <div>
                    <span>Fone: </span>
                    <input type='text'name='fone' defaultValue={colaborador.fone} onChange={e => setColaborador({...colaborador, fone: e.target.value})} placeholder='Digite o fone' />
                </div>
                <div>
                    <span>RG: </span>
                    <input type='text' name='rg' defaultValue={colaborador.rg} onChange={e => setColaborador({...colaborador, rg: e.target.value})} placeholder='Digite o RG' />
                </div>
                <div>
                    <span>CPF: </span>
                    <input type='text' name='cpf' defaultValue={colaborador.cpf} onChange={e => setColaborador({...colaborador, cpf: e.target.value})} placeholder='Digite o CPF' />
                </div>
                <div>
                    <span>Endereço: </span>
                    <input type='text' name='adress' defaultValue={colaborador.adress} onChange={e => setColaborador({...colaborador, adress: e.target.value})} placeholder='Digite o endereço' />
                </div>
                <div>
                    <span>Foto: </span>
                    <input type='text' name='pic' defaultValue={colaborador.pic} onChange={e => setColaborador({...colaborador, pic: e.target.value})} placeholder='Digite o caminho da imagem' />
                </div>
                <div>
                    <span>Experiência com eventos: </span>
                    <button type="button" onClick={existeExperiencia ? RemoveExperiencia : AddExperiencia}>{existeExperiencia ? "Remover Experiência" : "Adicionar Experiência"}</button>
                    {existeExperiencia ? <input name="experiencia" defaultValue={colaborador.moreInfos.experiencia} onChange={e => setInfos({...infos, experiencia: e.target.value, possuiExperiencia: true})} type="text" placeholder="Digite as funções que já exerceu"></input> : null}
                </div>

                <button type='submit'>Enviar</button>

            </form>
        </div>
    )
}
