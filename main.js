// www.codewars.com
// KATA 1 7kyu
const getDivisorsCnt = n => {
  let ct = 0;
  if(n==1) return 1;
  if(n%Math.sqrt(n)==0) ct++;
  for(var i=1;i<Math.sqrt(n);i++){
      if(n%i==0){
          ct+=2;
      }
  }
  return ct;
}

console.log(getDivisorsCnt(10));

// KATA 2 6kyu
const duplicateCount = string => (string.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;

console.log(duplicateCount(''));
console.log(duplicateCount('aabbcde'));

// KATA 3 7kyu
const findShort = str =>  Math.min.apply(null, str.split(' ').map(el => el.length))

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


