const assert = require('chai').assert;
global.window = global;
require('../mdlinks.js'); //Enlaza el archivo

//Validar funcion
describe('Validar funcion', () => { 
    it('Debería ser una funcion', () => { 
      assert.isFunction(renderer.link);
    });
});