import * as React from "react";
import { FetchImagesResponse } from "../../../api-types/response";

interface Props {
  images: FetchImagesResponse;
}

export const IndexTemplate = (props: Props) => (
  <ul>
    {props.images.data.images.map((image, index) => (
      <li key={`image-list-${index}`}>
        <img src={image.url} />
      </li>
    ))}
  </ul>
)