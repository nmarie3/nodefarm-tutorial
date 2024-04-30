const fs = require('fs');
const http = require('http')
const url = require('url');

//Blocking synchronous
// const textIn = fs.readFileSync('starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}.\nCreated on $Date.now()}`;
// fs.writeFileSync('starter/txt/output.txt', textOut);
// console.log('File written!');


//Non-blocking, async
// fs.readFile('starter/txt/start.text', 'utf-8', (err, data1) => {
//   fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('starter/txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written');
//       })
//     });
//   });
// });
// console.log('Will read file!');

///////
//SERVER

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  //Overview page
  if(pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');

  //Product page
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  }else if (pathName ==='/api') {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(data);

  //Not found
  }else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listen to requests on port 8000')
})