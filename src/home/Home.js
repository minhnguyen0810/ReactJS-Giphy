import React, { Component } from "react";
import Pagination from "./../components/Pagination";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import * as actions from "../redux/actions/index";
import Giphys from "../components/Giphys";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 9,
      currentPage: 0,
    };
  }

  componentDidMount() {
    this.props.getListGiphys();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.listGiphys && nextProps.listGiphys.length > 0) {
      this.getData(nextProps.listGiphys);
    }
  }
  // Filter listGiphys to send to Giphys component
  getData = (res) => {
    if (res && res.length > 0) {
      let data = res;
      let slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        postData: slice,
      });
    }
  };
  // Handle page number click
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.getData(this.props.listGiphys);
      }
    );
  };

  render() {
    return (
      <Container maxWidth="lg">
        <h1 id="top" style={{ marginTop: 70, textAlign: "center" }}>
          300 GIF images are trending on GIPHY
        </h1>
        <Giphys giphys={this.state.postData} />
        <div className="wrap__pagination">
          <Pagination
            pageCount={this.state.pageCount}
            handleClick={(e) => {
              this.handlePageClick(e);
            }}
          />
        </div>
      </Container>
    );
  }
}

// Get props listGiphys from giphyReducer(Redux)
const mapStateToProps = (state) => {
  return {
    listGiphys: state.giphysReducer.listGiphys,
  };
};

// Dispatch action actGetListGiphys to save data which recieved from API of GIPHY to save into store.
const mapDispatchToProps = (dispatch) => {
  return {
    getListGiphys: () => {
      dispatch(actions.actGetListGiphys());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
