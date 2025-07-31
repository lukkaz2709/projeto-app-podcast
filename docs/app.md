# PodCentral


### descrição
um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts separados 
por categoria.

### domínios
podcasts feito com vídeos

### features
- listar os episódios podcasts em sessões de categorias
 - [saúde, fitness, mentalidade e humor]
- Filtrar episódios por nome de podcast

## como

### Feature:
listar os episódios podcasts em sessões de categorias

### Como vou implementar:


response:

```js

[
    {
        podcastname: "flow",
        episode: "cbum - flow #319",
        VideoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCY0Mpjnn8itKAySqpfAgC0QURZKw",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "esporte", "bodybuilder"]
    }

    {
        podcastname: "flow",
        episode: "barrichello - flow #339",
        VideoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAtWl19lVt6bBUk6hLfg7WpLjTTYQ",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte", "corrida"]
    }
]

GET: retorna lista de episódios baseados em um parâmetro enviado pelo cliente do nome do podcast