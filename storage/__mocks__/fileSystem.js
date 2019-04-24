let dataBase = {
  usersDb: [],
  ordersDb: []
};

writeDataToDb = jest.fn();

readDb = function(){
    return dataBase;
}

// console.log(dataBase.usersDb);

module.exports = { writeDataToDb, dataBase, readDb};


