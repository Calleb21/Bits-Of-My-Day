package anotacoes;

import java.lang.annotation.*;

/**
 * Description of TipoChave
 * Created by calle on 20/11/2023.
 */
@Documented
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface TipoChave {

    String value();
}
