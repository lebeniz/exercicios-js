select e.nome Empresa, c.nome Cidade
from empresas e, cidades c, empresas_unidades eu
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede