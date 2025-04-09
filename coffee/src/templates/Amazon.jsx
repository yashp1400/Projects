
import React from 'react';
// import list from '../data';
import './amazon.css';
import Cards from './Cards';

const Amazon = ({handleClick}) => {
    const coffees =[
        {
          id: 1,
          name: "MILK COFFEE",
          image: "images/cf8.jpeg",
          amount: 1,
          price:100
        },
        {
          id: 2,
          name: "BLACK COFFEE",
          image: "images/cf7.webp",
          amount: 1,
          price:100
        },
        {
          id: 3,
          name: "IRISH COFFEE",
          image: "images/cf1.jpeg",
          amount: 1,
          price:100
        },
        {
          id: 4,
          name: "TOFFEE NUT",
          image: "images/cf2.jpg",
          amount: 1,
          price:100
        },
        {
          id: 5,
          name: "VANILLA",
          image: "images/cf3.jpg",
          amount: 1,
          price:100
        },
        {
          id: 6,
          name: "DOUBLE CHOC MOCHA",
          image: "images/cf4.jpg",
          amount: 1,
          price:100
        },
        {
          id: 7,
          name: "CAPPUCCINO",
          image: "images/cf5.jpeg",
          amount: 1,
          price:100
        },
        {
          id: 8,
          name: "CAPPUCCINO UNSWEETENED",
          image: "images/cf6.jpg",
          amount: 1,
          price:100
        },
        {
          id: 9,
          name: "HAZELNUT COFFEE",
          image: "images/cf9.jpg",
          amount: 1,
          price:100
        },
        
      ];
  return (
    
        <div className="gallery_section layout_padding" id='Order'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="gallery_taital">Order Our Coffee</h1>
            </div>
          </div>
          <div className="">
          <div className="gallery_container">
  <div className="gallery_section_2">
    <div className="row">

        {
            coffees.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
        </div>
  </div>
</div>
</div>
        </div>
        </div>

  )
}

export default Amazon
