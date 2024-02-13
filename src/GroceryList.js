import { Component } from "react";
import Checked from './Checked.png';

export class GroceryList extends Component {
    state = {
        input: "",
        GroceryList: []
        }

onChangeEvent(e) {
    this.setState({userInput: e})
}

addItem(input) {
    if (input === '') {
        alert ("Please enter an item")
    }
    else { 
    let listArray=this.state.GroceryList;
    listArray.push(input);
    this.setState({GroceryList: listArray, userInput: ""})
}
}

deleteItem() {
    let listArray = this.state.GroceryList;
    listArray = [];
    this.setState({GroceryList: listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What do you want to buy today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput}/>
            </div>

            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
                
                <ul className="container">
                    {this.state.GroceryList.map((item, index) =>
                    <li onClick={this.crossedWord} key={index}>
                        <img src={Checked} width="30px" alt="check mark"/>
                        {item}</li>
                        )}
                </ul>
                
                <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                </div>
                </form>
            </div>
        )
    }
}