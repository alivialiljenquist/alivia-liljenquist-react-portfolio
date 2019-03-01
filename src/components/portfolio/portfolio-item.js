import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    //Data we will need:
    // - Backgroud img : thumb_img_url
    // - Logo
    // - description : description
    // - id: id
    const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div>
      <img src={thumb_image_url} />
      <img src={logo} />
      <div>{description}</div>

      <Link to={`/portfolio/${props.slug}`}>Link</Link>
    </div>
  );
}