const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8080/hello.html?id=100&status=active"
);

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain , port number included)
console.log(myUrl.host);

//Hostname (only name , no port number included)
console.log(myUrl.hostname);

//pathName
console.log(myUrl.pathname);

//Serialised query
console.log(myUrl.search);

//search Param object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.search);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));
