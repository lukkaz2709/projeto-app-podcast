# 🎙️ PodCentral
A Netflix-style application designed to centralize and organize video podcast episodes by category.
It allows listing episodes by category and filtering by podcast name, making it easy to navigate and discover content.

## 🚀 Features
📂 Episode listing organized in category sections:

 - Health, Fitness, Mindset, Humor

🔎 Filter episodes by podcast name

🎥 Podcasts in video format

## 📦 API Structure
GET /list-episodes
Returns a list of available episodes, grouped by category.

GET /filter-episodes
Filters episodes by the podcast name sent via query params.

## 📄 Example Response
[
  {
    "podcastname": "flow",
    "episode": "cbum - flow #319",
    "VideoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["health", "sports", "bodybuilder"]
  },
  {
    "podcastname": "flow",
    "episode": "barrichello - flow #339",
    "VideoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["sports", "racing"]
  }
]

## 🛠️ Technologies Used
Node.js – JavaScript runtime environment

TypeScript – Static typing for better code maintainability

TSX – Run TypeScript files directly

Tsup – Project bundling and building

@types/node – Type definitions for Node.js


## 🛠️ Implementation
Main server snippet:

typescript
Copiar
Editar
import * as http from 'http'; 
import { getListEpisodes, getFilterEpisodes } from './controllers/podcasts-controllers';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  const baseUrl = request.url?.split('?')[0];
  
  // List podcasts
  if (request.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
    await getListEpisodes(request, response);
  }

  // Filter podcasts
  if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request, response);
  }
};

## 📂 Project Structure
css
Copiar
Editar
projeto-app-podcast/
│── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│── package.json
│── README.md

## ▶️ How to Run
Clone the repository:

bash
Copiar
Editar
git clone https://github.com/YOUR-USERNAME/projeto-app-podcast.git
Install dependencies:

bash
Copiar
Editar
npm install
Start the server:

bash
Copiar
Editar
`start:dev`
Access endpoints:

http://localhost:3000/list-episodes

http://localhost:3000/filter-episodes?name=flow

## 🔮 Next Steps
✅ Add episode pagination

✅ Improve UI with integrated frontend

✅ Add user authentication