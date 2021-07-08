import axios from "axios";
import { useState } from "react";
import { MapComponent } from "../component/MapComponent";
export function WebService() {
  const api = axios.create({
    baseURL: `http://localhost:8080/`,
  });
  const [dataRestaurant, setDataRestaurant] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [actualMenu, setActualMenu] = useState([]);
  const [yourOrder, setYourOrder] = useState([]);
  const [yourPosition, setYourPosition] = useState({
    lat: 52.232084,
    lng: 21.018831,
  });
  const [restaurant, setRestaurant] = useState(null);
  const downloadData = () => {
    api
      .get("/list")
      .then((response) => response.data)
      .then((data) => {
        setDataRestaurant(data);
      });
  };
  const nearRestaurant = () => {
    let idNearRest = null;
    let distance = 10000000;
    dataRestaurant.map((element) => {
      let tmp = Math.sqrt(
        Math.pow(yourPosition.lat - element.lat, 2) +
          Math.pow(yourPosition.lng - element.lng, 2),
        2
      );
      if (distance > tmp) {
        distance = tmp;
        idNearRest = element;

        setRestaurant(idNearRest);
        openActualMenu(idNearRest);
        setOpenMenu(true);
      }
    });
  };

  const openActualMenu = (Rest) => {
    setOpenMenu(true);
    setRestaurant(Rest);
    const menu = dataRestaurant.find((element) => element.id === Rest.id);
    console.log(dataRestaurant.find((element) => element.id === Rest.id));
    setActualMenu(menu.menuModelSet);
  };

  const findOrder = (idOrder) => {
    const menu = restaurant.menuModelSet.find(
      (element) => element.id === idOrder
    );

    setYourOrder([
      ...yourOrder,
      {
        id: menu.id,
        restaurant: restaurant.restaurantName,
        menuTitle: menu.menuTitle,
        price: menu.price,
      },
    ]);
  };
  MapComponent(dataRestaurant, openActualMenu, yourPosition);
  const [idDeteteOrder, setIdDeteteOrder] = useState(0);

  const deleteOrder = () => {
    yourOrder.splice(
      yourOrder.findIndex((element) => element.id === idDeteteOrder),
      1
    );
    setDeleteStatus(!deleteStatus);
  };

  return {
    downloadData,
    openMenu,
    actualMenu,
    setOpenMenu,
    yourOrder,
    findOrder,
    restaurant,
    yourPosition,
    setYourPosition,
    nearRestaurant,
    deleteOrder,
    deleteStatus,
    setIdDeteteOrder,
  };
}
