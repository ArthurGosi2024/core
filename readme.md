<!-- @format -->

### **XFX**

Este projeto visa estabilizar o uso de bases vazadas, fornecendo uma estrutura TypeScript robusta para ser compilada em JavaScript. A base utiliza o framework FiveM para um recurso cliente/servidor. Além disso,
é integrada ao banco de dados MongoDB, que pode ser instalado localmente ou utilizado através do cluster do MongoDB. A base segue práticas de Programação Orientada a Objetos (POO) e está em constante desenvolvimento,
permitindo que cada desenvolvedor faça seus commits.

# Estrutura do Projeto

- `resources/core/typescript/src` :
  Esta pasta contém o código-fonte em TypeScript do projeto.

- `resources/core/typescript/src/server/server.ts` :
  Neste arquivo vocé deve importar todos os arquivos que criou para que o webpack possa compilar para JS

- `resources/core/typescript/src/client/client.ts` :
  Neste arquivo vocé deve importar todos os arquivos que criou para que o webpack possa compilar para JS
- `resources/core/typescript/src/server/database/config.ts` :
  Neste arquivo vocé deverá configurar a conexão com o banco de dados do MongoDB, informando a URL de conexão.


    export const connectDatabase = () => mongoose.connect("mongodb://localhost:27017/aqua_base").then(() => console.log("Conectado ao MongoDB")).catch((err) => console.error("Erro ao conectar com o MongoDB", err));

# Instalação do Projeto

- `resources/core/typescript/`:
  Nesta pasta vocé deve abrir o CMD e usar o comando `NPM i` para instalar as dependências do projeto e logo após usar o comando `NPM RUN WATCH`, para compilar o codigo em desenvolvimento.

# Iniciar base

- `start.bat`:
  Neste arquivo, vocé deverá clicar em `start.bat` para iniciar a base.

Lembrando este projeto ainda esta em desenvolvimento.
