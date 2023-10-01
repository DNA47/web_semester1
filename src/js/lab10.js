//задача1
function convertSpeed(n,measureType){
  if (Number(n)==n){
      if (measureType==='toMS'){
          return n/3.6;
        }
      else if (measureType==='toKMH'){
          return n*3.6;
        }
  }
  else{
      return "Неправильный ввод.Повторите попытку"
    }
}
console.log(convertSpeed(36,'toMS'));
console.log(convertSpeed(36,'toKMH'));
console.log(convertSpeed('Печенька','toKMH'));

//задача2
function absValue(n){
  if (n>=0){
    return n
  }
  return -n
}
console.log(absValue(47))

//задача3
let student = {
group: 201,
last_name: "Иванов",
first_name: "Иван"
};
console.log(Object.keys(student));
console.log(`Студент ${Object.values(student)[2]} ${Object.values(student)[1]} учится в ${Object.values(student)[0]} группе`)



//задача 4
function randomNumber(min,max){
  return Math.floor(Math.random()*max+min);
}
console.log(randomNumber(-10,10));

//задача 5
function sampleArray(a,n){
  let pack=a,newPack=[];
  for (let i=0;i<n;i++){
    randomValue=Math.floor(Math.random()*(pack.length))
    newPack.push(pack[randomValue]);
    pack.splice(randomValue,1)
  }
  return newPack;
  
}
console.log(sampleArray([1,2,3,4],3));