select * from tb_pessoa_mod28
select * from tb_estado

create table tb_pessoa_mod28 (
	id bigint not null,
	nome varchar(50) not null,
	idade integer constraint check_idade
	CHECK (idade > 0 and idade < 120),
	sexo VARCHAR(1) not null,
	id_estado bigint,
	constraint pk_id_pessoa primary key (id)
	--constraint fk_id_estado_pessoa foreign key (id_estado) references tb_estado(id)
);

create table tb_estado (
	id bigint not null,
	nome varchar(50) not null,
	sigla varchar(2) not null,
	constraint pk_id_estado primary key(id)
);

alter table tb_pessoa_mod28
add id_estado bigint;

alter table tb_pessoa_mod28
add cpf integer;

--alter table tb_pessoa_mod28 
--add constraint pk_id_pessoa primary key (id); outra maneira de criar uma constraint

alter table tb_pessoa_mod28
add constraint fk_id_estado_pessoa foreign key (id_estado) references tb_estado(id);

INSERT INTO tb_pessoa_mod28 VALUES (nextval('sq_pessoa2'), 'Calleb Camargo', 19, 'M', 3);
INSERT INTO tb_pessoa_mod28 VALUES (nextval('sq_pessoa2'), 'Rayane Lopes', 18, 'F', 4, 23323);
INSERT INTO tb_pessoa_mod28 VALUES (nextval('sq_pessoa2'), 'Lidiane Duarte', 40, 'F', 2, 32354);


INSERT INTO tb_estado (id, nome, sigla)
VALUES (1, 'Goiás', 'GO');
INSERT INTO tb_estado (id, nome, sigla)
VALUES (2, 'Minas Gerais', 'MG');

ALTER TABLE tb_pessoa_mod28 
in column cpf in id(1)

UPDATE tb_pessoa_mod28
SET cpf = 12345
WHERE id = ;

ALTER TABLE tb_pessoa_mod28 ADD CONSTRAINT up_cpf_pessoa UNIQUE (cpf);

INSERT INTO tb_pessoa_mod28 VALUES (nextval('sq_pessoa2'), 'João Gomes', 23, 'M', 1, 22678);
--INSERT INTO tb_pessoa_mod28 VALUES (5, 'João Gomes', 23, 'M', 3, 22678); Não pode repetir o mesmo cpf
delete from tb_pessoa_mod28;
delete from tb_estado;

INSERT INTO tb_estado (id, sigla, nome) VALUES(nextval('sq_estado2'), 'SP', 'São Paulo');
INSERT INTO tb_estado (id, sigla, nome) VALUES(nextval('sq_estado2'), 'RJ', 'Rio de janeiro');
INSERT INTO tb_estado (id, sigla, nome) VALUES(nextval('sq_estado2'), 'MG', 'Minas Gerais');
INSERT INTO tb_estado (id, sigla, nome) VALUES(nextval('sq_estado2'), 'GO', 'Goías');

CREATE SEQUENCE sq_pessoa2
START 1
INCREMENT 1 
OWNED BY tb_pessoa_mod28.id;

CREATE SEQUENCE sq_estado2
START 1
INCREMENT 1 
OWNED BY tb_estado.id;

select * from tb_pessoa_mod28;
select * from tb_estado;

select *
from tb_pessoa_mod28 p, tb_estado e
where p.id_estado = e.id;

select p.nome, e.nome
from tb_pessoa_mod28 p, tb_estado e
where p.id_estado = e.id;

select p.nome as nome_pessoa, e.nome as nome_estado
from tb_pessoa_mod28 as p, tb_estado as e
where p.id_estado = e.id;

select p.nome as nome_pessoa, e.nome as nome_estado
from tb_pessoa_mod28 as p
left join tb_estado as e on p.id_estado = e.id;

select p.nome as nome_pessoa, e.nome as nome_estado
from tb_pessoa_mod28 as p
right join tb_estado as e on p.id_estado = e.id;

select p.nome as nome_pessoa, e.nome as nome_estado
from tb_pessoa_mod28 as p
full join tb_estado as e on p.id_estado = e.id;

select p.nome as nome_pessoa, e.nome as nome_estado
from tb_pessoa_mod28 as p
cross join tb_estado as e;

