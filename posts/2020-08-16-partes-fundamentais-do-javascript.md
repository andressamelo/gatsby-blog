---
title: Partes fundamentais do JavaScript
description: " Se você está aprendendo JavaScript, provavelmente já ouviu as
  pessoas dizerem como é importante aprender as partes fundamentais da
  linguagem.."
date: 2020-08-16 12:03:58
image: assets/img/desert.jpg
category: js
background: "#D6BA32"
---
No twitter me deparei com [esta thread](https://twitter.com/Madisonkanna/status/1274424134139666432?s=19) sobre os fundamentos do JavaScript. Como o conteúdo está todo em inglês, resolvi traduzir e separar em posts para compartilhar também em português e facilitar o estudo de quem quer aprender JavaScript.

Então vamos ao primeiro post:

## 1. Declarando variáveis: var, let e const

Conteúdo original [aqui](https://scotch.io/courses/10-need-to-know-javascript-concepts/declaring-javascript-variables-var-let-and-const)

Definir dados e, em seguida, manipulá-los sempre foi a base da programação. O que é programação sem dados? Presumo que você tenha adivinhado "nada". Os tipos de dados são basicamente variáveis ​​ou constantes.

* Variáveis ​​podem ser alteradas
* Constantes permanecem as mesmas

Onde as variáveis ​​podem ser alteradas, as constantes permanecem as mesmas. Neste artigo, discutiremos as várias maneiras de criar variáveis ​​em JavaScript.

Este pode parecer um tópico simples, mas existem nuances sutis na criação de variáveis ​​em JavaScript que é importante saber.

### O que são variáveis?

Variáveis ​​em JavaScript são contêineres que contêm dados reutilizáveis. Eles são como xícaras cheias de coisas, e essas coisas podem ser usadas repetidamente, dependendo da maneira que escolhermos. Antes do ES2015, as variáveis ​​JavaScript eram declaradas exclusivamente usando a palavra-chave var.



```js
var x;
var y;
var z;
```

No código acima estamos declarando a variável x, a variável y e a variável z. 

Observe que ainda não estamos atribuindo nenhum valor a essas variáveis. Estamos apenas dizendo que eles deveriam existir. Se você fosse olhar para o valor de cada variável aqui, seria indefinido.

### Declarando variáveis no ES2015
