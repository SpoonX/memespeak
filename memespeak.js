module.exports = str => str.split('').map((c, i) => i % 2 ? c.toUpperCase() : c.toLowerCase()).join('');
