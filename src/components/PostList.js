import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div>PostList</div>
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default connect(
  null,
  { fetchPosts }
)(PostList);
