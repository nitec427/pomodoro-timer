import Header from "./Header";
import Card from "./Card";
import Tasks from "./Tasks";
const Button = (props) => {
  return (
    <div className="h-screen bg-violet-700 flex justify-center">
      <div className="h-screen w-1/2 bg-violet-700 grid grid-rows-custom">
        <Header />
        <Card />
        {/* Tasks Component */}
        {/* <Tasks /> */}
      </div>
    </div>
  );
};

export default Button;
