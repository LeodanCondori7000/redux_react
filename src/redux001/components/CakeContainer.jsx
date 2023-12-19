import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  const {numberOfCakes, buyCake} = props
  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

// hooks version
// import { useDispatch, useSelector } from "react-redux";
// import { buyCake } from "../redux";

// function CakeContainer() {
//   const numberOfCakes = useSelector((state) => state.numberOfCakes);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Number of cakes: {numberOfCakes}</h2>
//       <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
//     </div>
//   );
// }

// export default CakeContainer;
