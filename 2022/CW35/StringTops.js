function tops(msg) {
  console.log("Starting tops...");
  getNextAt = () => 4 * currUp + 1;

  let currUp, nextAt;
  let tops = "";
  if (msg.length < 2) {
    try {
      return msg[1];
    } catch {
      return "";
    }
  } else {
    currUp = 1;
    nextAt = getNextAt();
  }

  while (nextAt < msg.length) {
    tops = tops.concat(nextAt);
    currUp++;
    nextAt = getNextAt();
  }

  return tops;
}

console.log(tops("abcdefghijklmnopqrstuvwxyz12345"));
