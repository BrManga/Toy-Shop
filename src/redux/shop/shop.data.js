const SHOP_DATA = {
  babys: {
    id: 1,
    title: "Babys",
    routeName: "babys",
    items: [
      {
        id: 1,
        name: "Xylophone",
        imageUrl:
          "https://images.unsplash.com/photo-1509781827353-fb95c262fc40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        price: 15
      },
      {
        id: 2,
        name: "Boat",
        imageUrl:
          "https://images.unsplash.com/photo-1560859251-d563a49c5e4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 11
      },
      {
        id: 3,
        name: "Duck Family",
        imageUrl:
          "https://images.unsplash.com/photo-1564158125179-e4ad15745b7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 15
      },
      {
        id: 4,
        name: "Brown Bear",
        imageUrl:
          "https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        price: 25
      },
      {
        id: 5,
        name: "Rocking Horse",
        imageUrl:
          "https://images.unsplash.com/photo-1542855119-bd251e055301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 45
      },
      {
        id: 6,
        name: "Elephant",
        imageUrl:
          "https://images.unsplash.com/photo-1559364607-a7baef1b935e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=577&q=80",
        price: 25
      },
      {
        id: 7,
        name: "Activity Cubes",
        imageUrl:
          "https://images.unsplash.com/photo-1485460535564-844461f37f77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 15
      },
      {
        id: 8,
        name: "Baby Hat",
        imageUrl:
          "https://images.unsplash.com/photo-1506804880640-f3205deb1b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 25
      }
    ]
  },
  twofouryears: {
    id: 2,
    title: "2 - 4 Years",
    routeName: "twofouryears",
    items: [
      {
        id: 11,
        name: "Unicorn",
        imageUrl:
          "https://images.unsplash.com/photo-1550747528-cdb45925b3f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
        price: 15
      },
      {
        id: 12,
        name: "Stacking Cubes",
        imageUrl:
          "https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        price: 14
      },
      {
        id: 13,
        name: "Nintendo Toys",
        imageUrl:
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 10
      },
      {
        id: 14,
        name: "Train Set",
        imageUrl:
          "https://images.unsplash.com/photo-1531512721928-a2c9d1a3fb9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: 29
      },
      {
        id: 15,
        name: "VW Beetle",
        imageUrl:
          "https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 40
      },
      {
        id: 16,
        name: "Teddy Bear",
        imageUrl:
          "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 20
      },
      {
        id: 17,
        name: "Penguen",
        imageUrl:
          "https://images.unsplash.com/photo-1554825203-68321ddde262?ixlib=rb-1.2.1&auto=format&fit=crop&w=677&q=80",
        price: 20
      },
      {
        id: 18,
        name: "Doll",
        imageUrl:
          "https://images.unsplash.com/photo-1552899167-d0b2887ca549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80",
        price: 21
      }
    ]
  },
  fivesevenyears: {
    id: 3,
    title: "5 - 7 Years",
    routeName: "fivesevenyears",
    items: [
      {
        id: 19,
        name: "Lego 1 kilo",
        imageUrl:
          "https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
        price: 100
      },
      {
        id: 20,
        name: "Stormtrooper and his friends ",
        imageUrl:
          "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
        price: 45
      },
      {
        id: 21,
        name: "Bubble maker pink",
        imageUrl:
          "https://images.unsplash.com/photo-1498842965061-82d264217c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: 38
      },
      {
        id: 22,
        name: "Swing",
        imageUrl:
          "https://images.unsplash.com/photo-1535912259434-add45732e720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 25
      },
      {
        id: 23,
        name: "Front loader",
        imageUrl:
          "https://images.unsplash.com/photo-1573405201557-34554230bcf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 22
      },
      {
        id: 24,
        name: "Pink Dino",
        imageUrl:
          "https://images.unsplash.com/photo-1563901935883-cb61f5d49be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        price: 21
      },
      {
        id: 25,
        name: "101 Marble",
        imageUrl:
          "https://images.unsplash.com/photo-1548690593-24c84de8e043?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
        price: 21
      },
      {
        id: 26,
        name: "Conan Edogawa Figure",
        imageUrl:
          "https://images.unsplash.com/photo-1561229474-1f22e022dfd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 13
      }
    ]
  },
  eightelfyears: {
    id: 4,
    title: "8 - 11 Years",
    routeName: "eightelfyears",
    items: [
      {
        id: 27,
        name: "Marvel Hulk",
        imageUrl:
          "https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        price: 52
      },
      {
        id: 28,
        name: "Wall-E",
        imageUrl:
          "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        price: 45
      },
      {
        id: 29,
        name: "My City",
        imageUrl:
          "https://images.unsplash.com/photo-1529978755210-7f13333beb13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 135
      },
      {
        id: 30,
        name: "Bicycle 14 Gears, 24 Inches",
        imageUrl:
          "https://images.unsplash.com/photo-1549216963-72c1712c1196?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 325
      },
      {
        id: 31,
        name: "Uhlsport ball",
        imageUrl:
          "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        price: 15
      },
      {
        id: 32,
        name: "Skateboard",
        imageUrl:
          "https://images.unsplash.com/photo-1537476102677-80bac0ab1d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 75
      },
      {
        id: 33,
        name: "Drone",
        imageUrl:
          "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
        price: 62
      },
      {
        id: 34,
        name: "Street Fighter Ken and Ryu figures",
        imageUrl:
          "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        price: 18
      }
    ]
  },
  twelveup: {
    id: 5,
    title: "12 & up ",
    routeName: "twelveup",
    items: [
      {
        id: 35,
        name: "Playstation",
        imageUrl:
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 325
      },
      {
        id: 36,
        name: "Skateboard",
        imageUrl:
          "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        price: 325
      },
      {
        id: 37,
        name: "Bicycle, 28 Zoll",
        imageUrl:
          "https://images.unsplash.com/photo-1485882794972-09e019e98d48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        price: 425
      },
      {
        id: 38,
        name: "Basketball NBA",
        imageUrl:
          "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 19
      },
      {
        id: 39,
        name: "Nintendo Switch",
        imageUrl:
          "https://images.unsplash.com/photo-1560278687-2941249fd3d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 325
      },
      {
        id: 40,
        name: "Boxing Gloves",
        imageUrl:
          "https://images.unsplash.com/photo-1509255929945-586a420363cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80",
        price: 83
      },
      {
        id: 41,
        name: "Karate Kid Costume",
        imageUrl:
          "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
        price: 33
      },
      {
        id: 42,
        name: "Surfboard",
        imageUrl:
          "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 80
      }
    ]
  }
};

export default SHOP_DATA;
