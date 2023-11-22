package br.com.calleb.exceptions;

/**
 * Description of DAOException
 * Created by calle on 22/11/2023.
 */
public class DAOException extends Exception {

    private static final Long serialVersionUID = 7054379063290825137L;

    public DAOException(String msg, Exception ex) {
        super(msg, ex);
    }
}
