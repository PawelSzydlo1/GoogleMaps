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
        menuRepository.save(new MenuModel("Burger","Tomato,salad, cheese, pork chop",15.0,mcDonald));
        menuRepository.save(new MenuModel("Double Burger","Tomato,salad, cheese, double pork chops ",17.5,mcDonald));
        menuRepository.save(new MenuModel("Fish Burger","Tomato,salad, cheese, fish chop ",12.5,mcDonald));
        menuRepository.save(new MenuModel("Salad","Lettuce, feta cheese, tomato, cucumber ",22.99,mcDonald));
        menuRepository.save(new MenuModel("Strawberry","Ice cream in a cup, 250 ml ",4.99,mcDonald));

        RestaurantModel burgerKing = new RestaurantModel("Burger King",52.272084,21.015831);
        restaurantRepository.save(burgerKing);
        menuRepository.save(new MenuModel("Shake","Strawberry, vanilla,chocolate ",5.99,burgerKing));
        menuRepository.save(new MenuModel("Chips","American chips",3.99,burgerKing));
        menuRepository.save(new MenuModel("Burger","Tomato,salad, cheese, pork chop",4.59,burgerKing));

        RestaurantModel kebab = new RestaurantModel("Kebab",52.232084,21.025831);
        restaurantRepository.save(kebab);
        menuRepository.save(new MenuModel("Pork Kebab ","Pork meal, lettuce,tomato, chilli sos",14.89,kebab));
        menuRepository.save(new MenuModel("Chicken Kebab","Chicken meal, lettuce,tomato, chilli sos ",18.89,kebab));

        RestaurantModel kfc = new RestaurantModel("KFC",52.239984,21.017831);
        restaurantRepository.save(kfc);
        menuRepository.save(new MenuModel("Bucket","7x chicken wings, 250 ml Coca cola",25.5,kfc));
        menuRepository.save(new MenuModel("Breakfast set","Sandwiches with ham and tomato, cucumber and cheese",15.5,kfc));


        RestaurantModel lunchTime = new RestaurantModel("Lunch Time",52.222084,21.025831);
        restaurantRepository.save(lunchTime);
        menuRepository.save(new MenuModel("Lunch","Sandwiches with ham and tomato, cucumber and cheese",6.99,lunchTime));
        menuRepository.save(new MenuModel("Dinner","Tomato soup, potatoes and cutlet",16.99,lunchTime));


        RestaurantModel milkBar = new RestaurantModel("Milk Bar",52.235084,21.015831);
        restaurantRepository.save(milkBar);
        menuRepository.save(new MenuModel("Shake","Strawberry, vanilla,chocolate ",6.99,milkBar));
        menuRepository.save(new MenuModel("Coffee","Late, Black coffee",8.99,milkBar));


    }

}
