var chiPhi = 0;
var loiNhuan = 0;

for (var i=0;i<30;i++){
    // tao random 27 so
    var ds = [];
    for (var j = 0;j<27;j++){
        var r = Math.random();
        r = r *100;
        r = parseInt(r);
        ds.push(r);
    }
    //chon so va dat cuoc
    do{
        var luckyNumber;
        luckyNumber = prompt("ngay "+(i+1)+" nhap mot so 0 -> 99:");
        luckyNumber = parseInt(luckyNumber);
    }while (isNaN(luckyNumber) || luckyNumber <= 0 || luckyNumber >99);
    var money;
    do {
        money = prompt(" nhap so tien cuoc:");
        money = parseInt(money);
    }while (isNaN(money) || money <= 0 || money%1000 != 0);
    //check thuong
    var dem = 0;
    for (var k = 0;k<ds;k++){
        if (ds[k] == luckyNumber){
            dem++;

    }
    console.log("hom nay trung "+dem+" giai thuong");
    // chi phi dau tu
    chiPhi += money;
    loiNhuan +=(dem* (80/23) * money)
}
//tong loi nhuan
console.log("chi phi: "+chiPhi+" doanh thu "+loiNhuan+" loi nhuan "+(loiNhuan-chiPhi));