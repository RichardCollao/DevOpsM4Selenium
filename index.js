const { Builder, By, until } = require('selenium-webdriver');

(async function main() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log('Abriendo http://localhost:8080/ ...');
    await driver.get('http://localhost:8080/');

    // Esperar y escribir en el input "nombre"
    console.log('Esperando input con id="nombre"...');
    const nombreInput = await driver.wait(
      until.elementLocated(By.id('nombre')),
      10000
    );
    await driver.wait(until.elementIsVisible(nombreInput), 10000);
    await nombreInput.clear();
    await nombreInput.sendKeys('sam');
    console.log('Escrito "sam" en el input "nombre".');

    // Esperar y escribir en el input "peso"
    console.log('Esperando input con id="peso"...');
    const pesoInput = await driver.wait(
      until.elementLocated(By.id('peso')),
      10000
    );
    await driver.wait(until.elementIsVisible(pesoInput), 10000);
    await pesoInput.clear();
    await pesoInput.sendKeys('4');
    console.log('Escrito "4" en el input "peso".');

    // Esperar y hacer click en el botón
    console.log('Esperando botón de envío...');
    const boton = await driver.wait(
      until.elementLocated(By.css('form button[type="submit"]')),
      10000
    );
    await driver.wait(until.elementIsVisible(boton), 10000);
    await boton.click();
    console.log('Click en el botón realizado.');

    console.log('Formulario enviado. El navegador permanecerá abierto.');
    console.log('Cierra el navegador manualmente cuando termines.');

    // Espera indefinida para que el navegador no se cierre automáticamente
    await new Promise(() => {});
  } catch (err) {
    console.error('Ocurrió un error:', err);
  }
  // finally {
  //   await driver.quit();
  // }
})();