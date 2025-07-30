import * as http from 'http';
import { getListEpisodes, getFilterEpisodes } from './controllers/podcasts-controllers';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //querystring
    //http://localhost:3636/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split('?') ?? ["", ""];
    console.log(`Base URL: ${baseUrl}`);
    console.log(`Query String: ${queryString}`);
    
    //listar podcasts
    if (request.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
        await getFilterEpisodes(request, response);
    }
 }