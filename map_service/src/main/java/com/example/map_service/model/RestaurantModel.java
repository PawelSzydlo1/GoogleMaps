package com.example.map_service.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "restaurant")
public class RestaurantModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String restaurantName;

    private Double lat;

    private Double lng;


    @OneToMany(mappedBy = "restaurantModel")
    private Set<MenuModel> menuModelSet;

    public RestaurantModel(String restaurantName, Double lat, Double lng) {
        this.restaurantName = restaurantName;
        this.lat = lat;
        this.lng = lng;

    }
    public RestaurantModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public Set<MenuModel> getMenuModelSet() {
        return menuModelSet;
    }

    public void setMenuModelSet(Set<MenuModel> menuModelSet) {
        this.menuModelSet = menuModelSet;
    }
}
