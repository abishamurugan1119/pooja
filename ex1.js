let a=3;
let name="abisha";
let last="raj";
console.log(a);
console.log(typeof(a));
console.log(name);
console.log(typeof(name));
const otp =10+Math.floor(1001);
console.log(otp);
console.log(name +" "+ last);

 let c=10;
 let b='10';
 console.log(c+b);
  let d='abisha';
  console.log(d[2]);
  console.log(d.length);
  console.log(d.length-1);
    console.log(a[8]);
    console.log(`result is:${a}`);
    
    n=11;
    if(n%2==0){
      console.log("even");
  }
    else{
      console.log("odd");
    }
    let num=4;
    let result=(num%2==0)?"even":"odd";
    console.log(result);


    var dob = new Date("2001-06-10");
var today = new Date();

var age = today.getFullYear() - dob.getFullYear();

console.log("Age:", age);

/*let h="mam";
let input =prompt("Enter the  values:");
var arr=input.split();
arr.reverse();*/
const square=(a=5,b=8)=>{
  return a+b
}
console.log(square(b=2));

const names=(fristname,secondname)=>{
  return fristname+secondname
}
console.log(names("T. ","Absiha"));

function checkSeason(month){

    if(month === "December" || month === "January" || month === "February"){
        return "Winter";
    }
    else if(month === "March" || month === "April" || month === "May"){
        return "Summer";
    }
    else if(month === "June" || month === "July" || month === "August"){
        return "Spring";
    }
    else if(month === "September" || month === "Octobar" || month === "November"){
        return "Autumn";
    }
    else{
        return "Invalid Month";
    }
}

console.log(checkSeason("July"));
console.log(checkSeason("March"));
console.log(checkSeason("December"));






