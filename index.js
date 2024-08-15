// Please do not change the prewritten code

import http from "http";
import fs from "fs";
const path ='data.txt';


const server = http.createServer((req, res) => {
  //  Write your code here
  //handle post request
  if(req.method === 'POST'){
    console.log('Post request');

    let body = '';
    req.on('data', (chunk)=>{
      console.log('Chunk', chunk);
      body += chunk;
      console.log('body',body)
    });
    
    req.on('end', () => {
      fs.appendFileSync(path, body);
    });
     //console.log(body)
    const data = fs.readFileSync(path,{encoding :'utf-8'});
    console.log(data);
    return res.end('Data recieved');
  }else {
    return res.end("Only POST requests are handled");

  }


  //res.end("data received");
});

export default server;
