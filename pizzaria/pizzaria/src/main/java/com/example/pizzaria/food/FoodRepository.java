package com.example.pizzaria.food;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Description of FoodRepository
 * Created by calle on 29/11/2023.
 */
public interface FoodRepository extends JpaRepository<Food, Long> {
}
