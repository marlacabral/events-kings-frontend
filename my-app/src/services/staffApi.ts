import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post["Content-Type"] = "application/json";

export const staffApi = {
    getStaff: async () => {
        try{
            const req = await axios.get("/staff/all-staff");
            return req.data;
        }catch(err){
            alert(err);
        }
    }
}