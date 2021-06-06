--  Criando a tabela Estado
create table estados (
    id INT UNSIGNED  NOT NULL AUTO_INCREMENT,/* PRIMEIRA COLUNA ID, UNSIGNED:SEM SINAL, NOT NULL:NÃO ACEITA NULO, AUTO_INCREMENT: AUTO INCREMENTAÇÃO, TODA VEZ QUE ADD DADO, O ID É INCREMENTADO*/
    
    nome VARCHAR(45) NOT NULL, /*COLUNA NOME TIPO CHAR VARIAVEL COM 45 CARACTER, NOT NULL: NÃO ACEITA NULO, OU SEJA É UM CAMPO OBRIGATÓRIO*/

    sigla VARCHAR(2) NOT NULL, /*COLUNA SIGLA*/

    regiao ENUM('Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul') NOT NULL, /*-ENUM: ENUMERA AS OPÇÕES*/

    populacao DECIMAL(5,2) NOT NULL, /*DECIMAL(5,2):MAXIMO ACEITADO (unidade em miliões) */

    PRIMARY KEY (id),/*DEFININDO QUEM É A COLUNA PRINCIPAL*/

    UNIQUE KEY (nome), /*nome não pode ser duplicado*/
    UNIQUE KEY (sigla) /*sigla não pode ser duplicado*/
);