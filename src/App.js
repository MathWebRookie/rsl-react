import PropTypes from "prop-types";

const songs = [
  { id: 1, name: "爷爷泡的茶" },
  { id: 2, name: "rsl" }, // 修正为字符串
  { id: 3, name: "Things you said" },
];

function Licon(props) {
  return <li>{props.name}</li>;
}

Licon.propTypes = {
  name: PropTypes.string.isRequired, // 修正类型为字符串
};

function App() {
  return (
    <div className="app">
      <h2>hello React</h2>
      <ul>
        {songs.map((item) => {
          return <Licon key={item.id} name={item.name}></Licon>;
        })}
      </ul>
    </div>
  );
}

export default App;