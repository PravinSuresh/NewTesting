import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';

const tempArr = [
  {
    fName: "Pravin",
    lName: "Suresh",
    age: 29,
    email: "pravinkps9@gmail.com",
    onlineStatus: true
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render the posts." tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
