module.exports.add = function(n) {
    let delimeter = "";
    if (n.length < 2)
    //empty string return 0 or single number return the number
        return n == "" ? 0 : Number(n);
    else {
        //check if the delimeter is given
        if (n.charAt(0) == "/") {
            delimeter = n.charAt(2);
            //creat the string without the delimeter
            n = n.substring(3)
        }
        let reg = new RegExp("\n|,|;");
        if (delimeter.length > 0) {
            //if the delimeter is given add it to the regExp
            reg = new RegExp("\n|,|;|" + delimeter);
        }
        //split the array using regular expression
        n = n.split(reg);
        let arr = [];
        //convert each entry from string to number
        n.forEach((element) => {
            arr.push(Number(element));
        });
        //check and filter out negative numbers
        let nega = arr.filter((element) => {
                if (element < 0)
                    return element;
            })
            //if there is a negative number throw an exception
        if (nega.length > 0) {
            return "negatives not allowed: " + nega.join(",");
        } else {
            return arr.reduce((a, b) => {
                //if the number is greater than 999 avoid it
                if (b > 999)
                    b = 0;
                return a + b;
            })
        }
    }
}