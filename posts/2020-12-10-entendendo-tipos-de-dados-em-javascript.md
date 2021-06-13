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
*Assim como o [post anterior](https://www.andressamelo.com.br/partes-fundamentais-do-javascript/), este post faz parte [desta thread](https://twitter.com/Madisonkanna/status/1274424134139666432?s=19) sobre os fundamentos do JavaScript, o conteúdo original pode ser acessado [aqui](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript).*

\
Isso é importante porque o tipo de dado específico que você usa determinará quais valores você pode atribuir a ele e o que você pode fazer com ele. Ou seja, para poder fazer operações com variáveis ​​em JavaScript, é importante entender o tipo de dados de qualquer variável.\
\
Neste material, examinaremos como os tipos de dados funcionam em JavaScript, bem como os tipos de dados nativos importantes para a linguagem. Esta não é uma investigação exaustiva dos tipos de dados, mas o ajudará a se familiarizar com as opções disponíveis em JavaScript.

## Tipos Dinâmicos

JavaScript tem tipos de dados dinâmicos, ou seja, a verificação do tipo é feita em tempo de execução, em vez de tempo de compilação. Os tipos de dados do Python também são digitados dinamicamente. \
\
Com linguagens digitadas dinamicamente, uma variável com o mesmo nome pode ser usada para conter diferentes tipos de dados. \
\
Por exemplo, a variável `t`, definida como uma variável pela palavra-chave `let` (observe que `let` mantém uma determinada variável limitada em escopo), pode ser atribuída para conter diferentes tipos de dados ou pode ser inicializada, mas deixando indefinida:

```javascript
let t = 16;         // t é um número
let t = "Teresa";   // t é uma string
let t = true;       // t é um boleano
let t;              // t é indefinida
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

## Strings

Uma string é uma sequência de um ou mais caracteres (letras, números, símbolos). Strings são úteis porque representam dados textuais.

No JavaScript, as strings existem entre aspas simples ou aspas duplas ", portanto, para criar uma string, coloque uma sequência de caracteres entre aspas:

```javascript
let singleQuotes = 'Esta é uma string entre aspas simples.';
```

```javascript
let doubleQuotes = "Esta é uma string entre aspas duplas.";
```

Você pode optar por usar aspas simples ou duplas, mas o que decidir sobre você deve permanecer consistente dentro de um programa.

O programa “Hello, World!” demonstra como uma string pode ser usada em programação de computador, como os caracteres que compõem a frase Hello, World! no alerta () abaixo há uma string.

```html
<!DOCTYPE HTML>
<html>
<head>
<script>
function helloFunction() {
    alert("Hello, World!");
}
</script>
</head>
<body>
<p><button onclick="helloFunction()">Click me</button></p>
</body>
</html>
```

Quando executamos o código e clicamos no botão Click me, receberemos um pop-up com o seguinte resultado:

```javascript
Output
Hello, World!
```

Tal como acontece com outros tipos de dados, podemos armazenar strings em variáveis:

```javascript
let hw = "Hello, World!";
```

E exiba a string no alert () chamando a variável:

```html
...
<script>
let hw = "Hello, World!";
function helloFunction() {
    alert(hw);
}
</script>
...
```

```javascript
Output
Hello, World!
```

Existem muitas operações que podemos realizar em strings dentro de nossos programas, a fim de manipulá-los para alcançar os resultados que buscamos. Strings são importantes para comunicar informações ao usuário e para o usuário comunicar as informações de volta ao programa.

## Booleanos

O tipo de dados booleano pode ser um de dois valores, **verdadeiro** ou **falso**. Os booleanos são usados para representar os valores verdade que estão associados ao ramo lógico da matemática, que informa algoritmos em ciência da computação. \
\
Sempre que você vir o tipo de dados Boolean, ele começará com um **B** maiúsculo porque seu nome é uma homenagem ao matemático George Boole.

Muitas operações matemáticas nos dão respostas que podem ser avaliadas como verdadeiras ou falsas:\

* **Maior que**
  500 > 100 verdadeiro
  1 > 5 falso
* **Menor que**
  200 < 400 verdadeiro
  4 < 2 falso
* **Igual**
  5 = 5 verdadeiro
  500 = 400 falso

Como com outros tipos de dados, podemos armazenar um valor booleano em uma variável:

```javascript
let myBool = 5 > 8; // falso
```

Como 5 não é maior que 8, a variável `myBool` tem o valor `false`.

À medida que você escreve mais programas em JavaScript, fica mais familiarizado com o funcionamento dos booleanos e como diferentes funções e operações avaliadas como verdadeiras ou falsas podem alterar o curso do programa.

## Arrays

Um array (ou uma matriz) pode conter vários valores em uma única variável. Isso significa que você pode conter uma lista de valores em um array e iterar por meio deles.

Cada item ou valor que está dentro de um array é chamado de elemento. Você pode se referir aos elementos de um array usando um número de índice.

Assim como as strings são definidas como caracteres entre aspas, os arrays são definidos com valores entre colchetes \[  ].

Um array de strings, por exemplo, tem a seguinte aparência:

```javascript
let fish = \["shark", "cuttlefish", "clownfish", "eel"];
```

Se chamarmos a variável fish, receberemos a seguinte saída:

```javascript
["shark", "cuttlefish", "clownfish", "eel"]
```

Os arrays são um tipo de dados muito flexível porque são mutáveis no sentido de que podem ter valores de elemento adicionados, removidos e alterados.

## Objetos

O tipo de dados do **objeto** JavaScript pode conter muitos valores como pares **nome: valor**. Esses pares fornecem uma maneira útil de armazenar e acessar dados. A sintaxe literal do objeto é composta de pares nome: valor separados por dois pontos com chaves em cada lado `{}`.

Normalmente usado para conter dados relacionados, como as informações contidas em um ID, um literal de objeto JavaScript se parece com isto, com espaços em branco entre as propriedades:

```javascript
let sammy = {firstName:"Sammy", lastName:"Shark", color:"blue", location:"ocean"};
```

Como alternativa, e especialmente para literais de objeto com um grande número de pares nome: valor, podemos escrever este tipo de dados em várias linhas, com um espaço em branco após cada dois-pontos:

```javascript
let sammy = {
    firstName: "Sammy",
    lastName: "Shark",
    color: "blue",
    location: "Ocean"
};
```

A variável de objeto `sammy` em cada um dos exemplos acima tem 4 propriedades: `firstName`, `lastName`, `color` e `location`. Esses são os valores passados separados por dois pontos.

## Trabalhando com vários tipos de dados

Embora cada programa que você criar contenha vários tipos de dados, é importante ter em mente que geralmente você executará operações no mesmo tipo de dados. Ou seja, você fará matemática com números ou fatiará strings.

Ao usar um operador que funciona em tipos de dados, como o operador `+` que pode adicionar números ou concatenar strings, você pode obter resultados inesperados.

Por exemplo, ao usar o operador `+` com números e strings juntos, os números serão tratados como uma string (portanto, eles serão concatenados), mas a ordem dos tipos de dados influenciará a concatenação.

Portanto, se você criar uma variável que execute a seguinte concatenação, o JavaScript interpretará cada elemento abaixo como uma string:

```javascript
let o = "Ocean" + 5 + 3;
```

Se você chamar a variável `o`, obterá o seguinte valor retornado:

```javascript
Output
Ocean53
```

No entanto, se você começar com números, os dois números serão adicionados antes de serem interpretados como uma string quando o tempo de execução do programa atingir "Oceano", então o valor retornado será a soma dos dois números concatenados com a string:

```javascript
let p = 5 + 3 + "Ocean";
```

```javascript
Output
8Ocean
```

Devido a esses resultados inesperados, você provavelmente executará operações e métodos dentro de um tipo de dados, em vez de entre eles. JavaScript, entretanto, não retorna erros ao misturar tipos de dados, como fazem algumas outras linguagens de programação.

## Conclusão

Neste ponto, você deve ter um melhor entendimento de alguns dos principais tipos de dados disponíveis para uso em JavaScript.

Cada um desses tipos de dados se tornará importante conforme você desenvolve projetos de programação na linguagem JavaScript.