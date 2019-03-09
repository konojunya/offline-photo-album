import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../../context/reducer";
import { FetchImageByIdResponse } from "../../api-types/response";
import { pageBuild } from "../../utils/pageBuild";
import { ReduxAPIStruct } from "redux-api-struct";
import { withRouter, match } from "react-router";
import { DetailTemplate } from "../../components/Templates/Detail";
import { fetchImageById } from "../../context/modules/Image/actions/FetchImageById";
import { dispatchable } from "../../context/utils/DispatchUtils";

interface Props {
  detail: ReduxAPIStruct<FetchImageByIdResponse>;
  fetchImageById: typeof fetchImageById;
  match: match<{ id: string }>;
}

class Detail extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchImageById(this.props.match.params.id);
  }
  public render() {
    const { detail } = this.props;
    return pageBuild(detail, <DetailTemplate detail={detail.data} />);
  }
}

export default withRouter(connect(
  (state: RootState) => ({
    detail: state.imageReducer.detail
  }),
  dispatch => ({
    fetchImageById: dispatchable(dispatch, fetchImageById)
  })
)(Detail) as any);
