import * as React from "react";
import { FetchImagesResponse } from "../../../api-types/response";
import { Link } from "react-router-dom"
import styled from "styled-components";
import LazyLoad from 'react-lazyload';

interface Props {
  images: FetchImagesResponse;
}

const List = styled.ul`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const ListItem = styled.li`
  list-style: none;
  width: 20vw;
  height: 20vw;
  margin: 10px;
`;
const ListItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IndexTemplate = (props: Props) => (
  <List>
    {props.images.data.images.map((image, index) => (
      <Link to={`/${image.id}`} key={`image-list-${index}`}>
        <ListItem>
          <LazyLoad height={100}>
            <ListItemImg src={image.url} />
          </LazyLoad>
        </ListItem>
      </Link>
    ))}
  </List>
)