const assert = require('chai').assert;
global.window = global;
require('../index'); //Enlaza el archivo

//Validar contraseña
describe('Validar funcion', () => { 
  describe('Debería ser una funcion', () => {
    it('Debería la contraseña tener máximo 8 caracteres', () => { 
      assert.equal(validatePass("12345678"), true); 
      assert.equal(validatePass("123456789"), false);
    });
  });
});