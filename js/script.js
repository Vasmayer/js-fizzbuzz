/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 

BONUS:
Provare a stampare la lista in pagina invece che in console.

1. creo un ciclo che vada da 1 a 100 compreso
2. all'interno del ciclo verifico quali numeri sono divisibili per 3 e per 5
3.per i numeri divisibili per 3 stampo Fizz per 5 Bazz entrambi FizzBazz

*/

const numberOfCycles = 100;

for(let i=1;i<=numberOfCycles;i++)
{
    let message = '';

    if(i % 3 == 0)
        message += 'Fizz';
    
    if(i % 5 == 0)
        message += 'Buzz';

    if(message)
        console.log(message);
    else
        console.log(i);
}