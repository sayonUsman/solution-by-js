const isPalindrome = (text) => {
  const punctuation = /[\.,?!:;"'’/-]/g;
  let newText = text.replace(punctuation, "");
  newText = newText.split(" ").join("");
  newText = newText.toLowerCase();
  const reverseText = newText.split("").reverse().join("");

  if (newText === reverseText) {
    console.log("true");
  } else {
    console.log("false");
  }
};

isPalindrome("A man, a plan, a canal: Panama");
