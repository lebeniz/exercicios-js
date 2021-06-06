create table if not exists cidades(
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    estado_id int unsigned not null,-- toda cidade estará vinculada a esse `estados`
    area decimal(10.2),-- are em km^2
    primary key (id),
    foreign key (estado_id) references estados (id) -- chave estrangeira, referennciada pela coluna primaria da tabela estados
);

create table if not exists teste(--cria um tabela com apenas uma linha e a chave primaria
    id int unsigned not null auto_increment primary key
);

drop table if  exists teste

-- drop table  exists teste: sem o if, geraria erro, pois precisa da condição para saber se a tabela existe