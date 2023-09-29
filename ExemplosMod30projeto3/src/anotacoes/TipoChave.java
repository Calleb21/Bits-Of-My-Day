package anotacoes;

import java.lang.annotation.*;

/**
 * Description of TipoChave
 * Created by calle on 25/09/2023.
 */
@Documented
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface TipoChave {

    String value();
}
