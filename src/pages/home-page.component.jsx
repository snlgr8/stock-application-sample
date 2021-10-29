import React, { Component } from 'react';
import Collections from '../components/collections/collections.component';
import './home-page.styles.css';

class HomePage extends Component {
  render() {
    return (
      <div className='home-page-container'>
        <h1 className='title'>Collection List</h1>
        <Collections />
      </div>
    );
  }
}

export default HomePage;
