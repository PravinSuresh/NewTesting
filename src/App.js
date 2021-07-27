import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';
import './app.scss';

const tempArr = [
  {
    fName: "Pravin",
    lName: "Suresh",
    age: 29,
    email: "pravinkps9@gmail.com",
    onlineStatus: true
  }
];

const initialState = {
  hideBtn: false
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.fetch = this.fetch.bind(this);
    console.log(props);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    this.setState(prevState => ({ hideBtn: !prevState.hideBtn }));
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    const { posts } = this.props;
    const { hideBtn } = this.state;
    return (
      <div className="App" data-test="appy">
        <Header />
        <section className="main">
          <Headline header="Posts" desc={posts.length === 0 ? "Click the button to see the posts" : "Below are the posts:"} tempArr={tempArr} />
          {!hideBtn && <SharedButton {...configButton} />}
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => <ListItem key={index} title={post.title} desc={post.body} />)}
            </div>
          }
        </section>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { posts: state.postReducer }
};

export default connect(mapStateToProps, { fetchPosts })(App);
