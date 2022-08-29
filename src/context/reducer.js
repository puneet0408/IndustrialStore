const reducer = (state, action) => {
  // switch (action.type) {
  //   case "SHOW":
  //     return {
  //       ...state,
  //       scrollOn:
  //     };
  //   case "HIDE":
  //     return {
  //       ...state,
  //       scrollOn: false,
  //     };
  //   case "CURRENTTAB":
  //     return {
  //       showCurrentTabClickFromCategeryNav: state.card.map((machineDetail) => {
  //         if (machineDetail.productName === action.payload) {
  //           return machineDetail.productName;
  //         }
  //       })
  //     };
  //     case"TOGGLE" :
  //     return {
  //        ...state,
  //        scrollOn:state.scrollOn(state.scrollOn? false : true)
  //     }

  //     case "WHOLEDATA":
  //       return state.card;

  //       case "MATCHEDATA":
  //         return state.card.filter((categary)=> categary.productName === action.payload )

  //   default:
  //     return state;
  // }
  if (action.type === "SHOW") {
    return {
      ...state,
      scrollOn: true,
    };
  }
  if (action.type === "HIDE") {
    return {
      ...state,
      scrollOn: false,
    };
  }
  if (action.type === "TOGGLEFUN") {
    return { toggle: !state.toggle}
  }
};
export default reducer;
