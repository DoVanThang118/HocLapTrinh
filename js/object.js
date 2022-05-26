var obj = {
    name: "nguuyen van an",
    age: 18,
    tel: ["1234345","3445565"],
    girlFriend:{
      name:"vu thi ngoc anh",
      age:18,
      eat: function () {
          console.log("eat...");
      }
    },
    run: function () {
        console.log(this.name+" running...");
    }
}
console.log(obj.name);
obj.run();
obj.name = "do van thang";
obj.run();
obj.girlFriend.eat();
// obj.ade  khac  obj.girlFriend.age
console.log(obj.tel[0]);


var sinhVien = {
    name: "asd",
    age: 20,
    address: "8 , la , us",
    tel: 1234321,
    myClass:{
        className: "T2323D",
        number: "P-123",
    },
    group:{
        groupName: "ae the best",
        listMember:[
            {
                name:"rgh",
                age:32
            },
            {
                name:"dcv",
                age:23
            },
            {
                name:"jyu",
                age:19
            }
        ]
    }
}
console.log(sinhVien.group.listMember[0].age);

console.log(" danh sach thanh vien:");
for (var i=0;i < sinhVien.group.listMember.length;i++){
    console.log(sinhVien.group.listMember[i].name);
}
