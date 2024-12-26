# VIACERTA Teste

## ⚡ Stack e Dependências

[**React Native**](https://reactnative.dev/), [**TypeScript**](https://www.typescriptlang.org/)  configurado com:

* [**React Navigation**](https://reactnavigation.org/docs/getting-started/): Para navegar pelas telas, estamos usando a stack de navegação.
* [**ESlint**](https://eslint.org/) e [**Prettier**](https://prettier.io/): ESlint e Prettier ajudam a detectar erros enquanto mantêm a formatação do código limpa.
* **Importações absolutas:** Para evitar importações relativas irritantes, os arquivos tsconfig.json e o arquivo babel.config.js estão configurados para fazer uso de importações absolutas.

## 🔧 Uso
Para instalar as dependências rode:
```bash
yarn
```

O Projeto utiliza jsor-server para salvar os dados inputados no form:
```bash
yarn server
```

O aplicativo funciona com [**React Native DotEnv**](https://github.com/goatandsheep/react-native-dotenv), para isso crie um arquivo *.env* baseado no *.env.example*, e adicione na variavel a url que do server. Se utilizar um simulador o localhost ira funcionar, mas se for testa-lo em um dispositivo coloque o seu ip no localhost ou rode um ngrok para o mesmo.

- Para rodar o aplicativo `yarn start`
- Rodar no android `yarn android`
   - No android as vezes precisa entrar na pasta android `cd android` e rodar `./gradlew clean`
- Rodar no iOS `yarn ios`
   - Antes de rodar no iOS entre nas pasta ios `cd ios` e rode `pod install`
- Verificação do código: 
    - `yarn lint` or `yarn eslint .`,
    - `yarn prettier:check` or `yarn prettier . --check`
- Formatação do código: 
    - `yarn lint:fix` or `yarn eslint . --fix`,
    - `yarn prettier:fix` or `yarn prettier . --write`

## 📂 Organização
`src/components`: biblioteca útil de componentes reutilizáveis.  
`src/navigation`: navegadores de navegação reativa.  
`src/screens`: as telas principais do aplicativo.  
`src/types`: definições de interfaces e tipos importantes.  
`src/constants`: variaves de thema da aplicação.  
`src/services`: configuração do storage e api.  
`src/schemas`: schema para os formulario basedo no yup. 
