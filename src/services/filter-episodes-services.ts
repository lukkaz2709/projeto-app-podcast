import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
    
    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }
    
    //busca os dados
    const queryString = podcastName?.split('?p=')[1] || "";
    const data = await repositoryPodcasts(queryString);

    //verifica se tem o conteúdo
    responseFormat.statusCode = 
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    
    responseFormat.body = data;

    return responseFormat;
};