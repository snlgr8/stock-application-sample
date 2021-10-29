import React, { Component } from 'react';

class CreateCollection extends Component {
  render() {
    return (
      <div>
        <label>Enter name of product</label>
        <input type='text' name='collection-name' />

        <label>Enter initial Price</label>
        <input type='number' name='collection-price' />

        <label>Enter quantity</label>
        <input type='number' name='collection-qty' />

        <label>Enter category</label>
        <input type='text' name='collection-category' />

        <label>Select Image</label>
        <img src={null} name='collection-image-avatar' alt='collection' />
      </div>
    );
  }
}

export default CreateCollection;
