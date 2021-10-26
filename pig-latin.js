const args = process.argv.slice(2);

const pigLatin = function (args) {
  let sentense = "";
  for (let i = 0; i < args.length; i++) {
    let slicedLetters = args[i].slice(1);
    let Concat = slicedLetters + args[i][0] + "ay" + " ";
    sentense += Concat + "";
  }
  console.log(sentense);
};

pigLatin(args);
