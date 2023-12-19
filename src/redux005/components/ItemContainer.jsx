import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item: {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);

//hooks approach
// import { useSelector, useDispatch } from "react-redux";
// import { buyCake, buyIceCream } from "../redux";

// function ItemContainer({ cake }) {
//   const buyItem = useDispatch(); // Get dispatch function
//   const itemState = useSelector((state) =>
//     cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams
//   ); // Use useSelector for both cake and ice cream based on prop

//   const buyHandler = () => {
//     if (cake) {
//       buyItem(buyCake()); // Dispatch cake action if cake prop is true
//     } else {
//       buyItem(buyIceCream()); // Dispatch ice cream action if cake prop is false
//     }
//   };

//   return (
//     <div>
//       <h2>Item: {itemState}</h2>
//       <button onClick={buyHandler}>Buy Items</button>
//     </div>
//   );
// }

// export default ItemContainer;
