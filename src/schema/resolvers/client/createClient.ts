import { Client } from './../../../models/client';

export const createClient = (_, _params) => {
    console.log(_params);
    return Client.query().insert(_params.client); 
  }