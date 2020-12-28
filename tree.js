data = [
    {   "name":"ram",
        "age":22,
        "parent":null,
        "class":11
    },


    {   "name":"shyam",
        "age":22,
        "parent":"ram",
        "class":11
    },
    {
        "name":"laxman",
        "age":22,
        "parent":"ram",
        "class":11
    },

    {
        "name":"rahul",
        "age":22,
        "parent":"shyam",
        "class":11
    },
    {   
        "name":"rohan",
        "age":22,
        "parent":"shyam",
        "class":11
    },
    {   
        "name":"akshey",
        "age":22,
        "parent":"laxman",
        "class":11
    },

    {   
        "name":"ayush",
        "age":22,
        "parent":"rohan",
        "class":11
    },
    {   
        "name":"ashi",
        "age":22,
        "parent":"rohan",
        "class":11
    },

    {   
        "name":"akshat",
        "age":22,
        "parent":"ayush",
        "class":11
    }
]
//created index and  dictionary
const idMapping = data.reduce((acc, el, i) => {
    acc[el.name] = i;
    return acc;
  }, {});

//created  tree 
console.log(idMapping)
let root;
data.forEach(el => {
  if (el.parent === null) {
    root = el;
    // console.log(el)
    return;
  }
  const parentEl = data[idMapping[el.parent]];
//   console.log(idMapping[el.name])

  parentEl.children = [(parentEl.children || []), el];
});
console.log(root)