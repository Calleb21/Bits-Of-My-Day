package com.example.pizzaria.controller;

import com.example.pizzaria.food.Food;
import com.example.pizzaria.food.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Description of FoodController
 * Created by calle on 29/11/2023.
 */
@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @GetMapping
    public List<Food> getAll() {

        List<Food> foodList = repository.findAll();
        return foodList;
    }
}
