// import Triangle from '../triangle';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
// });
// test('should correctly determine whether three lengths make a scalene triangle', () => {
//   const scalTriangle = new Triangle(4,5,7)
//   expect(scalTriangle.checkType()).toEqual("scalene triangle");
// });
// test('should correctly determine whether three lengths make an isosceles triangle', () => {
//   const isoscTriangle = new Triangle(5,5,7)
//   expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
// });
// });


import NaturalNumber from '../number';

describe('NaturalNumber', () => {
  test('value of maxLimit is greater than 1000',  () => {
    const maxNumber = new NaturalNumber(3, 2000);
    expect (maxNumber.maxLimit).toEqual(2000);
  });
  test('value of num is not a multiple of 3 or 5',  () => {
    const num = new NaturalNumber();
    expect (num.notMultipleOf3Or5(1)).toEqual(true);
  });
  test('value of maxLimit is less than 1000',  () => {
    const maxNumber = new NaturalNumber(3, 1000);
    expect (maxNumber.maxLimit).toEqual(999);
  });
});





