---
title: Entendendo tipos de dados em JavaScript
description: Os tipos de dados são usados ​​para classificar um tipo específico
  de dados em linguagens de programação. Por exemplo, um número e uma sequência
  de caracteres são tipos diferentes de dados que serão tratados de maneira
  diferente pelo JavaScript.
date: 2020-12-09 09:53:34
image: assets/img/javascript.png
category: js
background: "#D6BA32"
---
Isso é importante porque o tipo de dado específico que você usa determinará quais valores você pode atribuir a ele e o que você pode fazer com ele. Ou seja, para poder fazer operações com variáveis ​​em JavaScript, é importante entender o tipo de dados de qualquer variável.\
\
Neste tutorial, examinaremos como os tipos de dados funcionam em JavaScript, bem como os tipos de dados nativos importantes para a linguagem. Esta não é uma investigação exaustiva dos tipos de dados, mas o ajudará a se familiarizar com as opções disponíveis em JavaScript.



## Dynamic Typing

JavaScript tem tipos de dados dinâmicos, ou seja, a verificação do tipo é feita em tempo de execução, em vez de tempo de compilação. Os tipos de dados do Python também são digitados dinamicamente. \
\
Com linguagens digitadas dinamicamente, uma variável com o mesmo nome pode ser usada para conter diferentes tipos de dados. \
\
Por exemplo, a variável `t`, definida como uma variável pela palavra-chave `let` (observe que `let` mantém uma determinada variável limitada em escopo), pode ser atribuída para conter diferentes tipos de dados ou pode ser inicializada, mas ser indefinida:

```javascript
let t = 16;         // t is a number
let t = "Teresa";   // t is a string
let t = true;       // t is a Boolean
let t;              // t is undefined
```