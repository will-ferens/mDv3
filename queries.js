const database = require("./database-connection");

module.exports = {
    list(){
        return database('games')
            .select()
    },
    read(id){
        return database('games')
        .select()
        .where('id', id)
        .first()
    },
    create(game){
        return database('games')
            .insert(game)
            .returning('*')
            .then(record => record[0])
    },
    update(id, game){
        return database('games')
            .update(game)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('games')
            .delete()
            .where('id', id)
    }
}
