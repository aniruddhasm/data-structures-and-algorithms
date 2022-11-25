
urlify = (url, trueLength) => {
  spaceCount = 0;
  for (let i = 0; i < trueLength; i++) {
    spaceCount += url[i] === ' ' ? 1 : 0;
  }

  index = trueLength + (spaceCount * 2);
  for (let i = trueLength - 1; i >= 0; i--) {
    if (url[i] === ' ') {
      url[index - 1] = '0';
      url[index - 2] = '2';
      url[index - 3] = '%';
      index -= 3
    } else {
      url[index - 1] = url[i]
      index--
    }
  }
  return url.join('');
}


const url = "h e";
console.log(urlify(url.split(''), url.length))
