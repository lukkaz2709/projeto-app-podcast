import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
    
    //define a interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }
    
    //busca os dados
    const queryString = podcastName?.split('?p=')[1] || "";
    const data = await repositoryPodcasts(queryString);

    //verifica se tem o conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    if(data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    }else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    responseFormat.body = data;

    return responseFormat;
};