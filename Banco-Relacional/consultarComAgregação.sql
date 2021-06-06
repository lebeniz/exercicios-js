select 
    regiao as 'Região', -- seleciona a região por região
    sum(populacao) as Total-- soma e colocal em total s
from `estados`-- de estado
GROUP BY regiao-- agrupa a soma pela região
order by Total desc-- ordena de forma decrecente

select  
    sum(populacao) as Total
from `estados`