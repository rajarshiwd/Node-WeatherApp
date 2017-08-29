console.log('the app start running'); // 1st

setTimeout(()=>{
  console.log('in the middle');  // 4th
},2000);

setTimeout(()=>{
  console.log('about to run '); // 3rd
},0);

console.log('stop running '); // 2nd
