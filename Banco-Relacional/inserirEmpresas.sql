alter table empresas modify cnpj varchar(10);

insert into empresas (nome, cnpj)
values("Bradesco", 2323544444),
('Vale', 5656785555),
('cielo', 7889566666);

desc empresas; --descreve a tabela, inclusive os tipos
desc prefeitos;

select * from empresas;
select * from cidades;

-- inserindo na tabela que tem relação com as outras duas
insert into empresas_unidades (empresa_id, cidade_id, sede)
values 
    (7, 1, 1), -- 1 é um valor não nulo,informa que a empresa é sede*/
    (7, 2, 0), -- bradesco ta em Niteroi, mas não é sede
    (8, 1, 0), -- vale está em Campinas, mas não é sede 
    (8, 2, 1); -- vale está em Niterói, é sede

    select * from empresas_unidades