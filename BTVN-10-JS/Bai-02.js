// B1: Use for...in loop and recursive to get all key of object


const user = {
    name: "hieu",
    age: 18,
    appearence: {
      hairColor: "black",
      skinColor: "yeallow",
      height: 1700,
      weight: 68,
    },
  };
  
  function recursive(target) {
    for (const key in target) {
      if (typeof target[key] === 'object') {
        recursive(target[key]);
      } else {
        console.log(key, target[key]);
      }
    }
  }
  
  recursive(user);