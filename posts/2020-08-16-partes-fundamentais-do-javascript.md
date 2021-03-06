---
title: Partes fundamentais do JavaScript
description: " Se você está aprendendo JavaScript, provavelmente já ouviu as
  pessoas dizerem como é importante aprender as partes fundamentais da
  linguagem."
date: 2020-08-16 12:03:58
image: assets/img/javascript.png
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

Este pode parecer um tópico simples, mas existem detalhes sutis na criação de variáveis ​​em JavaScript que é importante saber.

### O que são variáveis?

Variáveis ​​em JavaScript são contêineres que contêm dados reutilizáveis. Eles são como xícaras cheias de coisas, e essas coisas podem ser usadas repetidamente, dependendo da maneira que escolhermos. Antes do ES2015, as variáveis ​​JavaScript eram declaradas exclusivamente usando a palavra-chave `var`.

```js
var x;
var y;
var z;
```

No código acima estamos declarando a variável x, a variável y e a variável z. 

Observe que ainda não estamos atribuindo nenhum valor a essas variáveis. Estamos apenas dizendo que eles deveriam existir. Se você fosse olhar para o valor de cada variável aqui, seria indefinido.

### Declarando variáveis no ES2015

ES2015 é a versão atualizada do JavaScript (ou ECMAScript). O termo conhecido e mais flexível para ES2015 é ES6.

No ES2015, duas outras formas de declarar variáveis ​​foram introduzidas. Eles são `let` e `const`. Discutiremos esses tipos em partes posteriores desta lição.

## Usando variáveis

Variáveis ​​são como contêineres em JavaScript. Usar variáveis ​​para armazenar dados é a base da linguagem e é feito em três partes distintas.

**1. Declaração de variável:** aqui a variável é registrada em seu escopo correspondente, o escopo de uma variável é simplesmente "onde a variável pode ser usada." Falaremos mais sobre o escopo na próxima lição.

\
Alguns exemplos de declarações de variáveis:

```js
var x;
var cup;
var car;
```

**Inicialização de variável:** geralmente ocorre quando uma variável é declarada. Aqui, a variável é atribuída a uma memória ou espaço pelo mecanismo JavaScript. Por isso, uma vez que uma variável é declarada, ela assume o valor `undefined` mesmo antes da atribuição.

**Atribuição de variável:** a atribuição de variável é geralmente a etapa mais importante ao usar uma variável. Aqui, são atribuídos dados à variável que são um valor usando o operador "=". Os valores em JavaScript usam um dos tipos de dados JavaScript padrão, que são:

1. `String`
2. `Number`
3. `Boolean`
4. `Null`
5. `Undefined`
6. `Estrutura de dados (Array e Objetos)`

```js
var x         = 5;             // Number
var name      = "Chris";       // String
var developer = true | false;  // Boolean
var location  = null;          // Null
var blue;                      // undefined
```

A sintaxe para atribuição de tipos de dados pode ser vista acima, podemos usar aspas simples ou duplas para atribuir strings. Além disso, os valores booleanos são verdadeiros ou falsos.

## Nomeando variáveis

Precisamos seguir algumas regras para nomear variáveis em JavaScript, são elas:

* Os nomes devem começar com string minúsculas.
* Os nomes não podem conter símbolos ou começar com símbolos.
* Os nomes não podem começar com um número.
* Os nomes podem conter uma mistura de strings maiúsculas, strings minúsculas e números.

**Exemplos de nomes de variáveis ​​são:**

```js
// VALID
var man;     
var woman3;  
var blackDog; // This is the best way to name variables with several words

// INVALID
var 1girl;   
var -girl;   
```

Várias variáveis ​​em JavaScript também podem ser encadeadas, embora separadas por uma vírgula.

```js
var x, y, z;
```

Atribuição de valores:

```js
var x = 5, y = 6, z = 7;

var a = 10,
  b   = 30,
  c   = 90;
```

Variáveis ​​em JavaScript também podem realizar expressões matemáticas simples e assumir seu valor. Aqui:

```js
var x = 5 + 10 + 2;
console.log(x); // 17
```

Após a primeira declaração de uma variável no escopo global, as declarações subsequentes de um nome de variável usando `var` são possíveis.

Exemplo:

```js
var age = 22;
var age = 25;

console.log(age) // 25
```

Agora vamos dar uma olhada nos outros tipos de variáveis, `let` e `const`.

# Let

Introduzido no ES2015 (também conhecido como ES6), o tipo de variável `let` compartilha muitas semelhanças com `var`, mas ao contrário de var tem restrições de escopo. `let` **é restrito a qualquer escopo em que seja declarado.** Sua declaração e atribuição são semelhantes a `var`. `let` foi introduzido para mitigar os problemas apresentados pelo escopo das variáveis ​​que os desenvolvedores enfrentam durante o desenvolvimento.

Resumindo, `let` nos ajuda tornando mais fácil ver onde as variáveis ​​residem em nosso código.

Ao declarar variáveis ​​com `let`:

```js
let x;
let x = 5;
```

Múltiplas declarações também podem ser feitas com let:

```js
let x, y, z;
let x = 50, y = 20, z = 3;
```

Ao contrário de `var`, quando usa-se `let`, as variáveis ​​não podem ser declaradas novamente. Tentar fazer isso gerará um erro de sintaxe: *O identificador já foi declarado.*

```js
let x = 20;
let x = 50;

console.log(x); // SyntaxError: identifier "x" has already been declared.
```

Essa modificação em `var` ajuda muito a fornecer um nível de organização **enquanto gerencia grandes estruturas de dados**, pois é mais seguro saber que sua variável não pode ser reatribuída em nenhum lugar em seu escopo.

# Const

Também introduzido no ES2015, `const` é um tipo de variável (não realmente, mas você descobrirá agora) atribuído a dados cujo valor **não pode e não será** alterado em todo o script. Agora, isso é mais rígido. `const` também está limitado ao escopo em que opera. `const` é declarado como `var` e `let`.

**Use const quando tiver certeza de que uma variável não será declarada novamente.**

```js
const x = 20; 
const y = 'boy';
const z = 'developer';
```

Nota: Uma variável declarada com  **const**  DEVE ser inicializada.

```js
const x; // SyntaxError: missing initializer
```

Assim como `var` e `let`, as variáveis ​​declaradas com const também podem ser encadeadas com vírgulas separando cada variável:

```js
const x = 20, y = 50, man = true;
```

Para nomes de variáveis ​​diferentes, esses tipos de variáveis ​​podem ser usados ​​juntos, dependendo do processo de desenvolvimento.

## **Alterando const**

**Não** é permitido alterar o valor de uma variável declarada com const.

```js
const name = 'chris';

name = 'john'; // Uncaught TypeError: Assignment to constant variable.
```

No entanto, se você declarar um objeto como const, poderá alterar as propriedades.

```js
const person = {};

person.name = 'chris'; // no error
```

# Qual Usar

Ao declarar variáveis, é uma boa prática evitar o uso de var. Tente optar por let ou const com base nas seguintes regras:

Use `let` quando for mudar o valor da variável
Use `const` quando você tiver certeza de que aquela variável não será alterada

Usar `let` e `const` manterá as variáveis ​​no escopo correto e tornará o código mais fácil de gerenciar.

# Conclusão

Neste post, entendemos como as variáveis ​​são declaradas em JavaScript e as diferenças entre os tipos de variáveis ​​- `var`, `let` e `const`.

Esses tipos de variáveis ​​são únicos em sua própria maneira e servem para tornar o desenvolvimento de código eficiente, no entanto, é aconselhável usar `let` sempre que possível e `const` sempre que o valor da variável for permanecer constante.