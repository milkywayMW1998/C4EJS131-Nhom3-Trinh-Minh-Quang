// Bài 1: Tạo 2 biến a, b có giá trị lần lượt là 10, 15. Kiểm tra nếu a lớn hơn b.
let a = 10;
let b = 15;

if (a > b) {
  console.log("a =", a, "lớn hơn b =", b);
} else {
  if (a < b) {
    console.log("a =", a, "nhỏ hơn b =", b);
  } else console.log("a = b =", a);
}

// Bài 2: Kiểm tra a có giá trị bằng "10" hay không và in ra kết quả.
if (a == "10") {
  console.log("a có giá trị bằng 10");
} else console.log("a không có giá trị bằng 10");

// B3: Kiểm tra a có giá trị bằng "10" hay không (so sánh cả kiêu dữ liệu) và in ra kết quả.
if (a === "10") {
  console.log("a có giá trị bằng 10");
} else console.log("a không có giá trị bằng 10");

// B4: Cho x = "5" và y = 6, so sánh giá trị x !== y và cho ra kết quả.
let x = "5";
let y = 6;
console.log(x !== y);



//Bài tập ngoài 

//Bài tập 1: 100 lần của căn bậc hai
let i = 100;
let sum = 0;
while (i > 0) {
    sum = Math.sqrt(sum + i--);
}
console.log(sum);

//Bài tập 2: in ra màn hình các số chính phương từ 1 -> 10000
// * số chính phương là các số bằng bình phương 1 số khác .
let result = "";
for (let i = 1; i <= 10000; i++) {
    cp = Math.pow( i, 2);
    if( cp < 10000){
        result += cp + " , "; 
    }
}
console.log(result);
