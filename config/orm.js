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

const insertOne = async (burger) => {
    let query = `INSERT INTO burgers (burger_name,devoured) VALUES ('${burger}',false)`
      const result =  await connection.promise().query(query);
  return result;
}
   
const updateOne = async (val, burger) => {
   let query = `UPDATE burgers SET devoured="${val}" WHERE burger_name='${burger}'`;

     let result = await connection.promise().query(query);
    return result;
}

module.exports = {
selectAll,
insertOne,
updateOne
}
