#🎧 Projeto App Podcast
Aplicativo mobile de podcasts desenvolvido em React Native com Expo.
Permite ao usuário navegar entre episódios, reproduzir áudio e gerenciar playlists de forma simples e rápida.

##🚀 Tecnologias Utilizadas
React Native

Expo

React Navigation

Expo AV (para reprodução de áudio)

##📦 Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js >= 18.x

npm ou yarn

Expo CLI:

bash
Copiar
Editar
npm install -g expo-cli
Emulador Android/iOS ou o app Expo Go no celular.

##⚙️ Instalação
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/lukkaz2709/projeto-app-podcast
cd projeto-app-podcast
Instale as dependências:

bash
Copiar
Editar
npm install
ou

bash
Copiar
Editar
yarn install
##▶️ Execução
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm start
ou

bash
Copiar
Editar
expo start
Escaneie o QR Code com o app Expo Go para rodar no celular.

Ou pressione a para abrir no emulador Android, i para iOS (MacOS).

##🧪 Testes
Em breve serão adicionados testes automatizados com Jest.

##🛠️ Scripts Disponíveis
npm start → Inicia o servidor Expo

npm run build → Gera build de produção (configurar posteriormente)

npm run lint → Verifica o código com ESLint

##📁 Estrutura de Pastas
bash
Copiar
Editar
src/
 ├── components/    # Componentes reutilizáveis (botões, player, cards)
 ├── screens/       # Telas principais do app
 ├── assets/        # Imagens, ícones, fontes
 ├── services/      # (Sugestão) APIs e serviços externos
 └── utils/         # Funções utilitárias
##🔐 Segurança
Rodar npm audit periodicamente para checar vulnerabilidades.

Evitar armazenar chaves de API diretamente no código (usar .env).

##🚧 Melhorias Futuras
Adicionar testes automatizados

Cache de imagens e áudios

Suporte a playlists offline

Configuração de ESLint e Prettier

Melhorias de performance e acessibilidade
