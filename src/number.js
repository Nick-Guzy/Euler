// Triangle.prototype.checkType = function() {
//   return "not a triangle";
// };

// Triangle.prototype.checkType = function() {
//   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return "not a triangle";
//   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//     return "scalene triangle";
//   }  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
//       return "isosceles triangle";
//     }
// };

export default function NaturalNumber(number1, maxLimit) {
    this.number1 = number1
    this.maxLimit = maxLimit

}

NaturalNumber.prototype.notMultipleOf3Or5 = function(num){
    if (num % 3 === 0 || num % 5 === 0)
    {
        return true
    }
    else {
        return "not a multiple of 3 or 5"
    }
}