import { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const { numberOfCakes, buyCake } = props;
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
      <button onClick={()=>buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);

//hooks approach
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { buyCake } from "../redux";

// function NewCakeContainer() {
//   const numberOfCakes = useSelector((state) => state.cake.numberOfCakes); // replace mapStateToProps
//   const dispatch = useDispatch(); // replace mapDispatchToProps

//   const [number, setNumber] = useState(1);

//   const buyCakes = () => dispatch(buyCake(number));

//   return (
//     <div>
//       <h2>Number of cakes: {numberOfCakes}</h2>
//       <input
//         type="text"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <button onClick={buyCakes}>Buy {number} Cake</button>
//     </div>
//   );
// }

// export default NewCakeContainer;
