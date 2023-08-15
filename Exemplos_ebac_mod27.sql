select * from tb_pessoa1

insert into tb_pessoa1 (id, nome, idade, sexo)
values (2, 'Rayane Lopes', 18, 'F');

update tb_pessoa1 set nome = 'Rayane Lopes' where id = 2;
update tb_pessoa1 set nome = 'Calleb Camargo', idade = 19 where id = 1;

delete from tb_pessoa1 where id = 2;