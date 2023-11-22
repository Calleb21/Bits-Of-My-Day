package br.com.calleb.exceptions;

/**
 * Description of MaisDeUmRegistroException
 * Created by calle on 22/11/2023.
 */
public class MaisDeUmRegistroException extends Exception {

    private static final Long serialVersionUID = -7509649433607067138L;

    public MaisDeUmRegistroException(String msg) {
        super(msg);
    }
}
