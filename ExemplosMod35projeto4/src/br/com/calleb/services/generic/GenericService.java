package br.com.calleb.services.generic;

import br.com.calleb.dao.Persistente;

import java.io.Serializable;

/**
 * Description of GenericService
 * Created by calle on 22/11/2023.
 */
public abstract class GenericService<T extends Persistente, E extends Serializable>
        implements IGenericService<T, E> {


}
