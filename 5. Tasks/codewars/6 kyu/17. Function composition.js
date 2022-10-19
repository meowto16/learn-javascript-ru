// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

const compose = (...functions) => arg => functions.reduceRight((res, fn) => fn.call(this, res), arg);