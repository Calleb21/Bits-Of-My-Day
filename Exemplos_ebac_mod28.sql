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

INSERT INTO tb_pessoa_mod28 (id, nome, idade, sexo, id_estado)
VALUES (1, 'Calleb Camargo', 19, 'M', 1);
INSERT INTO tb_pessoa_mod28 (id, nome, idade, sexo, id_estado, cpf)
VALUES (2, 'Rayane Lopes', 18, 'F', 1, 23323);
INSERT INTO tb_pessoa_mod28 (id, nome, idade, sexo, id_estado, cpf)
VALUES (3, 'Lidiane Duarte', 40, 'F', 2, 32354);

INSERT INTO tb_estado (id, nome, sigla)
VALUES (1, 'Goiás', 'GO');
INSERT INTO tb_estado (id, nome, sigla)
VALUES (2, 'Minas Gerais', 'MG');

ALTER TABLE tb_pessoa_mod28 
in column cpf in id(1)

UPDATE tb_pessoa_mod28
SET cpf = 12345
WHERE id = 1;