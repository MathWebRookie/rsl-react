import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState } from "react";
// 类组件
class TodoItem extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                {item} <button>x</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
class TodoList extends Component {
  state = {
    list: ["html", "css", "js"],
    inputVal: "",
  };

  handleChange = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
    console.log(this.state.inputVal);
  };

  handleClick = () => {};

  render() {
    return (
      <div>
        <header>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>提交</button>
        </header>

        <section>
          <TodoItem list={this.state.list} />
        </section>
      </div>
    );
  }
}

const songs = [
  { id: 1, name: "爷爷泡的茶" },
  { id: 2 },
  { id: 3, name: "Things you said" },
];

// 函数组件
function Licon({ name = "Default Name", value, handleClick }) {
  return (
    <li onClick={handleClick}>
      {name}
      {value}
    </li>
  );
}
Licon.propTypes = {
  name: PropTypes.string.isRequired, // 修正类型为字符串
};

function App() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <div className="app">
      <TodoList></TodoList>
      <h2>hello React</h2>
      <ul>
        {songs.map((item) => {
          return (
            <Licon
              key={item.id}
              name={item.name}
              value={value}
              handleClick={handleClick}
            ></Licon>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
