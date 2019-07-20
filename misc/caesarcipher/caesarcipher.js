export default function caesarCipher(string, shift) {
  if(!string || !shift) return string;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newstring = "";
  for(let i of string) {
    newstring += alphabet[(alphabet.indexOf(i) + shift + 26) % 26]
  }
  return newstring;
}