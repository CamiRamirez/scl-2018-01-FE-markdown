#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mdLinks = require('./mdlinks.js');
const Marked = require('marked');
const fetch = require('node-fetch');

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
        // console.log(file);
        if (path.extname(file) === '.md') { // selecciona solo los .md
          // console.log(file);
          fs.readFile(file, 'utf8', function(err, data) { // lee los archivos .md
            if (err) {
              console.log(err);
            } else {
              console.log(mdLinks(data));
              mdLinks(data).forEach(element => {
                fetch(`${element.href}`, {validate: true}).then((response)=>{
                  console.log(response.url, response.status, response.statusText);
                });
              });
            }
          });
        }
      });
    }
  });

  