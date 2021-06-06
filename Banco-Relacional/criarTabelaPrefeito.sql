create table if not exists prefeitos (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,-- um pra não obrigatorio, pq não colocou not null
    primary key (id),
    unique key (cidade_id),-- não aceita duplicação, firmando o conceito de um para um
    foreign key (cidade_id) references cidades (id)
);