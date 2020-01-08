import React, { Component } from "react";
import MenuItem from "../menu-item/Menu-item";
import "./directory.styles.scss";
import babyImage from "../../assets/images/baby.jpg";
import zweiJahre from "../../assets/images/zweiJahre.jpg";
import fünfJahre from "../../assets/images/fünfJahre.jpg";
import achtJahre from "../../assets/images/achtJahre.jpg";
import zwoelfJahre from "../../assets/images/zwoelfJahre.jpg";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
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
          linkUrl: "shop/fünfsieben"
        },
        {
          title: "8 - 11 jährige kinder",
          imageUrl: achtJahre,
          size: "large",
          id: 4,
          linkUrl: "shop/achtelf"
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
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
