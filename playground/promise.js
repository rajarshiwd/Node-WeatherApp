
var sum = (a,b)=>{
  return new Promise((resolve,reject)=>{

    if(typeof a==='number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('Enter only numbers ');
    }

  });
}

sum(3,5).then((res)=>{
  console.log(res);
},(error)=>{

  console.log(error);

});
