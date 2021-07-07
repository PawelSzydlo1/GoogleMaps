package com.example.map_service.controllers;

import com.example.map_service.model.MenuModel;
import com.example.map_service.model.RestaurantModel;
import com.example.map_service.repository.MenuRepository;
import com.example.map_service.repository.RestaurantRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class MenuController {

    private final MenuRepository menuRepository;
    private final RestaurantRepository restaurantRepository;

    public MenuController(MenuRepository menuRepository, RestaurantRepository restaurantRepository) {
        this.menuRepository = menuRepository;
        this.restaurantRepository = restaurantRepository;
    }

    @GetMapping("/add")
    public void addMenuAndRest(){
        RestaurantModel mcDonald = new RestaurantModel("McDonald",52.232084,21.015831);
        restaurantRepository.save(mcDonald);
        menuRepository.save(new MenuModel("Burger","Tomato,salad, cheese, pork chop",mcDonald));
        menuRepository.save(new MenuModel("Double Burger","Tomato,salad, cheese, double pork chops ",mcDonald));
        menuRepository.save(new MenuModel("Fish Burger","Tomato,salad, cheese, fish chop ",mcDonald));
        menuRepository.save(new MenuModel("Salad","Lettuce, feta cheese, tomato, cucumber ",mcDonald));
        menuRepository.save(new MenuModel("Strawberry","Ice cream in a cup, 250 ml ",mcDonald));

        RestaurantModel burgerKing = new RestaurantModel("Burger King",52.272084,21.015831);
        restaurantRepository.save(burgerKing);
        menuRepository.save(new MenuModel("Shake","Strawberry, vanilla,chocolate ",burgerKing));
        menuRepository.save(new MenuModel("Chips","American chips",burgerKing));
        menuRepository.save(new MenuModel("Burger","Tomato,salad, cheese, pork chop",burgerKing));

        RestaurantModel kebab = new RestaurantModel("Kebab",52.232084,21.025831);
        restaurantRepository.save(kebab);
        menuRepository.save(new MenuModel("Pork Kebab ","Pork meal, lettuce,tomato, chilli sos",kebab));
        menuRepository.save(new MenuModel("Chicken Kebab","Chicken meal, lettuce,tomato, chilli sos ",kebab));

        RestaurantModel kfc = new RestaurantModel("KFC",52.239984,21.017831);
        restaurantRepository.save(kfc);
        menuRepository.save(new MenuModel("Bucket","7x chicken wings, 250 ml Coca cola",kfc));
        menuRepository.save(new MenuModel("Breakfast set","Sandwiches with ham and tomato, cucumber and cheese",kfc));


        RestaurantModel lunchTime = new RestaurantModel("Lunch Time",52.222084,21.025831);
        restaurantRepository.save(lunchTime);
        menuRepository.save(new MenuModel("Lunch","Sandwiches with ham and tomato, cucumber and cheese",lunchTime));
        menuRepository.save(new MenuModel("Dinner","Tomato soup, potatoes and cutlet",lunchTime));


        RestaurantModel milkBar = new RestaurantModel("Milk Bar",52.235084,21.015831);
        restaurantRepository.save(milkBar);
        menuRepository.save(new MenuModel("Shake","Strawberry, vanilla,chocolate ",milkBar));
        menuRepository.save(new MenuModel("Coffee","Late, Black coffee",milkBar));


    }

}
