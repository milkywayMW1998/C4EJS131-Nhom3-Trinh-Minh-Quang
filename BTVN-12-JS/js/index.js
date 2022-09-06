//Add
function addItem(){
    let bookName = document.getElementById("book-name");
    if (bookName.value === "") {
      alert("Vui lòng nhập tên sách");
    } else {
      let ul = document.querySelector("ul");
      let item = document.createElement("li");
      item.innerHTML = `
                        <span class="btnEdit">Update</span>
                        <span class="btnDelete" onClick="deleteItem()">Delete</span>
                      `;
      item.style.display="flex";
      item.innerText = bookName.value;
      ul.appendChild(item);
      item.appendChild(divAction);
      createDeleteBtn(item);
    }
}

//Update
function updateItem(){
    
}

//Delete
function deleteItem(){
   let deleteBtn = document.getElementsByClassName("btnDelete");
  for (i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function () {
      let div = this.parentElement.remove();
    };
  }
}


//Search
window.addEventListener("load", () => {
    // (Bước 1) GET HTML ELEMENTS
    var filter = document.getElementById("the-filter"), // search box
        list = document.querySelectorAll("#the-list li"); // all list items
        console.log(list);
        // (Bước 2) onkeyup , điều này sẽ được kích hoạt bất cứ khi nào người dùng nhấn một phím trong phần input tìm kiếm.
        filter.onkeyup = () => {
        // (Bước 3) GET value từ input search  (Lấy cụm từ tìm kiếm hiện tại)
        let search = filter.value.toLowerCase();
       
        // (Bước 4) lặp lại tất cả các mục trong danh sách. Ẩn các mục không khớp với cụm từ tìm kiếm bằng cách sử dụng .hide lớp CSS, hiển thị các mục phù hợp bằng cách xóa .hide lớp CSS
        for (let i of list) {
        let item = i.innerHTML.toLowerCase();
          if (item.indexOf(search) == -1) { 
              i.classList.add("hide"); 
          } else { 
              i.classList.remove("hide"); 
          }
        }
    };
});