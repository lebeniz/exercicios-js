const _ = require('lodash')// não precisa colocar o ./ porque ele vai carregar o aquivo index que tem os comando completo de lodash
setInterval(() => console.log(_.random(50, 60)), 2000)