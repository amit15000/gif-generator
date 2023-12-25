import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-y-10">
      <h1 className=" bg-white w-11/12 text-center mt-5 text-4xl font-bold py-2 rounded-xl">
        Random Gif
      </h1>
      <Random />
      <Tag />
    </div>
  );
}

export default App;
