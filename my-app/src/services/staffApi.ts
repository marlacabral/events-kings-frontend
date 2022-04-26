import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post["Content-Type"] = "application/json";

type Colaborador = {
    idade: string,
    email: string,
    whatsapp: string,
    fone: string,
    rg: string,
    cpf: string,
    moreInfos: {
        possuiExperiencia: boolean,
        experiencia?: string,
        nome: string;
    };
    adress: string,
    pic: string,
};

export const staffApi = {
    getStaff: async () => {
        try{
            const req = await axios.get("/staff/all-staff");
            return req.data;
        }catch(err){
            alert(err);
        }
    },

    postColaborador: async (colaborador: Colaborador) => {
        try {
            const req = await axios.post("/staff/create-colaborador", colaborador);
            return req.data;
        } catch (err) {
            alert(err);
        }
    }

    findColaboradorById: async (id: string) => {
        try {
            const req = await axios.get("/staff/one-colaborador/" + id);
            return req.data;
        } catch (err){
            alert(err);
        }
    }
};