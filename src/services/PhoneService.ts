import axios from "axios";
export class PhoneService{
    public static _serverURL: string;

    public static async getAllPhones () {
        let _serverURL = 'http://localhost:3001/';
        let phonesURL= `${_serverURL}phones`;
            return axios.get(phonesURL);
    }

    public static async getPhone (phoneId:number) {
        let phone:string = `${this._serverURL}/phones/${phoneId}`;
        return axios.get(phone);
    }

}

