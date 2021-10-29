import React, { Component } from 'react';
import { CollectionsData } from '../staticData/sample-test-data';
import './collections.styles.css';
class Collections extends Component {
  state = {
    collections: CollectionsData,
  };
  render() {
    const { collections } = this.state;

    return (
      <div className='collection-item-container'>
        {collections.map((collectionItem) => (
          <div key={collectionItem.id} className='collection-item'>
            <span className='collection-item-name'>{collectionItem.name}</span>
            <span className='collection-item-price'>
              {collectionItem.price} Rs
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Collections;
