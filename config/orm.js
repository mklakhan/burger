const connection = require("./connection")

const selectAll = async () => {
    let myquery = 'SELECT * FROM burgers'
    const tableData = []
    const [rows,field] = await connection.promise().query(myquery)

    rows.forEach(item => {
        return tableData.push({
            id: item.id,
            burger_name: item.burger_name,
            devoured:item.devoured
        })
    })
    return tableData
}

const insertOne = (burger) => {
    let query = `INSERT INTO burgers (burger_name,devoured) VALUES ('${burger}',false)`
      connection.query(query, (err, result, fields) => {
        return console.log("Data Entered");
    })
}
   
const updateOne = (burger) => {
    let query = `UPDATE burgers SET devoured = 'true' WHERE burger_name = ${burger}`
    connection.query(query, (err, result, fields) => {
        return console.log("Data Entered");
    })
}

module.exports = {
selectAll,
insertOne,
updateOne
}
