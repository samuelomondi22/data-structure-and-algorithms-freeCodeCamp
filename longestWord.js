function findLongestWord(str){
    return str.split(' ').sort((a,b )=> b.length - a.length)[0]
}
console.log(findLongestWord('i am the fresh prince of bel air'))