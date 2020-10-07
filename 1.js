function squareDigits(num){
  let r = '';
  let s = num.toString();
  let a = s.split('');
  for (let i = 0; i < a.length; i++) {

    let n = +a[i];
    n = n*n;
    n = n.toString();
    r += n; 
  }
  return +r;
}

console.log(squareDigits(9119)); 