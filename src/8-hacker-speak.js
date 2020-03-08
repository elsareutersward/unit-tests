export const hackerSpeak = (words) => {
  let result = words.replace(/a/gi, "4");
  result = result.replace(/e/gi, "3")
  result = result.replace(/i/gi, "1")
  result = result.replace(/o/gi, "0")
  result = result.replace(/s/gi, "5")

  return result
}
