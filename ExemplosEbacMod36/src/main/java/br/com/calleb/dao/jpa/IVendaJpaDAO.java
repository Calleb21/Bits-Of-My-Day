package br.com.calleb.dao.jpa;

import br.com.calleb.dao.generic.IGenericJapDAO;
import br.com.calleb.domain.VendaJpa;
import br.com.calleb.exceptions.DAOException;
import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;

public interface IVendaJpaDAO extends IGenericJapDAO<VendaJpa, Long>{

	public void finalizarVenda(VendaJpa venda) throws TipoChaveNaoEncontradaException, DAOException;
	
	public void cancelarVenda(VendaJpa venda) throws TipoChaveNaoEncontradaException, DAOException;
	
	/**
	 * Usando este método para evitar a exception
	 * org.hibernate.LazyInitializationException Ele busca todos os dados de objetos
	 * que tenham colletion pois a mesma por default é lazy Mas você pode configurar
	 * a propriedade da collection como fetch = FetchType.EAGER na
	 * anotação @OneToMany e usar o consultar genérico normal
	 * 
	 * OBS: Não é uma boa prática utiliar FetchType.EAGER pois ele sempre irá trazer
	 * todos os objetos da collection mesmo sem precisar utilizar.
	 * 
	 * 
	 * @see VendaJpa produtos
	 * 
	 * @param id
	 * @return
	 */
	public VendaJpa consultarComCollection(Long id);
}
