const url = require('url');

const{URL} = url;
const myURL = new URL('https://m.sports.naver.com/kbaseball/article/117/0003989497');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('----------------------------------');
const parsedUrl = url.parse('https://m.sports.naver.com/kbaseball/article/117/0003989497');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));    
