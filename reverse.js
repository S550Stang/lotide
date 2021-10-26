const args = process.argv;

let newArray = args.slice(2);

for (let i = 0; i < newArray.length; i++) {
  let reversed = "";
  let oneTwo = newArray[i];
  for (let j = oneTwo.length - 1; j >= 0; j--) {
    reversed += oneTwo[j];
  }
  console.log(reversed);
}
