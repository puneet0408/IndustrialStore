import { createContext, useContext, useReducer } from "react";
import cardData from "../components/Product/productData";
import backroundImg from "../components/Main/slideData";
import TeamData from "../components/team/TeamData";
import filterItem from "../components/Product/filterItem";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  scrollOn : true,
  // scrollOff:false,
  clickToOpen:true,
  clickToClose:false,
  toggle:false,
  backImg: backroundImg,
  card: cardData,
  filterItem: filterItem,
  team: TeamData,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

 
  const showCurrentTabCatageryNav = (name) => {
    dispatch({ type: "CURRENTTAB", payload: name });
  };

  const wholeCard = () => {
    dispatch({ type: "WHOLEDATA" });
  };

  const MatchedData = (name) => {
    dispatch({ type: "MATCHEDATA", payload: name });
  };

  const Show = () => {
    dispatch({ type: "SHOW" });
  };

  const Hide = () => {
    dispatch({ type: "HIDE" });
  };

  const categaryNavItem = (id) => {
    dispatch({ type: "SHOWFILTEREDITEM", payload: id });
  };
  const toggleFun =()=>{
    dispatch({type:"TOGGLEFUN"})
  }

  // const scrollYDir = () => {
  //   dispatch({ type: "SCROLLYDIR" });
  // };

  return (
    <AppContext.Provider
      value={{
        ...state,
        Show,
        Hide,
        toggleFun,
        showCurrentTabCatageryNav,
        categaryNavItem,
        wholeCard,
        MatchedData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
