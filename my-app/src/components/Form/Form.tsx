import React, { useState } from "react";
import './Form.css';
import Switcher from "./Switcher/Switcher";
import DatePicker from "./DatePicker/DatePicker";
import NameInput from "./NameInput/NameInput";
import FileInput from "./FileInput/FileInput";
import LocationSelect from "./LocationSelect/LocationSelect";
import SquareInput from "./SquareInput/SquareInput";
import Checkbox from "./Checkbox/Checkbox";
import PriceInput from "./PriceInput/PriceInput";
import RenderCard from './RenderCard/RenderCard';
export interface IState {
    switcherValue: boolean;
    locationValue: string;
    nameInputValue: string;
    squareInputValue: string;
    priceInputValue: string;
    dateInputValue: string;
    checkboxValue: boolean;
    arrayOfCards: any[];
    fileInputValue: string;
    errorValidation: boolean;
    errorMessage: string,
}
class Form extends React.Component {
    state: IState;
    constructor() {
        super('');
        this.state = {
            locationValue: 'not chosen',
            switcherValue: false,
            nameInputValue: '',
            squareInputValue: '',
            priceInputValue: '',
            dateInputValue: '',
            checkboxValue: false,
            arrayOfCards: [],
            fileInputValue: 'no choosen file',
            errorValidation: false,
            errorMessage: '',
        };
        this.onSetStateLocation = this.onSetStateLocation.bind(this);
        this.onSetStateNameInput = this.onSetStateNameInput.bind(this);
        this.onSetStateSquareInput = this.onSetStateSquareInput.bind(this);
        this.onSetStatePriceInput = this.onSetStatePriceInput.bind(this);
        this.onSetStateDateInput = this.onSetStateDateInput.bind(this);
        this.onSetStateFileInput = this.onSetStateFileInput.bind(this);
    }


    OnSetStateSwicher() {
        this.setState({
            switcherValue: !this.state.switcherValue
        });
    }
    OnSetStateCheckbox() {
        this.setState({
            checkboxValue: !this.state.checkboxValue
        });
    }

    onSetStateLocation(value: string) {
        this.setState({
            locationValue: value
        });
    }
    onSetStateNameInput(value: string) {
        this.setState({
            nameInputValue: value
        });
    }
    onSetStateSquareInput(value: string) {
        this.setState({
            squareInputValue: value
        });
    }
    onSetStatePriceInput(value: string) {
        this.setState({
            priceInputValue: value
        });
    }
    onSetStateDateInput(value: string) {
        this.setState({
            dateInputValue: value
        });
    }
    onSetStateFileInput(value: string) {
        this.setState({
            fileInputValue: value
        });

    }

    onClearState() {
        this.setState({
            locationValue: 'not chosen',
            switcherValue: false,
            nameInputValue: '',
            squareInputValue: '',
            priceInputValue: '',
            dateInputValue: '',
            checkboxValue: false,
            fileInputValue: 'no choosen file',
        });
    }
    onSetArrayOfCards = () => {
        const { arrayOfCards, locationValue, switcherValue,
            nameInputValue, squareInputValue, priceInputValue, dateInputValue, checkboxValue, fileInputValue } = this.state
        if (locationValue !== 'not chosen' && dateInputValue && nameInputValue && squareInputValue && fileInputValue) {
            const item = {
                locationValue,
                switcherValue,
                nameInputValue,
                squareInputValue,
                priceInputValue,
                dateInputValue,
                checkboxValue,
                fileInputValue,
            }
            const arr = []
            arr.push(...arrayOfCards, item)
            this.setState({
                arrayOfCards: arr
            });
            this.setState({
                errorValidation: false,
            })
            this.onClearState()
            alert('Карточка добавлена')
        }
        else {
            this.setState({
                errorValidation: true,
                errorMessage: `${locationValue === 'not chosen' ? 'Заполните поле локации' : ''},${!dateInputValue ? 'Заполните поле даты' : ''},${!nameInputValue ? 'Заполните поле названия' : ''},${!squareInputValue ? 'Заполните поле площади' : ''}, ${!fileInputValue ? 'Заполните поле фото' : ''},  ${!priceInputValue ? 'Заполните поле цены' : ''} `
            })
        }
    }


    onDisabledButton = () => {
        const {
            nameInputValue, squareInputValue, dateInputValue, fileInputValue,
        } = this.state
        if (dateInputValue || nameInputValue || squareInputValue || fileInputValue) {
            return true
        } else {
            return false
        }
    }
    render(): React.ReactNode {
        const {
            switcherValue,
            checkboxValue,
            arrayOfCards,
            fileInputValue,
            nameInputValue,
            locationValue,
            squareInputValue,
            errorValidation,
            priceInputValue,
            dateInputValue,
            errorMessage,
        } = this.state
        const errorMesageSplitten = errorMessage.split(',')
        return (
            <div className='form-cards-container'>
                <div className="form">
                    <h2 className='form-title'>Creating a card</h2>
                    <div> {errorValidation && errorMesageSplitten.map(item => {
                        return <p className='text-error'>{item}</p>
                    })}</div>

                    <form className="form-inputs">
                        <FileInput onSetStateFileInput={this.onSetStateFileInput}
                            fileInputValue={fileInputValue} />
                        <NameInput
                            onSetStateNameInput={this.onSetStateNameInput}
                            nameInputValue={nameInputValue}
                        />
                        <LocationSelect
                            onSetStateLocation={this.onSetStateLocation}
                            locationValue={locationValue}
                        />
                        <SquareInput
                            squareInputValue={squareInputValue}
                            onSetStateSquareInput={this.onSetStateSquareInput}
                        />
                        <Checkbox
                            checkboxValue={checkboxValue}
                            OnSetStateCheckbox={() => this.OnSetStateCheckbox()}
                        />
                        <PriceInput
                            onSetStatePriceInput={this.onSetStatePriceInput}
                            priceInputValue={priceInputValue}
                        />
                        <div className='swit-date-container'>
                            <Switcher
                                switcherValue={switcherValue}
                                OnSetStateSwicher={() => this.OnSetStateSwicher()}
                            />
                            <DatePicker onSetStateDateInput={this.onSetStateDateInput}
                                dateInputValue={dateInputValue}
                            />

                        </div>
                        <div className={!this.onDisabledButton() ? 'disabled submit-input' : 'submit-input'} onClick={this.onSetArrayOfCards}>SUBMIT</div>
                    </form>
                </div>
                {arrayOfCards.length && arrayOfCards.map(item => {
                    return <RenderCard
                        switcherValue={item.switcherValue}
                        nameInputValue={item.nameInputValue}
                        locationValue={item.locationValue}
                        squareInputValue={item.squareInputValue}
                        priceInputValue={item.priceInputValue}
                        dateInputValue={item.dateInputValue}
                        fileInputValue={item.fileInputValue}
                    />
                })}
            </div >
        )
    };

}

export default Form;