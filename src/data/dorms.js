const dorms = [

  {
    id: 1,
    hostel: "Chennai City Hostel",
    roomType: "6 Bed Mixed Dorm",
    location: "T Nagar, Chennai",
    price: 799,
    bedsAvailable: 4,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
    amenities: [
      "WiFi",
      "AC",
      "Locker",
      "Laundry"
    ],
    beds: [
      {
        bedId: "B1",
        status: "available"
      },
      {
        bedId: "B2",
        status: "occupied"
      },
      {
        bedId: "B3",
        status: "available"
      },
      {
        bedId: "B4",
        status: "available"
      },
      {
        bedId: "B5",
        status: "occupied"
      },
      {
        bedId: "B6",
        status: "available"
      }
    ]
  },

  {
    id: 2,
    hostel: "Madurai Backpackers",
    roomType: "4 Bed Female Dorm",
    location: "Madurai",
    price: 999,
    bedsAvailable: 2,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    amenities: [
      "WiFi",
      "Kitchen",
      "Hot Water"
    ],
    beds: [
      {
        bedId: "A1",
        status: "available"
      },
      {
        bedId: "A2",
        status: "available"
      },
      {
        bedId: "A3",
        status: "occupied"
      },
      {
        bedId: "A4",
        status: "occupied"
      }
    ]
  }

]

export default dorms;