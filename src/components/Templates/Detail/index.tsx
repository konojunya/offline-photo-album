import * as React from "react";
import { FetchImageByIdResponse } from "../../../api-types/response";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  detail: FetchImageByIdResponse;
}

const Head1 = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  margin: 10px;
`;

const ImageWrap = styled.div`
  text-align: center;
  img {
    max-width: 700px;
  }
`;

const ToTopLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  margin: 10px;
  text-align: center;
`;

export const DetailTemplate = (props: Props) => {
  const { data } = props.detail;
  return (
    <>
      <Head1>{data.title}</Head1>
      <Description>{data.description}</Description>
      <ImageWrap>
        <img src={data.url} alt={data.title} />
      </ImageWrap>
      <ToTopLink to="/">戻る</ToTopLink>
    </>
  );
};
