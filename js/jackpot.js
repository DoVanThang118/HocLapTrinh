var randomNumbers = []; //mang chua 6 so ngau nhien
var ticketNumbers = []; //mang chua 6 so nhap vao

// tao 6 so ngau nhien tu 0 -> 45
while(randomNumbers.length < 6){
    var r = Math.random();
    r = r *46; //muon co 45 thi phai nhan voi 46
    r = parseInt(r);
    if (!randomNumbers.includes(r)){
        randomNumbers.push(r);
    }
}

// yeu cau nhap 6 so tu 0 -> 45
while (ticketNumbers.length < 6){
    var n = prompt(" nhap so tu 0 -> 45: ");
    n = parseInt(n);
    if (!isNaN(n) && !ticketNumbers.includes(n) && n >=0 && n <=45){
        ticketNumbers.push(n);
    }
}

// so sanh
var dem = 0;
for (var i=0;i<randomNumbers.length;i++){
    if (ticketNumbers.includes(randomNumbers[i])){
        dem++;
    }
}
setTimeout(function () {
    switch (dem) {
        case 6: alert("chuc mung ban trung jackpot 100 ty"); break;
        case 5: alert("chuc mung ban trung 10 trieu"); break;
        case 4: alert("chuc mung ban trung 300 nghin"); break;
        case 3: alert("chuc mung ban trung 50 nghin"); break;
        default: alert("chuc may man lan sau");
    }
},3000) // thuc hien cong viec sau 1 khoang thoi gian ( 3000 ms)

// setInterval(function () {
//     switch (dem) {
//         case 6: alert("chuc mung ban trung jackpot 100 ty"); break;
//         case 5: alert("chuc mung ban trung 10 trieu"); break;
//         case 4: alert("chuc mung ban trung 300 nghin"); break;
//         case 3: alert("chuc mung ban trung 50 nghin"); break;
//         default: alert("chuc may man lan sau");
//     }
// },1000) //sau 1 khoang thoi gian lai lam lai 1 lan vo han lan

// var x = 0;
// var xyz = setInterval(function () {
//     switch (dem) {
//         case 6: alert("chuc mung ban trung jackpot 100 ty"); break;
//         case 5: alert("chuc mung ban trung 10 trieu"); break;
//         case 4: alert("chuc mung ban trung 300 nghin"); break;
//         case 3: alert("chuc mung ban trung 50 nghin"); break;
//         default: alert("chuc may man lan sau");
//     }
//     x++;
//     if (x == 3){
//         clearInterval(xyz);
//     }
// },1000) //sau 1 khoang thoi gian lai lam lai 1 lan sau x lan thi dung lai