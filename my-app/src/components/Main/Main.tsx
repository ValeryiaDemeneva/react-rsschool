import React, { Component } from "react";
import './Main.css';
import apartmentData from '../../data/data';
import Card from './Card/Card';
import { search } from '../../data/index';


class Main extends React.Component<{}, { stateInputValue: string }> {
  localInputValue: string | null
  constructor() {
    super('');
    this.localInputValue = localStorage.getItem('searchValue');
    this.state = {
      stateInputValue: this.localInputValue ? this.localInputValue : ''
    };
    this.onInputchange = this.onInputchange.bind(this);
  }

  onInputchange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      stateInputValue: event.target.value
    });
    localStorage.setItem('searchValue', event.target.value);
  }

  render(): React.ReactNode {
    const { stateInputValue } = this.state 
    return (
      <div className="main">
        <div className='input-button-conteiner'>
          <div className='search-conteiner'>
            <input
              type="text"
              className="searchBar"
              onChange={this.onInputchange}
              value={stateInputValue}
            />
            <img src={search} className='search-image' ></img>
          </div>
          <button className='search-button'>search</button>
        </div>
        <div className='cards'>
          {apartmentData.map((i) => (
            <Card
              image={i.image}
              name={i.name}
              location={i.location}
              square={i.square}
              rooms={i.rooms}
              price={i.price}
            />
          ))}
        </div>
      </div >
    )
  };


}

export default Main;