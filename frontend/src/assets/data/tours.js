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
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "Explore the iconic Westminster Bridge and enjoy stunning views of the Houses of Parliament and Big Ben.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "John Doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
    address: "Westminster Bridge, London, United Kingdom",
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Immerse yourself in Bali's unique culture, picturesque landscapes, and pristine beaches.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
    address: "Bali, Indonesia",
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Discover the breathtaking Snowy Mountains in Thailand, a perfect spot for adventure and scenic beauty.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
    address: "Snowy Mountains, Chiang Mai, Thailand",
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Catch a magnificent sunrise over the stunning landscapes of Krabi, Thailand.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
    address: "Beautiful Sunrise, Krabi, Thailand",
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Relax on the pristine beaches of Nusa Pendia in Bali, surrounded by crystal-clear waters and lush greenery.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
    address: "Nusa Pendia, Bali, Indonesia",
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Witness the stunning cherry blossoms in full bloom during springtime in Kyoto, Japan.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
    address: "Kyoto, Japan",
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Discover the untouched beauty of Holmen Lofoten, a peaceful retreat in the French countryside.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
    address: "Holmen Lofoten, France",
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Adventure awaits in the Snowy Mountains of Chiang Mai, offering both tranquility and thrilling hikes.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
    address: "Snowy Mountains, Chiang Mai, Thailand",
  },
];

export default tours;

