//const f1 = () => {
 // console.log("f1");
//};
//const f2 = () => {
  //console.log("f2");
//};
//const f3 = () => {
  //console.log("f3");
//};

//function main() {
  //console.log("main");
  //setTimeout(f1,0);
  //setTimeout(f2,0);
  //setTimeout(f1, 1000);
  //setImmediate(f2);
  //Process.nextTicket(f3);
  //console.log("end");
//}
//main();
const f1 = () => {
  console.log("f1");
};
const f2 = () => {
  console.log("f2");
};
const f3 = () => {
  console.log("f3");
};

function main() {
  console.log("main");
  setTimeout(f1, 1000);
  setTimeout(f2, 700);
  process.nextTick(f3);   // ✅ correct API
  console.log("end");
}

main();

function main(){
  console.log("main");
  setTimeout(f1, 50);
  setTimeout(f2, 30);
  new Promise((resolve, reject) => {
    
  })
}