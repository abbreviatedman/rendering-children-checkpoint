import Card from "./Card";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";
import ChildComponentC from "./ChildComponentC";
import ParentComponent from "./ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent>
        <ChildComponentA />
        <ChildComponentB />
        <ChildComponentC />
        <p>This is another child element.</p>
      </ParentComponent>
      <Card>
        <h2>Card Header</h2>
        <p>This is some content inside the card!</p>
        <ChildComponentB />
      </Card>
      <Card>
        <h2>Facts about bees</h2>
        <p>Bees are very, very, very factual.</p>
      </Card>
    </div>
  );
}

export default App;
