# Cifra de César

## Índice

* [1. Introdução](#1-introdução)
* [2. Objetivo do projeto](#2-objetivo-do-projeto)
* [3. Definição do produto](#3-definição-do-produto)


***

## 1. Introdução

O projeto consiste em uma aplicação web utilizando A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) para cifrar e decifrar mensagens.

## 2. Objetivo do projeto

O objetivo do projeto será apresentar uma aplicação funcional, que consiste em um jogo, onde o objetivo é conseguir escapar do assassino. Os jogadores se comunicarão a partir de mensagens cifradas para conseguir sair do local em um determinado tempo.

## 3. Definição do produto

* Quem são os principais usuário do produto?
Os principais usuários do produto são pessoas a partir dos 13 anos interessadas em jogos online.
* Quais são os objetivos do usuário em relação com o produto?
O usuário utilizará o produto para entretenimento.
* Como você acredita que o produto está resolvendo os problemas do usuário?
O produto é uma forma de diversão para desestressar da correria do dia a dia, é um jogo de fácil entendimento onde há interação entre amigos ou com pessoas aleatórias. 

* `README.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.

Para jogar não é necessário instalar nenhum programa, o jogador deve entrar no link: [x].

Como inicia-se o jogo:
O jogador digita uma mensagem no campo 'Mensagem' e coloca quantas casas se quer usar para cifrar no campo 'Chave de Deslocamento'

## Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

* [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [ ] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [ ] `README.md` explicar claramente como o produto soluciona os
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
