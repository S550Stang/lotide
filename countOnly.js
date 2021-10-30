const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const obj = { Jason: true, Karima: true, Fang: true, Agouhanna: false };
const resultobj = {
  Jason: 1,
  Fang: 2,
  Karima: undefined,
};
// const testObj = {};
// for (let i of firstNames) {
//   // =>  i= Fang
//   if (i === obj[i])  Jason ==== True
//     //=> Fang === obj[Fang]
//     testObj[i] = 0;
//   }
//   console.log(testObj);
// }
function countOnly(firstNames, itemsToCount) {
  let testObj = {};
  for (let i of firstNames) {
    if (obj[i]) {
      ///=>obj[karl]
      testObj[i] = 0;
    }
  }
  for (const i of firstNames) {
    if (i in testObj) {
      testObj[i]++;
    } else if (obj[i]) {
    }
  }
  console.log(testObj);
}
countOnly(firstNames, obj);
// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// })
