const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");
console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((response) => {
    console.log(response.rainbow, "creada");
  })
  .catch((err) => {
    console.log(err);
  });
