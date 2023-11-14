package br.com.calleb.domain.converter;

import javax.persistence.*;
import java.time.Instant;

/**
 * Description of InstantConverter
 * Created by calle on 14/11/2023.
 */
@Convert
public class InstantConverter implements AttributeConverter<Instant, String> {

    @Override
    public String convertToDatabaseColumn(Instant attribute) {
        return attribute.toString();
    }

    @Override
    public Instant convertToEntityAttribute(String dbData) {
        return Instant.parse(dbData);
    }
}
