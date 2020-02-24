module.exports = function toReadable(number) {
    let a = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
    if (number < 21) {
        return a[number];
    } else if (number < 100 && String(number)[1] !== "0") {
        switch (String(number)[0]) {
            case "2":
                return "twenty " + a[String(number)[1]];
            case "3":
                return "thirty " + a[String(number)[1]];
            case "4":
                return "forty " + a[String(number)[1]];
            case "5":
                return "fifty " + a[String(number)[1]];
            case "6":
                return "sixty " + a[String(number)[1]];
            case "7":
                return "seventy " + a[String(number)[1]];
            case "8":
                return "eighty " + a[String(number)[1]];
            case "9":
                return "ninety " + a[String(number)[1]];
        }
    } else if (number < 100) {
        return a[number];
    } else if (String(number).slice(1) == "00") {
        return a[String(number)[0]] + " hundred";
    } else if (Number(String(number).slice(1)) < 20) {
        return (
            a[String(number)[0]] +
            " hundred " +
            a[Number(String(number).slice(1))]
        );
    } else if (String(number)[2] == "0") {
        return a[String(number)[0]] + " hundred " + a[String(number).slice(1)];
    } else {
        return (
            a[String(number)[0]] +
            " hundred " +
            a[String(number)[1] + "0"] +
            " " +
            a[String(number)[2]]
        );
    }
};
