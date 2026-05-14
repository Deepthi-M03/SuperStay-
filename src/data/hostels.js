const hostels = [

  {
    id: 1,
    name: "Chennai Backpackers Hub",
    city: "Chennai",
    type: "Mixed Dorm",
    gender: "Mixed",
    price: 699,
    rating: 4.8,
    occupancy: 78,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    touristPlaces: [
      "Marina Beach",
      "Mahabalipuram",
      "Kapaleeshwarar Temple"
    ],

    beds: [
      {
        id: "A1",
        status: "available",
        cleaning: "clean"
      },
      {
        id: "A2",
        status: "booked",
        cleaning: "dirty"
      },
      {
        id: "A3",
        status: "available",
        cleaning: "clean"
      },
      {
        id: "A4",
        status: "available",
        cleaning: "clean"
      }
    ]
  },

  {
    id: 2,
    name: "Madurai StayNest",
    city: "Madurai",
    type: "Female Dorm",
    gender: "Female",
    price: 799,
    rating: 4.9,
    occupancy: 65,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

    touristPlaces: [
      "Meenakshi Temple",
      "Thirumalai Palace",
      "Gandhi Museum"
    ],

    beds: [
      {
        id: "B1",
        status: "available",
        cleaning: "clean"
      },
      {
        id: "B2",
        status: "booked",
        cleaning: "dirty"
      },
      {
        id: "B3",
        status: "available",
        cleaning: "clean"
      },
      {
        id: "B4",
        status: "booked",
        cleaning: "clean"
      }
    ]
  },

  {
    id: 3,
    name: "Coimbatore Urban Hostel",
    city: "Coimbatore",
    type: "Male Dorm",
    gender: "Male",
    price: 599,
    rating: 4.7,
    occupancy: 55,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",

    touristPlaces: [
      "Ooty",
      "Valparai",
      "Isha Foundation"
    ],

    beds: [
      {
        id: "C1",
        status: "available",
        cleaning: "clean"
      },
      {
        id: "C2",
        status: "available",
        cleaning: "clean"
      },
      {
        id: "C3",
        status: "booked",
        cleaning: "dirty"
      },
      {
        id: "C4",
        status: "available",
        cleaning: "clean"
      }
    ]
  }

]

export default hostels;