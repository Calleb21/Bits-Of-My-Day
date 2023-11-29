package com.example.pizzaria.food;

import jakarta.persistence.*;

/**
 * Description of Food
 * Created by calle on 29/11/2023.
 */
@Table(name = "foods")
@Entity(name = "foods")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;
    private Integer price;
}
