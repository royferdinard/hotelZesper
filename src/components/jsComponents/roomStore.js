import React from "react";
//import { Link } from "react-router-dom";
//import "./orderCard.css";
import image1 from "../../assets/room-sleek-hotelZesper.webp";
import image2 from "../../assets/deluxe.jpg";
import image3 from "../../assets/double-deluxe-rooms-hotelZesper.webp";

   const Rooms = [
    {
        id:"standardSingleRoom",
        name:"Standard single room",
        price:1500,
        description:"A cozy room with a single bed, perfect for solo travelers. Enjoy a comfortable stay with all the essential amenities.",
        image:image1
    },
    {
        id:"deluxeRoom",
        name:"Deluxe room",
        price:2500,
        description:"Experience luxury in our Deluxe Room, featuring elegant decor, a plush queen bed, and modern amenities for a relaxing stay.",
        image:image2
    },
    {
        id:"doubleDeluxeRoom",
        name:"Double deluxe room",
        price:3500,
        description:"Perfect for families or groups, our Double Deluxe Room offers comfort and style with two plush queen beds and modern amenities.",
        image:image3
    }
];


export default Rooms;