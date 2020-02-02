import babyImage from "../../assets/images/baby.jpg";
import zweiJahre from "../../assets/images/zweiJahre.jpg";
import fünfJahre from "../../assets/images/fünfJahre.jpg";
import achtJahre from "../../assets/images/achtJahre.jpg";
import zwoelfJahre from "../../assets/images/zwoelfJahre.jpg";
let initialState = {
  sections: [
    {
      title: "babys",
      imageUrl: babyImage,
      id: 1,
      linkUrl: "shop/babys"
    },
    {
      title: "2 - 4 Years",
      imageUrl: zweiJahre,
      id: 2,
      linkUrl: "shop/twofouryears"
    },
    {
      title: "5 - 7 Years",
      imageUrl: fünfJahre,
      id: 3,
      linkUrl: "shop/fivesevenyears"
    },
    {
      title: "8 - 11 Years",
      imageUrl: achtJahre,
      size: "large",
      id: 4,
      linkUrl: "shop/eightelfyears"
    },
    {
      title: "12 & Up",
      imageUrl: zwoelfJahre,
      size: "large",
      id: 5,
      linkUrl: "shop/twelveup"
    }
  ]
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
