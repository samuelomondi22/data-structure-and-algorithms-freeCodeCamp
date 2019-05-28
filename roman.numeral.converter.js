function convertToRoman(num){
    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    var romain = ""
    for(var key in romanToNum){
        //console.log(key) gives romans
        //console.log(values) gives you num
        while (num >= romanToNum[key]) {
            //if num is 3 ,it will see 3 > I and push I in romain,then num -= romanToNum[key] takes the one that has been pushed so now left with 2
            //does it all again, yes 2 > I ,push I , left with 1, checks again, yes 1 >= I pushes
            romain += key;
            num -= romanToNum[key]
        }
    }
    return romain;
}
console.log(convertToRoman(798));