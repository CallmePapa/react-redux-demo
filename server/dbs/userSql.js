/**
 * Created by weiqiujuan on 17-8-18.
 */
let userSql= {

    insert:'insert edit(id,title,edit) values(null,?,?)',
    update:'update edit set id=?,title=?,edit=?',
    delete:'delete from edit where id=?',
    queryById:'select *from edit where id=?',

};

module.exports=userSql;