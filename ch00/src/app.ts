

type Greeting = 'hello' | 'hi';


function makeGreetingSentence(greeting: Greeting, name: string): string 
{
    return `${greeting}, ${name}`;
}


const result = makeGreetingSentence('hello', 'mike');
console.log(result);
