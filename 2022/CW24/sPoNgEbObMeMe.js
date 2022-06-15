function spongeMeme(sentence) {
  sentarr = sentence.split("");
  for (let i = 0; i < sentence.length; i++) {
    if (i == 0 || i % 2 == 0) {
      sentarr[i] = sentarr[i].toUpperCase();
      console.log(sentarr[i].toUpperCase());
    } else {
      sentarr[i] = sentarr[i].toLowerCase();
    }
  }
  return sentarr.join("");
}
