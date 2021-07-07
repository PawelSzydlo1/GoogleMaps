package com.example.map_service.repository;


import com.example.map_service.model.MenuModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends CrudRepository<MenuModel,Long> {
}
