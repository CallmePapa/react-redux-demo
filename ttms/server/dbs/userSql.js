const UserSQL = {
    insert: "insert user(id,name,password,role) value(null,?,?,?)",
    queryAll: "select *from user",
    update: "update user set name=?,password=?,role=?,note=? where id=?",
    delete: "delete from user where id=?",
    queryById: "select * from user where id=?",
    logSql: "select *from user where name = ? and password=?",
    registerSql: "insert into user(id,name,password.role) select null,?,?,0"
    + "from dual where not exists(select name from user where name =?)",
    findName: "select name from user where name =?",
    findUser: "select *from user where name =?"
};
module.exprots=UserSQL;