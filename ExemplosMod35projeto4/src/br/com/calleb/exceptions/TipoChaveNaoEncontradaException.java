package br.com.calleb.exceptions;

/**
 * Description of TipoChaveNaoEncontradaException
 * Created by calle on 22/11/2023.
 */
public class TipoChaveNaoEncontradaException extends Exception {

    private static final Long serialVersionUID = -1389494676398525746L;

    public TipoChaveNaoEncontradaException(String msg, Throwable e) {
        super(msg, e);
    }
}
