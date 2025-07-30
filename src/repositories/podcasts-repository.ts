import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/podcasts-model';

const pathData = path.join(__dirname, 'podcasts.json');

export const repositoryPodcasts = async (podcastName?: string): Promise<PodcastModel[]> => {
    const language = 'utf-8';

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel ) => podcast.podcastname === podcastName);
    }

    return jsonFile;
}