import { withScriptjs, withGoogleMap } from "react-google-maps";

import React, { useState, useEffect } from "react";
import { Map } from "../../component/MapComponent";
import { WebService } from "../../service/WebService";
import { Modal } from "../../component/Modal";
import { Minutnik } from "../../component/Minutnik";
import "./index.css";

export function Home() {
  const {
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
  } = WebService();

  
  useEffect(() => {
    downloadData();
  }, []);

  useEffect(() => {}, [yourPosition, deleteStatus]);

  const [acceptMenu, setAcceptMenu] = useState("");
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div style={{ display: `flex`, width: `100vw`, height: `100vh` }}>
      <div className="container mx-auto my-5 d-flex justify-content-center">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ width: `80%`, height: `90%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="container">
        <div className="yourLocalization">
          <p className=" yourLocText m-0">Your Localization</p>
          <div className="inputLoc">
            <input
              type="text"
              className="inputLocValue my-3 mx-2"
              value={yourPosition.lat}
              onChange={(event) =>
                setYourPosition({
                  ...yourPosition,
                  lat: parseFloat(event.target.value, 10),
                })
              }
            ></input>
            <input
              type="text"
              className=" inputLocValue my-3 mx-2"
              value={yourPosition.lng}
              onChange={(event) =>
                setYourPosition({
                  ...yourPosition,
                  lng: parseFloat(event.target.value, 10),
                })
              }
            ></input>
          </div>
        </div>
        <div className="headerMenu p-3">
          <h3>MENU</h3>
          <div
            className="btn btn-danger my-0 "
            onClick={() => setOpenMenu(false)}
          >
            Close
          </div>
          <div>
            <div className="nearButton">
              <p className=" p-0 mx-2 my-0">
                Restaurant near you :
                <div
                  type="button"
                  className="btn btn-primary mx-3 "
                  onClick={() => nearRestaurant()}
                >
                  Click
                </div>
                or choose from the map
              </p>
            </div>
          </div>
        </div>

        <div className="mainManu">
          {openMenu ? (
            <div className="menuList">
              <div className="actualMenu" id="header">
                <p className="px-4 py-2 m-0">Title</p>

                <strong>
                  <p className="px-4 py-2 m-0">{restaurant.restaurantName}</p>
                </strong>
                <p className="px-4 py-2 m-0">Decription</p>
              </div>

              {actualMenu.map((element) => (
                <div
                  className="actualMenu"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => setAcceptMenu(element)}
                >
                  <Modal element={acceptMenu} findOrder={findOrder}></Modal>

                  <p className="px-4 py-2 m-0">{element.menuTitle}</p>
                  <p className="px-4 py-2 m-0">{element.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="defaultInfo">
              <p className="m-0">CHOOSE RESTAURANT!</p>
            </div>
          )}
        </div>
        <div className="yourOrder">
          <div className="yourOrderText m-0">
            <p>Your Order</p>
          </div>

          {yourOrder.length !== 0 ? (
            <div>
              <div className="yourOrderList" id="header">
                <p className="px-4 py-2 m-0">Menu</p>
                <p className="px-4 py-2 m-0">Restaurant </p>
                <p className="px-4 py-2 m-0">Time</p>
              </div>
              {yourOrder.map((element) => (
                <div className="yourOrderList" key={element.id}>
                  <p className="px-4 py-2 m-0">{element.menuTitle}</p>
                  <p className="px-4 py-2 m-0">{element.restaurant}</p>
                  {console.log(element)}
                  <Minutnik
                    order={element}
                    deleteOrder={deleteOrder}
                    setIdDeteteOrder={setIdDeteteOrder}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="defaultOrder">
              <p className=" m-0">You don't have any orders</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
