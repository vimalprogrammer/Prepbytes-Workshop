let a=9,b=7;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

for(let i=0;i<10;i++){
    console.log(i);
}

document.getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    document.getElementsByTagName("h1")[0].style.color = "red";
  });
