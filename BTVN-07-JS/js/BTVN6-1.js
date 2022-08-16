// Dùng charAt in ra ký tự "y" trong chuỗi sau:
// Phương thức string.charAt() có chức năng tìm kiếm kí tự ở một vị trí nào đó trong chuỗi, vị trí tìm kiếm đó sẽ do người dùng xác định.
let greeting = "Hello. My name is John";
console.log(greeting.charAt(8));

// Dùng slice in ra chuỗi mới với giá trị "is upon us" từ chuỗi sau:
// Hàm slice có chức năng trích xuất một số phần tử của mảng, vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số truyền vào hàm. 
let str1 = "the morning is upon us.";
console.log(str1.slice(12, 23));

//Dùng concat in ra chuỗi mới với giá trị "Hello World" từ các chuỗi sau:
//Hàm concat sẽ không thay đổi mảng hiện tại, nhưng nó sẽ trả về một mảng mới sẽ bao gồm giá trị của các mảng được truyền vào. Mảng mới có tổng số phần tử bằng với tổng số tất cả các phần tử của các mảng cộng lại.
let str2 = "Hello";
let str3 = "World";
console.log(str2.concat(" ", str3));
