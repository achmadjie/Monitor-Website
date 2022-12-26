import axios from "axios";

const client = axios.create({
    // baseURL : 'https://app01.tmsdev.space/'
    baseURL : 'https://apidm.tms.my.id/'

});

export default client;