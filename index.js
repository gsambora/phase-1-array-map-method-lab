const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function splitWords(string) {
  //console.log(string.split(" "));
  return string.split(" ");
}

function putTogether(array) {
  let newString = array[0];
  let i = 1;
  while (i < array.length) {
    newString = newString + " " + array[i];
    i++;
  }

  return newString
}

function titleCased(){ 
  return tutorials.map((tutName) => {
  return putTogether( splitWords(tutName).map((noCapWord) => noCapWord = (noCapWord[0]).toUpperCase()+noCapWord.slice(1)))

})
}

titleCased()
