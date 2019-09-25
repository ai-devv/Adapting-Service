class Questions{
  constructor( modules ){
    this.modules = modules;
  }

  async isCompanyQuestion( companyId, questionId ){
    let data;

    data = await this.modules.db.query(
      "select ib.companyid = $1 as iscompanyquestion " +
      "from questions as q, infoblocks as ib " +
      "where" +
      "   q.infoblockid = ib.id and" +
      "   q.id = $2",
      [ companyId, questionId ]
    );

    if( data.rowCount === 0 ) return {
      isSuccess : false,
      code : 0,
      message : "Question doesn't exists"
    };
    else if( !data.iscompanyquestion ) return {
      isSuccess : false,
      code : 1,
      message : "Question doesn't belong to the company"
    };
  }

  async add( companyId, infoBlockId, name, description, type, time ){
    let data, number, id;

    data = await this.modules.infoBlocks.isCompanyInfoBlock( companyId, infoBlockId );

    if( !data.isSuccess ) return data;

    number = await this.modules.db.query(
      "select number + 1 as number " +
      "from questions " +
      "where infoblockid = $1 " +
      "order by number desc " +
      "limit 1",
      [ infoBlockId ]
    );

    if( number.rowCount === 1 ) number = number.rows[0].number;
    else number = 1;

    id = ( await this.modules.db.query(
      "insert into questions( infoblockid, name, description, type, time, number ) " +
      "values( $1, $2, $3, $4, $5, $6 ) " +
      "returning id",
      [ infoBlockId, name, description, type, time, number ]
    ) ).rows[0].id;

    return {
      isSuccess : true,
      id
    };
  }
}

module.exports = Questions;
