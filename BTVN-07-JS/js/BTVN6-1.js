// - Var : được xác định có phạm vi toàn cục (global) hoặc phạm vi cục bộ/ hàm nếu khai báo trong hàm.
// Phạm vi toàn cục nếu khai báo biến nằm ngoài khai báo một hàm. Nghĩa một biến khi khi báo bên ngoài khối khai báo hàm có thể dùng trong toàn bộ window. Biến được khai báo trong hàm thì chỉ có thể truy cập ở trong khối khai báo của hàm.

// - Let : Let được định phạm vi trong khối mã (Block-scoped)
// Một khối là một đoạn mã được bao bởi cặp dấu mở ngoặc nhọn và đóng ngoặc nhọn { }. Mọi lệnh trong cặp dấu là một khối mã (Block)
// Biến khai báo với let trong khối mã chỉ có thể dùng trong khối mã đó
// - Let có thể được cập nhật nhưng không được khai báo lại
// Giống với khai báo dùng var, biến khai báo với let có thể được cập nhật trong phạm vi tồn tại. Nhưng không giống với var, biến let không thể khai báo lại trong phạm vi tồn tại
// thực tế, dùng let tốt hơn var. Khi dùng let, không bận tâm biến có dùng trùng tên với biến khai báo trước đó ở phạm vi tồn tại khác

// - Const : Biến được khai báo với const chứa giá trị hằng (Giá trị không thể thay đổi trong khi thực hiện). Khai báo const chia sẽ tính tương đồng với khai báo let.
// Khai báo const được định phạm vi theo khối mã (Block-scoped)
// Giống với khai báo let, khai báo biến const chỉ được truy cập trong khối mã biến được khai báo
// Const không thể được cập nhật và khai báo lại
// Không thể cập nhật và khai báo lại nghĩa là giá trị của biên không thể được thay đổi và không thể khai báo biến có trùng tên trong cùng phạm vi tồn tại
// Giống với let, khai báo const được dịch chuyển lên đầu của đoạn mã nhưng không được khởi gán giá trị.


//Giữa var, let, const có thể được tóm lược như sau:
// + Khai báo var được định phạm vi toàn cục (global) hay hàm (function) trong khi let và const được định phạm vi là khối mã (block)
// + Biến var có thể được cập nhật và khai báo lại trong phạm vi tồn tại; biến let có thể được cập nhật nhưng không thể khai báo lại; biến const không thể cập nhật nhưng không thể khai báo lại.
// + Khai báo của var, let, const đều được dịch chuyển lên đầu của phạm vi. Nhưng trong khi biến var được khởi gán giá trị với undefined, biến let và const không được khởi gán giá trị.
// + Trong khi var và let có thể được khai báo không khởi gán giá trị, const phải khởi gán giá trị khi khai báo.


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
