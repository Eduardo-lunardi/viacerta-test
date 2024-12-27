# VIACERTA Teste

## ⚡ Stack e Dependências

Este projeto utiliza as seguintes tecnologias e bibliotecas:

### Principais Tecnologias
- [**React Native**](https://reactnative.dev/): Estrutura principal do aplicativo.
- [**TypeScript**](https://www.typescriptlang.org/): Superset de JavaScript para tipagem estática.

### Bibliotecas de Suporte
- [**React Navigation**](https://reactnavigation.org/docs/getting-started/): Navegação entre telas.
- [**ESlint**](https://eslint.org/) e [**Prettier**](https://prettier.io/): Para detecção de erros e formatação consistente do código.
- [**React Native DotEnv**](https://github.com/goatandsheep/react-native-dotenv): Gerenciamento de variáveis de ambiente.
- **Importações Absolutas**: Configurado no `tsconfig.json` e `babel.config.js` para facilitar os imports.

## 🔧 Uso

### Instale as dependências do projeto:
```bash
yarn
```

### Configure o servidor para salvar os dados do formulário:
```bash
yarn server
```

### Configure as variáveis de ambiente:
   - Crie um arquivo .env baseado no .env.example.
   - Defina a URL do servidor na variável de ambiente.
   - Se estiver usando um simulador, o localhost funcionará. Para dispositivos reais, utilize seu IP local ou um túnel como o ngrok.

### Rodando o Projeto
- Inicie o aplicativo:
```bash
yarn start
```
- Execute no Android:
```bash
yarn android
```
- Caso enfrente problemas, limpe os builds:
```bash
cd android && ./gradlew clean
```

- Execute no iOS:
```bash
yarn ios
```
Antes disso, instale os pods:
```bash
cd ios && pod install
```

### Verificação e Formatação de Código
- Verificar código
```bash
yarn lint
yarn prettier:check
```

- Formatar código:
```bash
yarn lint:fix
yarn prettier:fix
```

## 📂 Organização

`src/components`: Componentes reutilizáveis e estilizados.

`src/navigation`: Configurações de navegação e rotas do aplicativo.

`src/screens`: Telas principais, cada uma em um arquivo próprio.

`src/types`: Tipos e interfaces TypeScript utilizados globalmente.

`src/constants`: Variáveis de tema e constantes globais.

`src/services`: Configurações de APIs e armazenamento local.  

`src/schemas`: Schemas de validação para formulários utilizando o Yup. 

`assets/images`: Imagens do projeto.

`assets/fonts`: Fontes do projeto.
