recipes-searcher
============
Essa é uma API demo feita em NodeJs, não foi feita para ser colocada em produção.
Não possuo experiência com NodeJs, por isso, não aconselho considerar correta
alguma decisão que tomei ao desenvolver essa API.

### O que esse projeto faz
- Esse projeto tem um único endpoint `/recipes/?i={ingredient_1},{ingredient_2}`,
esse endpoint tem como retorno as receitas que foram encontradas com os 
ingredientes que foram passados por parâmetro, a resposta tem esse formato:
```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```

### Requisitos do projeto
- Utilizar NodeJS para criar a aplicação;
- Toda configuração e chaves de acesso (se necessário) devem ser acessadas em um arquivo de ambiente. Sua configuração deve estar documentada no README;
- Para obter o gif no Giphy, utilize o título da receita recebido pelo RecipePuppy;
- Os ingredientes recebidos pelo RecipePuppy são recebidos em String. Organize os ingredientes em um array e ordene esse array por ordem alfabética;
- Se algum dos serviços externos estiver indisponível o projeto deverá informar o usuário dessa indisponibilidade;
- Utilizar Docker para executar o projeto;
- O número máximo de ingredientes permitidos na request é 3;
------------
### Informações úteis sobre o respositório
- A intenção era fazer uma API compreendendo boa parte dos problemas que
seriam encontrados em uma aplicação real;
- Algumas vezes alguns erros de permissão acontecem com a pasta `node_modules`,
não entendo exatamente o porque, mas caso aconteça, remova o diretório
`node_modules` e instale os pacotes novamente com `yarn install` ou `npm install`;
- A minha expectativa é que os testes estejam estáveis, mas com certeza ainda
não possuem cobertura total;
- Se tem algo que com certeza deve ser melhorado, são os testes;
- Este projeto não foi configurado para rodar em ambiente de produção;
------------
### Requisitos para rodar a aplicação
- Yarn (Estou usando a versão 1.9.4) - É muito provável que esteja funcionando
com NPM também;
- Docker (Estou usando a versão 18.06.1-ce);
- docker-compose (Estou usando a versão 1.22.0);
- Uma Api Key do Giphy que pode ser obtida nesse [aqui](https://developers.giphy.com/);
------------
### Para rodar o projeto
- A key do Giphy deve ser colocada no arquivo `.env` com o ID `GIPHY_API`,
segue exemplo no arquivo `.env.example`;
- Após isso basta rodar esses comandos na raiz do projeto:
```
yarn install
yarn run dev
```
Caso esteja interessado, pode tentar rodar com NPM com os seguintes comandos:
```
npm install
npm run dev
```
Se a aplicação rodar sem problemas, será possível ver a resposta de uma requisição [aqui](http://localhost:8080/recipes/?i=tomato,onions,avocado);

------------
### Para rodar os testes da aplicação
- A key do Giphy deve ser colocada no arquivo `.env` com o ID `GIPHY_API`,
segue exemplo no arquivo `.env.example`;
Após isso basta rodar esses comandos na raiz do projeto:
```
yarn install
yarn run test
```
Caso esteja interessado, pode tentar rodar com NPM com os seguintes comandos:
```
npm install
npm run test
```
