import React, { useState } from 'react';

type Colaborador = {
    name: string,
    idade: string,
    email: string,
    whatsapp: string,
    fone: string,
    rg: string,
    cpf: string,
    experienceEvents: boolean,
    adress: string,
    pic: string
}

export function CreatedForm() {
    const [possuiExperiencia, setPossuiExperiencia] = useState<boolean>(false);
    const [colaborador, setColaborador] = useState<Colaborador>({
        name: '',
        idade: '',
        email: '',
        whatsapp: '',
        fone: '',
        rg: '',
        cpf: '',
        experienceEvents: false,
        adress: '',
        pic: '',
    });


    function submitForm(e: React.FormEvent){
        e.preventDefault()
        console.log('enviando...');
    }

    function AddExperience(){
        setPossuiExperiencia(true);
    }

    function RemoveExperience(){
        setPossuiExperiencia(false);
    }

    return (
        <div>
            <form onSubmit={submitForm} >
                <div>
                    <span>Nome: </span>
                    <input type='text' name='name' onChange={e => setColaborador(...colaborador, colaborador.name = e.target.value)} placeholder='Digite o nome completo' />
                </div>
                <div>
                    <span>Idade: </span>
                    <input type='text' name='idade' placeholder='Digite a idade' />
                </div>
                <div>
                    <span>Email: </span>
                    <input type='text' name='email' placeholder='Digite o email' />
                </div>
                <div>
                    <span>Whatsapp: </span>
                    <input type='text' name='whatsapp' placeholder='Digite o Whatsapp (ex: 99 999999999)' />
                </div>
                <div>
                    <span>Fone: </span>
                    <input type='text' name='fone' placeholder='Digite o Fone (ex: 99 999999999)' />
                </div>
                <div>
                    <span>RG: </span>
                    <input type='text' name='rg' placeholder='Digite o RG (9999999999)' />
                </div>
                <div>
                    <span>CPF: </span>
                    <input type='text' name='cpf' placeholder='Digite o CPF (ex: 99999999999' />
                </div>
                <div>
                    <span>Endereço: </span>
                    <input type='text' name='adress' placeholder='Digite o endereço' />
                </div>
                <div>
                    <span>Foto: </span>
                    <input type='text' name='pic' placeholder='Digite o caminho da imagem' />
                </div>
                <div>
                    <span>Experiência com eventos: </span>
                    <button type='button' onClick={possuiExperiencia ? RemoveExperience : AddExperience}>{possuiExperiencia ? "Excluir Experiência" : "Adicionar Experiência"}</button>
                    {possuiExperiencia ? <input type='text' placeholder='Digite as funções que já exerceu' /> : null}
                </div>
                
                <button type='submit'>Enviar</button>

            </form>
        </div>
    )
}
