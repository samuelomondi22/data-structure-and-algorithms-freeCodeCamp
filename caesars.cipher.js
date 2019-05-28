//
function rot13(str){
    for(let i = 0;i<str.length;i++){
        console.log(str[i].charCodeAt())
    }
}
rot13("A")//> 65 (number of A as interprated by the computer)
//http://www.asciitable.com/ 

//
function rot13(str){
    for(let i = 0;i<str.length;i++){
    var asciiNum = str[i].charCodeAt();
    }
}
rot13("A")

//once we move letter 13 places, we move it to solved
function rot13(str){
    var solved = "";
    for(let i = 0;i<str.length;i++){
    var asciiNum = str[i].charCodeAt();
    }
}
rot13("A")//what we need to move 13 steps to right(or left)

//
function rot13(str){
    var solved = "";
    for(let i = 0;i<str.length;i++){
    var asciiNum = str[i].charCodeAt();
    if(asciiNum >=65 && asciiNum <=90){
        solved += String.fromCharCode(asciiNum + 13)
    }
    }
    return solved;
}
rot13("A")//>"N" why?? count 13 steps from a ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//anything you put after "N" goes beyond 90
//charcode take the letter and gives you the ascii code
//charcodeat does opposite of charcode
function rot13(str){
    var solved = "";
    for(let i = 0;i<str.length;i++){
    var asciiNum = str[i].charCodeAt();
    if(asciiNum >=65 && asciiNum <=77){
        solved += String.fromCharCode(asciiNum + 13)
    }else if(asciiNum >=78 && asciiNum <=90){
        solved += String.fromCharCode(asciiNum - 13)//goes to left side instead of usual right counting 
    }else{ //to pass it on even if its not alphabet(btn 65 - 90) also provides the spaces
        solved += str[i]
    }
    }
    return solved;
}
rot13("SERR PBQR PNZC")
