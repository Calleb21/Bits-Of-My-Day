package br.com.calleb.exceptions;

/**
 * Description of TableException
 * Created by calle on 22/11/2023.
 */
public class TableException extends Exception {

    private static final Long serialVersionUID = -7509649433607067138L;

    public TableException(String msg) {
        super(msg);
    }
}
