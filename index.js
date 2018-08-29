#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mdLinks = require('./mdlinks.js');
const Marked = require('marked');
const fetch = require('node-fetch');
const colors = require('colors');

//  Ruta actual del directorio (Current Working Directory)
let currDirectory = process.cwd();
console.log(`Current working directory: ${process.cwd()}`);
let cwdToString = Buffer.from(currDirectory);

//  Lee los contenidos del directorio
  fs.readdir(cwdToString, (err, files) => {
    if (err) {
      console.log(err.message);
    } else {
      files.forEach(file => {
        if (path.extname(file) === '.md') { // selecciona solo los .md
          fs.readFile(file, 'utf8', function(err, data) { // lee los archivos .md
            if (err) {
              console.log(err);
            } else {
              mdLinks(data).forEach(element => {
                // console.log(file.magenta, element.href, element.text.yellow);
                fetch(`${element.href}`, {validate: true}).then((response)=>{
                  let arrayLinks = {
                    link: response.url.blue,
                    text: element.text.magenta,
                    title: file.cyan,
                    status: response.status,
                    statusText: response.statusText.green,
                    linelinks: element.line
                  };
                  console.log(`Archivo: ${arrayLinks.title}, URL: ${arrayLinks.link}, Texto: ${arrayLinks.text}, Status: ${arrayLinks.status} ${arrayLinks.statusText}, Línea: ${arrayLinks.linelinks}`); 
                });
              });
            }
          });
        }
      });
    }
  });


  