import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Kailesh Parvat",
    city: "India",
    distance: 300,
    address:'Kasmir',
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Sonu",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Melbourne,Australia",
    city: "Australia",
    distance: 400,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Ritu",
        rating: 4.6,
      },
      {
        name: "neeta",
        rating: 5,
      },
      {
        name: "Manoj",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Samanvita",
        rating: 5,
      },
      {
        name: "Rajiv",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Maldives, South Asia",
    city: "South Asia",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Erica",
        rating: 4.4,
      },
      {
        name: "Arya",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Udaipur,Rajasthan",
    city: "India",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Indira",
        rating: 4.2,
      },
      {
        name: "sumit",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "varanasi",
    city: "India",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Ambika",
        rating: 4.6,
      },
      {
        name: "Neha",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Manali",
    city: "India",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Beach, Honkong",
    city: "HonKong",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
