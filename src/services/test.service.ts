import * as fetch from 'node-fetch';

export interface servicesResponse {
    system: string;
    function: string;
    data?: object;
    error?: Error;
  }

  export interface Error {
    status: string;
    message: string;
    system?: string;
    errors?: any[];
  }
  

const requestConfiguration = {
  json: true,
  resolveWithFullResponse: false,
  body: {},
  headers: {
    'Content-Type': 'application/json',
  },
};

let baseUrl='https://indecon.site'

export class testService {

  get = async (): Promise<servicesResponse> => {    
    try {      
      let response = await this.runFetch(`${baseUrl}/last`, 'GET',"", null, 'trx');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  runFetch = async (url, method, jsonBody, headers, system) => {
    let response = <servicesResponse>{};
    let error = <Error>{};
    let res;
    try {
      const headersFetch = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache',
        'User-Agent': process.env.USERAGENT,
      };
      const headersCurrent = headers == null ? headersFetch : headers;
      if (method === 'GET' || method === 'DELETE' ) {
        res = await fetch(url, {
          method: method,
          headers: headersCurrent,
          timeout: 5000,
        });
      } else {
        res = await fetch(url, {
          method: method,
          headers: headersCurrent,
          body: JSON.stringify(jsonBody, null, 4),
          timeout: process.env.REQUESTTIMEOUT,
        });
      }
      response.data = {
        statusCode: res.status,
        body: await res.json()
          //res.headers.get('content-length') > 0 ? await res.json() : undefined,
      };
      if (response.data['body'].length == 0) {
        response.data['body'] = undefined
      }
      if (response.data['statusCode'] != 200) {
        error.status = response.data['statusCode'];
        error.message = response.data['body']['message'];
        error.system = system;
        response.error = error;
      }
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

}

export default new testService();
