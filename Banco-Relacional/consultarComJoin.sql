select e.nome as Estado, c.nome as Cidade, e.regiao as 'Região' from estados e, cidades c
where e.id = c.estado_id;

select
c.nome as Cidade,
e.nome as Estado,
e.regiao as 'Região'
from estados e
inner join cidades c on e.id = c.estado_id/* faça um junção do tipo inner atravez das duas colunas e.id = c.estado_id*/