const {selectAll, insertOne, updateOne} = require ('../config/orm')

const getBurgers = () => {
    let results = selectAll() 
    return results
}

const insertBurger = (burger) => {
    let result = insertOne(burger)
   return result;
    
}

const updateBurger = (truefalse, burger) => { 
   let result = updateOne(truefalse, burger);
   return result;
}


module.exports = {
    getBurgers,
    insertBurger,
    updateBurger
}

// selectAll,
// insertOne,
// updateOne


// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.