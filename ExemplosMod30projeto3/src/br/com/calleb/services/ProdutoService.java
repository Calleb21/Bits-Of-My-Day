package br.com.calleb.services;

import br.com.calleb.dao.IProdutoDAO;
import br.com.calleb.dao.generic.IGenericDAO;
import br.com.calleb.domain.Produto;
import br.com.calleb.services.generic.GenericService;

/**
 * Description of ProdutoService
 * Created by calle on 25/09/2023.
 */
public class ProdutoService extends GenericService<Produto, String> implements IProdutoService {
    public ProdutoService(IProdutoDAO dao) {
        super(dao);
    }
}
