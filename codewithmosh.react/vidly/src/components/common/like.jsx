import React, { Component } from 'react';

class Like extends Component {
  state = { liked: false };

  toggleLike = () => {
    this.setState(prevState => ({ liked: !prevState.liked }));
  };

  render() {
    return (
        <i 
            className={this.state.liked ? "fa fa-heart": "fa fa-heart-o"}
            onClick={this.toggleLike}
            style={{
                fontSize: "30px",
                color: this.state.liked? "red":"gray",
                cursor: "pointer"
            }}
        ></i>
    );
  }
}

export default Like;
