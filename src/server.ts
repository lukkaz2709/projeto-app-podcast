import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts-controllers';

const server = http.createServer(
 async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET"){
        await getListEpisodes(req, res);
    }
 }
);

const port = process.env.PORT || 3636;

server.listen(port, () => {
    console.log(`Server is running on port ${port} `);
});