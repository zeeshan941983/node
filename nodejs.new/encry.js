const tripledes = require('node-triple-des');

const Encryption = require('node_triple_des');

const encrypt = tripledes.encrypt('1234', 'hello');
console.log(encrypt);
// // U2FsdGVkX1+luaxAzoyoyJI/5sAzyUW1

// const decrypt = Encryption.decrypt('1234', 'CipherText');
// console.log(decrypt);
