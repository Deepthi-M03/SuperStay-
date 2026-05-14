const dorms = [

  {
    id: 1,
    hostel: "SuperStay Chennai",
    dormName: "Mixed Dorm",
    type: "Shared",
    beds: [
      { id: 1, number: "Bed 1", available: true },
      { id: 2, number: "Bed 2", available: false },
      { id: 3, number: "Bed 3", available: true },
      { id: 4, number: "Bed 4", available: true }
    ],
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop"
  },

  {
    id: 2,
    hostel: "SuperStay Goa",
    dormName: "Female Dorm",
    type: "Shared",
    beds: [
      { id: 1, number: "Bed 1", available: true },
      { id: 2, number: "Bed 2", available: true },
      { id: 3, number: "Bed 3", available: false }
    ],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
  }

];

export default dorms;