import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };

    addItem(e) {
        let itemArr = this.state.items;

        if(this._inputElement.value !== "") {
            itemArr.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArr
            });

            this._inputElement.value = "";

            console.log(itemArr);
        }

        e.preventDefault();
    };

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    };

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                        placeholder="Enter task" />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                    delete={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;