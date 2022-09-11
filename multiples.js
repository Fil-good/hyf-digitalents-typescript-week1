
const multiples = (maximum) => {
  arr = [];
  for(let i=0; i<maximum;i++) {
      if(i%2 == 0) {
          arr.push(i);
      }
  }
  return arr;
}

console.log(multiples(10));
