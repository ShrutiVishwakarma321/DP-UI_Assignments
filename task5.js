function findLongestString(strings) {
    return strings.reduce((longest, str) => (str.length > longest.length ? str : longest), '');
  }
 
let strings =  "rygjkjlkgdtkj";