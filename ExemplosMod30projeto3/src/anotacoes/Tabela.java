package anotacoes;

import java.lang.annotation.*;

/**
 * Description of Tabela
 * Created by calle on 25/09/2023.
 */
@Documented
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface Tabela {

    String value();
}
