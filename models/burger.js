const {selectAll, insertOne, updateOne} = require ('../config/orm')

const getBurgers = () => {
    let results = selectAll() 
    return results
}

module.export = {getBurgers}

// selectAll,
// insertOne,
// updateOne


// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.