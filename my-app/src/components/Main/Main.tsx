import React from "react";
import './Main.css';
import apartmentData from '../../data/data';
import Card from './Card/Card';


interface IState {
  stateInputValue: string
}

interface ICard {
  image: string,
  name: string,
  location: string,
  square: string
  rooms: string,
  price: string,
}
class Main extends React.Component<{}, { stateInputValue: string }> {
  localInputValue: string | null
  state: IState
  apartmentData: ICard[]
  constructor() {
    super('');
    this.localInputValue = localStorage.getItem('searchValue');
    this.apartmentData = apartmentData
    this.state = {
      stateInputValue: this.localInputValue ? this.localInputValue : ''
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);

  }


  onInputchange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      stateInputValue: event.target.value
    });
    localStorage.setItem('searchValue', event.target.value);
  }

  componentDidUpdate(prevState: IState) {
    if (prevState.stateInputValue !== this.state.stateInputValue) {
      this.apartmentData = apartmentData.filter(item => item.name.toUpperCase() === this.state.stateInputValue.toUpperCase())

    }
  }

  onClickSearch() {
    this.apartmentData = apartmentData.filter(item => item.name.toUpperCase() === this.state.stateInputValue.toUpperCase())
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
          </div>
          </div>
        <div className='cards'>
          {this.apartmentData.map((i) => (
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