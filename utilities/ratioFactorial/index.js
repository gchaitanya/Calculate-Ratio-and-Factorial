const ratiotwonumber = require("../ratio/index");
const factorialofnumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratiotwonumber(num1, num2);
  const factorial = factorialofnumber(num3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
