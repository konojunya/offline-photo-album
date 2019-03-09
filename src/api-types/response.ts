interface Image {
  location: {
    lat: number;
    lng: number;
  };
  id: string;
  url: string;
  title: string;
  description: string;
  postDatetime: number;
  width: number;
  height: number;
}

export interface FetchImagesResponse {
  ok: boolean;
  data: {
    images: Image[];
  };
}

export interface FetchImageByIdResponse {
  ok: boolean;
  data: Image;
}
