const SHOP_DATA = {
  babys: {
    id: 1,
    title: "Babys",
    routeName: "babys",
    items: [
      {
        id: 1,
        name: "Giraffe",
        imageUrl:
          "https://images.unsplash.com/photo-1552163065-7eee01c2f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 15
      },
      {
        id: 2,
        name: "Boats per stück",
        imageUrl:
          "https://images.unsplash.com/photo-1560859251-d563a49c5e4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 11
      },
      {
        id: 3,
        name: "Entenfamilie",
        imageUrl:
          "https://images.unsplash.com/photo-1564158125179-e4ad15745b7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 15
      },
      {
        id: 4,
        name: "Braunbär",
        imageUrl:
          "https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        price: 25
      },
      {
        id: 5,
        name: "Schaukelpferd",
        imageUrl:
          "https://images.unsplash.com/photo-1542855119-bd251e055301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 45
      },
      {
        id: 6,
        name: "Elefant Spielzeug",
        imageUrl:
          "https://images.unsplash.com/photo-1559364607-a7baef1b935e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=577&q=80",
        price: 25
      }
    ]
  },
  zweivierjaehrige: {
    id: 2,
    title: "2 -4 jährige kinder",
    routeName: "zweivierjaehrige",
    items: [
      {
        id: 10,
        name: "Stormtrooper",
        imageUrl:
          "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
        price: 20
      },
      {
        id: 11,
        name: "Unicorn",
        imageUrl:
          "https://images.unsplash.com/photo-1550747528-cdb45925b3f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
        price: 15
      },
      {
        id: 12,
        name: "Stapelwürfel",
        imageUrl:
          "https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        price: 14
      },
      {
        id: 13,
        name: "Nintendo Spielzeug",
        imageUrl:
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 10
      },
      {
        id: 14,
        name: "Zug Spielzeug Set",
        imageUrl:
          "https://images.unsplash.com/photo-1531512721928-a2c9d1a3fb9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: 29
      },
      {
        id: 15,
        name: "VW Beetle Spielzeug",
        imageUrl:
          "https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 40
      },
      {
        id: 16,
        name: "Teddybär",
        imageUrl:
          "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 20
      }
    ]
  },
  fuenfsiebenjaehrige: {
    id: 3,
    title: "5 - 7 jährige kinder",
    routeName: "fuenfsiebenjaehrige",
    items: [
      {
        id: 18,
        name: "Lego 1 kilo",
        imageUrl:
          "https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
        price: 100
      },
      {
        id: 19,
        name: "Stormtrooper und seine Freunde ",
        imageUrl:
          "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
        price: 45
      },
      {
        id: 20,
        name: "Seifenblasenmaschine Pink",
        imageUrl:
          "https://images.unsplash.com/photo-1498842965061-82d264217c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: 38
      },
      {
        id: 21,
        name: "Schaukel",
        imageUrl:
          "https://images.unsplash.com/photo-1535912259434-add45732e720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 25
      },
      {
        id: 22,
        name: "Frontlader",
        imageUrl:
          "https://images.unsplash.com/photo-1573405201557-34554230bcf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 22
      }
    ]
  },
  achtelfjaehrige: {
    id: 4,
    title: "8 - 11 jährige kinder",
    routeName: "achtelfjaehrige",
    items: [
      {
        id: 23,
        name: "Marvel Hulk",
        imageUrl:
          "https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        price: 52
      },
      {
        id: 24,
        name: "Wall-E",
        imageUrl:
          "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        price: 45
      },
      {
        id: 25,
        name: "Meine Stadt",
        imageUrl:
          "https://images.unsplash.com/photo-1529978755210-7f13333beb13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 135
      },
      {
        id: 26,
        name: "Rennrad 14 Gänge, 24 Zoll",
        imageUrl:
          "https://images.unsplash.com/photo-1549216963-72c1712c1196?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 325
      },
      {
        id: 27,
        name: "Uhlsport ball",
        imageUrl:
          "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        price: 15
      },
      {
        id: 28,
        name: "Playstation 4",
        imageUrl:
          "https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1473&q=80",
        price: 325
      },
      {
        id: 29,
        name: "Skateboard",
        imageUrl:
          "https://images.unsplash.com/photo-1537476102677-80bac0ab1d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 75
      }
    ]
  },
  zwoelfup: {
    id: 5,
    title: "12 & up ",
    routeName: "zwoelfup",
    items: [
      {
        id: 30,
        name: "Playstation",
        imageUrl:
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: 325
      },
      {
        id: 31,
        name: "Skateboard",
        imageUrl:
          "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        price: 325
      },
      {
        id: 32,
        name: "Trekkingrad, 28 Zoll",
        imageUrl:
          "https://images.unsplash.com/photo-1485882794972-09e019e98d48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        price: 425
      },
      {
        id: 33,
        name: "Basketball NBA",
        imageUrl:
          "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 19
      },
      {
        id: 34,
        name: "Nintendo Switch",
        imageUrl:
          "https://images.unsplash.com/photo-1560278687-2941249fd3d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        price: 325
      },
      {
        id: 35,
        name: "Boxhandschuhe",
        imageUrl:
          "https://images.unsplash.com/photo-1509255929945-586a420363cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80",
        price: 83
      }
    ]
  }
};

export default SHOP_DATA;
