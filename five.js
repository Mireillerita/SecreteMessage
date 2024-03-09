//Secrete message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
 console.log(secretMessage.pop());
console.log(secretMessage.length);
secretMessage.push('to','Program');
secretMessage['easily'] = 'right';

const firstElement = secretMessage.shift();
console.log(secretMessage);
secretMessage.splice(6,24, 'know' );
console.log(secretMessage);
console.log(secretMessage.join());




