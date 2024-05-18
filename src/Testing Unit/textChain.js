function highCapter(textChain) {
    if (!textChain) return "";
    const words = textChain.toLowerCase().split(' ');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }
  

  const originChain = "testing is needed to verify code";
  const highCapVer = highCapter(originChain);
  console.log(originChain); 
  console.log(highCapVer); 
  