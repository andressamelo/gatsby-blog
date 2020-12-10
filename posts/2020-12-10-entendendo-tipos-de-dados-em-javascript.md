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

Cada uma das variáveis `t` acima pode ser definida para qualquer tipo de dados disponível em JavaScript; eles não precisam ser declarados explicitamente com um tipo de dados antes de serem usados.

## Números

JavaScript tem apenas um tipo de número, não há designação separada para números inteiros e de ponto flutuante. Por causa disso, os números podem ser escritos em JavaScript com ou sem decimais:

```javascript
let num1 = 93;
let num2 = 93.00;
```

Em ambos os casos acima, o tipo de dados é um número e é o mesmo, independentemente de o número ter ou não casas decimais.

A notação exponencial científica pode ser usada em JavaScript para abreviar números muito grandes ou pequenos, como nos exemplos a seguir:

```javascript
let num3 = 987e8;       // 98700000000
let num4 = 987e-8;      // 0.00000987
```

**Os números em JavaScript são considerados precisos de até 15 dígitos. Isso significa que os números serão arredondados após o 16º dígito ser alcançado:**

```javascript
let num5 = 999999999999999;     // remains as 999999999999999
let num6 = 9999999999999999;    // rounded up to 10000000000000000
```

Além de representar números, o tipo de número JavaScript também tem três valores simbólicos disponíveis:

*Infinito* - um valor numérico que representa um número positivo que se aproxima do infinito
*\-Infinito* - um valor numérico que representa um número negativo que se aproxima do infinito
*NaN* - um valor numérico que representa um não número, significando não um número

*Infinito* ou *\-Infinito* será retornado se você calcular um número fora do maior número possível disponível em JavaScript. Isso também ocorrerá para valores indefinidos, como ao dividir por zero:

```javascript
let num7 = 5 / 0;   // will return Infinity
let num8 = -5 / 0;  // will return -Infinity
```

Em termos técnicos, o Infinity será exibido quando um número exceder o número 1,797693134862315E + 308, que representa o limite superior em JavaScript.

Da mesma forma, -Infinito será exibido quando um número ultrapassar o limite inferior de -1,797693134862316E + 308.

O número Infinity também pode ser usado em loops:

```javascript
while (num9 != Infinity) {
    // Code here will execute through num9 = Infinity
}
```

Para números que não são legais, NaN será exibido. Se você tentar realizar uma operação matemática em um número e um valor não numérico, NaN será retornado. Este é o caso no seguinte exemplo:

```javascript
let x = 20 / "Shark";   // x will be NaN
```

Como o número `20` não pode ser dividido pela string `"Shark"`porque não pode ser avaliado como um número, o valor retornado para a variável `x` é `NaN`.

No entanto, se uma string pode ser avaliada como um valor numérico, a expressão matemática pode ser realizada em JavaScript:

```javascript
let y = 20 / "5";   // y will be 4
```

No exemplo acima, como a string `"5"` pode ser avaliada como um valor numérico em JavaScript, ela é tratada como tal e funcionará com o operador matemático para divisão, `/`.

Ao atribuir o valor `NaN` a uma variável usada em uma operação, resultará no valor de NaN, mesmo quando o outro operando for um número legal:

```javascript
let a = NaN;
let b = 37;
let c = a + b;  // c will be NaN
```

Existe apenas um tipo de dados numérico em JavaScript. Ao trabalhar com números, qualquer número inserido será interpretado como esse tipo de dado; você não é obrigado a declarar que tipo de tipo de dado está inserindo porque o JavaScript é declara dinamicamente.

