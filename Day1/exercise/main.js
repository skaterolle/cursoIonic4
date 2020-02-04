var goldbachsConjecture = require('./goldbachsConjecture');

var n = 90;

var gc = goldbachsConjecture.getGoldbachsConjecture(n);

console.log('Goldbach\'s conjecture for', n, 'is', gc);