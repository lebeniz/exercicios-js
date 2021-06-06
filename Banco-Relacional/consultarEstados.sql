Consultar tabela
select * from `estados`  /* seleciona (*) = todos as colunas,  (from `estados`) = da tabela estado */

select nome, sigla from estados  

select Sigla, nome from estados  
select Sigla, nome as 'Nome do Estado' from estados  where regiao = 'Sul'
select Sigla, nome as 'Nome do Estado' from estados  where regiao = 'sul'
select Sigla, nome as 'Nome do Estado' from estados  where populacao >= 10

select Sigla, nome as 'Nome do Estado' from estados  where populacao >= 10
order by populacao /* ordem crecente pela populacao*/

select Sigla, populacao, nome as 'Nome do Estado' from estados  where populacao >= 10
order by populacao desc/* ordem decrecente*/