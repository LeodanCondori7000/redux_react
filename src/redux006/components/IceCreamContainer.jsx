// import { connect } from "react-redux";
// import { buyIceCream } from "../redux";

// function IceCreamContainer(props) {
//   const { numberOfIceCreams, buyIceCream } = props;
//   return (
//     <div>
//       <h2>Number of ice creams: {numberOfIceCreams}</h2>
//       <button onClick={buyIceCream}>Buy Ice Cream</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     numberOfIceCreams: state.iceCream.numberOfIceCreams,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyIceCream: () => dispatch(buyIceCream()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

// hooks version
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const numberOfIceCreams = useSelector((state) => state.iceCream.numberOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams: {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default IceCreamContainer;