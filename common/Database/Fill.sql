insert into companies( name, email, password )
values( 'Example', 'example@example.com', '04b4193983af28cd2e6f875707fd85f3dc76cd8d;x40q4' );

insert into infoblocks( name, description, companyid, number )
values
		( 'Приветствие', 'Какая-то очень важная и нужная информация по приветствию в замечательной компании Example', 1, 1 ),
		( 'Как не умереть', 'Ну, тут я даже не знаю, что написать, потому что умереть можно при любом обстоятельстве', 1, 2 ),
		( 'Как уволиться из нашей комании', 'Всё просто - пошли кого-нибудь из начальства куда по дальше, громко и с выражением (но без оружия, пожалуйста)', 1, 3 ),
		( 'Как заварить кофе?', 'Я сам не знаю, расскажите мне кто-нибудь', 1, 4 );

insert into workers( name, companyid, key )
values
		( 'Биба', 1, '2465' ),
		( 'Боба', 1, '1930' ),
		( 'Жожа', 1, '8594' ),
		( 'Жопный Зубастик', 1, '1535' );

insert into blockstoworkers( infoblockid, workerid )
values
		( 1, 1 ), ( 1, 2 ), ( 1, 3 ), ( 1, 4 ),
		( 2, 1 ), ( 2, 2 ), ( 2, 3 ), ( 2, 4 ),
		( 3, 1 ), ( 3, 2 ), ( 3, 3 ), ( 3, 4 ),
		( 4, 1 ), ( 4, 2 ), ( 4, 3 ), ( 4, 4 );
