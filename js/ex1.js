
class Square{
  constructor(side){
    this.side = side;
  }
perimeter(){
  let x = (this.side * 4);
  return x
};
area(){
  let y = (this.side**2);
  return y
};
diagonal(){
  let z = (Math.sqrt(2*(this.side**2)));
  return z
}
describe(){
  return console.log(`Square with ${this.side} has perimeter of ${test.perimeter()},area of ${test.area()}, and diagonal of ${test.diagonal()}`);
}
}

const test = new Square(2);

console.log(test.describe())



