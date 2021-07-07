package com.example.map_service.repository;

import com.example.map_service.model.RestaurantModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends CrudRepository<RestaurantModel,Long> {
}
