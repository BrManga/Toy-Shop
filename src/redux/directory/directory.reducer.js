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
      title: "2 -4 jährige kinder",
      imageUrl: zweiJahre,
      id: 2,
      linkUrl: "shop/zweivier"
    },
    {
      title: "5 - 7 jährige kinder",
      imageUrl: fünfJahre,
      id: 3,
      linkUrl: "shop/fuenfsiebenjaehrige"
    },
    {
      title: "8 - 11 jährige kinder",
      imageUrl: achtJahre,
      size: "large",
      id: 4,
      linkUrl: "shop/achtelfjaehrige"
    },
    {
      title: "12 & Up",
      imageUrl: zwoelfJahre,
      size: "large",
      id: 5,
      linkUrl: "shop/zwoelfup"
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
