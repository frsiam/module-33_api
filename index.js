const user = {id:55, name:'khan', job:'Imam'}
console.log(user);

const stringified = JSON.stringify(user);
console.log(stringified);

const converted = JSON.parse(stringified)
console.log(converted.job);


