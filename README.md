# Cifra de César

## Índice

* [1. Introdução](#1-introdução)
* [2. Objetivo do projeto](#2-objetivo-do-projeto)
* [3. Oportunidade de negócio](#3-oportunidade-de-negócio)
* [4. Definição do produto](#4-definição-do-produto)
* [5. Scripts e Arquivos](#5-scripts-e-arquivos)
* [6. Checklist](#6-checklist)

***

## 1. Introdução

A proposta deste projeto é apresentar uma aplicação web que utiliza A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) para encriptar e decriptar uma mensagem. Essa aplicação será utilizada para um jogo online de sobrevivência onde o objetivo dos jogadores é fugir dos assassinos.
A funcionalidade da aplicação é enviar mensagens encriptadas entre os jogadores de forma que os assassinos não consigam decifrá-las, evitando assim serem pegos. O jogador que recebe a mensagem encriptada deve ter a mesma chave de encriptação para conseguir decriptá-la. A mensagem pode conter uma instrução, um código para abrir portas ou cadeados, a localização de um jogador, dos assassinos, da saída, ou qualquer outra informação que os jogadores julgarem relevantes para conseguir escapar.

## 2. Objetivo do projeto

O objetivo do projeto será apresentar uma aplicação web funcional que realiza a encriptação e a decriptação de uma mensagem com sucesso.

## 3. Oportunidade de negócio

Os jogos online estão muito populares hoje em dia e é um mercado com grande oportunidade de crescimento. Essa aplicação visa atingir como principais usuários o público interessado nesse tipo de entretenimento. É um jogo dinâmico, de fácil entendimento, onde é necessário somente usar lógica, estratégia e ter raciocínio rápido, além de ser um jogo coletivo, ou seja, é preciso trabalhar em grupo para atingir o objetivo final.

## 4. Definição do produto

Para jogar não é necessário instalar nenhum programa, o jogador deve entrar no seguinte link: [Gotcha!](https://livianascimento.github.io/SAP003-cipher/src/).

### Como funciona a aplicação:

- Ao todo são 10 jogadores: 2 assassinos e 8 vítimas. 
- O jogo inicia quando os jogadores recebem pistas e/ou dicas e é acionado um tempo para transmitir e decifrar as mensagens. Cada assassino recebe a localização de um jogador. 
- Para passar as pistas e/ou dicas para seus companheiros as mesmas devem ser encriptadas utilizando um valor para a chave de deslocamento. Para que possam ser decriptadas os jogadores devem saber qual a chave de deslocamento usada na encriptação, somente assim saberão que estão lendo a mensagem correta já que os assassinos também podem enviar mensagens para confundir suas vítimas. 
- Cada rodada tem um determinado tempo, caso os jogadores não consigam decriptar as mensagens cada assassino recebe uma mensagem original e a localização dos jogadores que estavam trocando as mensagens. Esses jogadores são punidos e não avançam no jogo. 
- O tempo é acionado novamente e todos recebem novas pistas, caso consigam passar e decifrar as mensagens os assassinos ficam paralisados e os jogadores avançam uma etapa e inicia-se uma nova rodada. 
- O jogo termina quando todos os jogadores que não foram mortos conseguirem abrir a porta de saída ou quando os assassinos eliminarem todas as vítimas.

### Interface do usuário (UI)

A interface deve permitir ao usuário:

* Campo Mensagem: o usuário digita uma mensagem para ser cifrada ou decifrada. 
* Campo Chave de Deslocamento: o usuário digita um número inteiro para o deslocamento. 
* Botão Encriptar: ao clicar cifra a mensagem. A mensagem cifrada aparece do lado direito da tela.
* Botão Decriptar: ao clicar decifra a mensagem. A mensagem decifrada aparece do lado direito da tela. 

## 5. Scripts e Arquivos

* `README.md`: contém informações sobre o projeto, seu objetivo, introdução a aplicação, suas funcionalidades, definição do produto e como executar a aplicação. 
* `src/index.html`: aqui encontra-se o ponto de entrada da aplicação. Este arquivo contém a marcação HTML e chama o CSS e JavaScript necessários. 
* `src/cipher.js`: arquivo onde implementa-se o objeto cipher, o qual deve estar exportado no objeto global (`window`). Este objeto (`cipher`) contém dois métodos: 
    - cipher.encode(offset, string): `offset` é o número de posições que serão movidas para a direita no alfabeto e `string` é a mensagem (texto) que será cifrada. 
    - cipher.decode(offset, string): `offset` é o número de posições que serão movidas para a esquerda no alfabeto e `string` é a mensagem (texto) que será decifrada. 
* `src/index.js`: arquivo onde são escutados os eventos de DOM e onde é chamado `cipher.encode()` e `cipher.decode()`. 
* `test/cipher.spec.js`: este arquivo contém alguns testes de exemplo e onde são implementados os testes para `cipher.encode()` e `cipher.decode()`. 

## 6. Checklist

Seção de controle dos requisitos necessários para completar o projeto.

### Parte Obrigatória

* [x] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [x] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [x] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [x] Usar VanillaJS.
* [x] **Não** usar `this`.
* [x] Implementar `cipher.encode`.
* [x] Implementar `cipher.decode`.
* [x] Passar o linter com a configuração definida.
* [x] Passar as provas unitárias.
* [x] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [x] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [x] Interface que permita escrever um texto para ser cifrado.
* [x] Interface que mostre o resultado da cifra corretamente.
* [x] Interface que permita escrever um texto para ser decifrado.
* [x] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [x] Cifrar/decifrar minúsculas.
* [x] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [x] Permitir usar `offset` negativo.
