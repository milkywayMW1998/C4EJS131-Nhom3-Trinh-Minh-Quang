const params= 10;

function numberOneTriangle(params) {
    for (i = 1; i <= params; i++) {
        let str = "";
        str= str.concat("*");
        console.log(str);
    }
    
}

numberOneTriangle(params);