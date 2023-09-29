package br.com.calleb.exceptions;

/**
 * Description of TipoElementoNaoConhecidoException
 * Created by calle on 25/09/2023.
 */
public class TipoElementoNaoConhecidoException extends Exception {

    private static final long serialVersionUID = -2268140970978666251L;

    public TipoElementoNaoConhecidoException(String msg) {
        this(msg, null);
    }

    public TipoElementoNaoConhecidoException(String msg, Throwable e) {
        super(msg, e);
    }
}
