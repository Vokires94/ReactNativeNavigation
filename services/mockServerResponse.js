/**
     * Mock form submit request with success/unsuccess result with timeout.
     * Probability of Success can be adjusted by successRate param
     * @namespace
     * @property {array}  data - array with submit data
     * @property {number}  successRate - success rate from 0 to 100
**/
function mockSubmit(data = {}, successRate = 50) {
  const randomValue = getRandomArbitrary(0, 100);
  return new Promise((resolve, reject) => {
    randomValue >= successRate ? setTimeout(() => resolve('MyDrawer'), 3000) : setTimeout(() => reject(new Error("Data save error")), 3000)
  });
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default mockSubmit;