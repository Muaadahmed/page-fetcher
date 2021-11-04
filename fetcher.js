const cmdArgs = process.argv.slice(2);

const request = require('request');
const fs = require('fs');
let content = '';
request(`${cmdArgs[0]}`, (error, response, body) => {
  if(!error){
    content += body;
    let arr = content.split("");
    fs.writeFile(`${cmdArgs[1]}`, content, error => {
      console.log(`Downloaded and saved ${arr.length} bytes to ./index.html`);
    })
  } else {
    console.log('Error in request: ', error);
  }
})