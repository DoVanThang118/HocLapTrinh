var x;
x = 10;
var y;
y = "hello world!";

x = "T2203E";
y = 20;
//lam mot loat cac thao tac
console.log(x);
console.log(y);
var z = x + y;
var t = y + x;
y = y + 10;

console.log(z);
console.log(t);
console.log(y);

console.log("y = "+y);
// mang
for (var i=0;i<20;i++){
    console.log("i = "+i);
}
var arr = [];
arr[0] = 20;
arr[1] = "hello";
arr[2] = true;

arr[3] = [1,2,3,4];
arr[3][4] = [5,3,1];

var arr2 = [];

for (var i = 0;i<20;i++){
    arr2[i] = i*i+1;
}
arr2[arr2.length] = 1001;

for (var i=0;i<10;i++){
    arr2.push(1001*i+1001);
}
// ham
tinhTong("xin chao",8);
function tinhTong(a,b) {
    //return a+b;
    console.log(a+b);
}
tinhTong(5,7);


var giaiThua = function (n) {
    var gt = 1;
    for (var i=1;i<=n;i++){
        gt +=i;
    }
    return gt;
    //console.log("GT: "+gt);
}
var g = giaiThua(7) + 100;

var nhapMang = (n)=>{
    var ary = [];
    for(var i=0;i<n;i++){
        ary.push(i*i+n);
    }
    return ary;
}
var arr3 = nhapMang(10);

//alert("yeu cau phai tren 18+"); //void //ham thong diep
//var k = confirm("ban chac chan truyu cap tiep ?"); //boolean
//console.log("k = "+k);
var year = prompt("ban bao nhieu tuoi ?"); // string
//console.log(year);
year = parseInt(year); //chuyen string => number Int
console.log("sau khi them 2 tuoi: "+(year+2));

// nguyen ly parseInt
// 15->15
// 15asd -> 15
// a15 -> NaN( not a number)

var p = "abc15";
var q = "15abc";
p = parseInt(p); //NaN
q = parseInt(q); //15
// isNaN -> true/false (x== NaN)
console.log("kiem tr NaN cua p:"+ isNaN(p));
console.log("kiem tra NaN cua q:"+ isNaN(q));
//sinh mot so ngau nhien
var r = Math.random();//sinh ra so ngau nhien tu 0< r <1
r = r *100; //0<r<100
r = parseInt(r);

do{
    var sn;
    sn = prompt("nhap mot so nguyen duong");
    sn = parseInt(sn);
}while (isNaN(sn) || sn <= 0 || r != sn);




