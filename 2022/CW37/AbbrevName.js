function abbrevName(name) {
  // code away
  words = name.split(" ");
  i1 = words[0].slice(0, 1).toUpperCase();
  console.log(i1);
  i2 = words[1].slice(0, 1).toUpperCase();
  return `${i1}.${i2}`;
}
