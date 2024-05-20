function highCapter(textChain) {
  if (!textChain) return "";

  const words = textChain.toLowerCase().split(' ');
  const highCapVer = words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  return highCapVer;
}

module.exports = highCapter;