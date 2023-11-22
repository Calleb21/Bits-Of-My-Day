package br.com.calleb.exceptions;

/**
 * Description of TipoElementoNaoConhecidoException
 * Created by calle on 22/11/2023.
 */
public class TipoElementoNaoConhecidoException extends Exception {

    private static final Long serialVersionUID = -7509649433607067138L;

    public TipoElementoNaoConhecidoException(String msg) {
        this(msg, null);
    }

    public TipoElementoNaoConhecidoException(String msg, Throwable e) {
        super(msg, e);
    }
}
