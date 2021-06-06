update estados
set nome = 'Maranhão'--atualiza 
where sigla = 'MA'--aonde a sigla e MA

select nome from estados where sigla = 'MA'

update estados 
set est.nome = 'Paraná',  populacao = 11.32 where sigla = 'PR'--est apelido para a tabela estado
select nome, populacao from estados est where sigla = 'PR'