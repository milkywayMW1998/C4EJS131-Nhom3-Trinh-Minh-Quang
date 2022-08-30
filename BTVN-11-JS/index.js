// cú pháp 


//DOM theo id , class ,tagName
//+ ID  : getElementById thì lấy 1 phần tử duy nhất
   let domId = document.getElementById('dom-identity');
   console.log(domId);

//+ Class : getElementsByClassName thì lấy một list class cùng tên
   let domClass = document.getElementsByClassName('dom-class');
   console.log(domClass);

//+ tagName : getElementsByTagName thì lây ra các tag name cùng loại
   let domTagName = document.getElementsByTagName('p');
   console.log(domTagName);

//DOM querySelector , querySelectorAll
//+ querySelector : truy vấn html css chỉ lấy phần tử đầu tiên 
    let domQuerySelector = document.querySelector('p #dom-identity');
    console.log(domQuerySelector);

//+ querySelectorAll : truy vấn html css lấy toàn bộ phần tử có class hoặc id  hoặc tagName  , output là 1 list
    let domQuerySelectorAll = document.querySelectorAll('p .dom-identity');
    console.log(domQuerySelectorAll);

//+ style
let domStyle = document.querySelector('p.dom-class');
//Cách viết 1 : domStyle.style = "background-color: green";
//Cách viết 2 : domStyle.style.color = "#FFFF";


let domAttribute = document.querySelectorAll('p .att');
console.log(domAttribute.domAttribute);

//+innerHTML
let domInnerHTML = document.getElementById('dom-class');
domInnerHTML.innerHTML = "Three child";


//+innerText
let domInnerText = document.getElementById('dom-class');
domInnerText.innerText = "Three child";

//+createElement
let createElement = document.createElement('p');
createElement.innerHTML = "Three child";



//+createElement
let domInnerText = document.removeChild('p .dom-class');
domInnerText.innerText = "Three child";