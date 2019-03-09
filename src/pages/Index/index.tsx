import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../context/reducer";
import { ReduxAPIStruct } from "redux-api-struct";
import { FetchImagesResponse } from "../../api-types/response";
import { dispatchable } from "../../context/utils/DispatchUtils";
import { fetchImages } from "../../context/modules/Image/actions/FetchImages";
import { pageBuild } from "../../utils/pageBuild";
import { IndexTemplate } from "../../components/Templates/Index";

interface Props {
  images: ReduxAPIStruct<FetchImagesResponse>
  fetchImages: typeof fetchImages;
}

class Index extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchImages({
      limit: 20
    });
  }

  public render() {
    const { images } = this.props;
    return pageBuild(images, <IndexTemplate images={images.data} />);
  }
}

export default withRouter(connect(
  (state: RootState) => ({
    images: state.imageReducer.images
  }),
  (dispatch => ({
    fetchImages: dispatchable(dispatch, fetchImages)
  }))
)(Index) as any)