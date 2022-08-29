import React, { useState } from "react";
import Card from "./Card";
import productData from "./productData";
import "./ourProduct.css";

import filterItem from "./filterItem";

export default function MainFile(props) {
  const [
    showCurrentTabClickFromCatageryNav,
    setShowCurrentTabClickFromCatageryNav,
  ] = useState();
  const [currentProductToshow, setCurrentProductToShow] = useState(productData);

  const [SearchbarOpen, setSearch] = useState(false);

  const [productSearchByUser, setproductSearchByUser] = useState("");

  const [activeFilter, setActiveFilter] = useState("");

  // scroll-y ----------------on filter bar

  const [scrollXOnCategeryNav, setScrollXOnCategeryNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrollXOnCategeryNav(true);
    } else {
      setScrollXOnCategeryNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // scroll ends ----------------------

  const tabChange = (id, name, nav) => () => {
    setActiveFilter(nav);
    setShowCurrentTabClickFromCatageryNav(name);
    const index = filterItem.findIndex((item) => item.id === id);
    if (index === 0) {
      setCurrentProductToShow(productData);
    } else {
      setCurrentProductToShow(
        productData.filter((categary) => categary.ProductName === name)
      );
    }
    console.log(index);
  };
  function toggleSearch() {
    return setSearch((prev) => !prev);
  }

  let product = currentProductToshow
    .filter((user) =>
      user.Machine.toLocaleLowerCase().includes(productSearchByUser)
    )
    .map((product) => <Card {...product} />);

  return (
    <div className="product-page">
      <div className={scrollXOnCategeryNav ? "filter-Scroll" : "Filter"}>
        <div className="ProductNav">
          <div className="components">
            {filterItem?.map((nav, id) => {
              return (
                <h3
                  className={
                    nav === activeFilter
                      ? "yesActive filter-item"
                      : "filter-item"
                  }
                  onClick={tabChange(nav.id, nav.text, nav)}
                >
                  {nav.text}
                </h3>
              );
            })}
          </div>
          <div onClick={toggleSearch}>
            {SearchbarOpen ? (
              <i
                style={{
                  fontSize: "30px",
                  color: "#fff",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                class="ri-close-line"
              ></i>
            ) : (
              <i
                style={{
                  fontSize: "30px",
                  color: "#fff",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                class="ri-search-line"
              ></i>
            )}
          </div>
        </div>
      </div>

      {SearchbarOpen ? (
        <div class="searchBar">
          {" "}
          <div className="search">
            <input
              type="text"
              placeholder="Search Products"
              onChange={(event) => setproductSearchByUser(event.target.value)}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="mainHeadingProd">
        <h1 className="main-textProd">
          {" "}
          {showCurrentTabClickFromCatageryNav}{" "}
        </h1>
      </div>

      <div className="mainProd">{product}</div>
    </div>
  );
}
