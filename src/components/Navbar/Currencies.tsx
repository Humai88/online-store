import React, { Component } from "react";
import { CurrencyQueryResponse } from "../../grapgQL/CategoriesResponseType";
import { AppStore } from "../../redux/store/store";
import {
  getCurrenciesTC,
  ProductsStateType,
} from "../../redux/reducers/productsReducer";
import { connect } from "react-redux";

class Currencies extends Component<CurrenciesPropsType> {
  componentDidMount() {
    this.props.getCurrenciesTC();
  }
  render() {
    return (
      <>
        <select>
          {this.props.currencies.map((c) => {
            if (c == "USD") {
              return <option key={c}>&#36;</option>;
            }
            if (c == "GBP") {
              return <option key={c}>&#163;</option>;
            }
            if (c == "AUD") {
              return <option key={c}>A&#36;</option>;
            }

            if (c == "JPY") {
              return <option key={c}> &#165;</option>;
            }

            if (c == "RUB") {
              return <option key={c}> &#8381;</option>;
            }
          })}
        </select>
      </>
    );
  }
}

const mapStateToProps = (state: AppStore): CurrencyQueryResponse => {
  return {
    currencies: state.products.currencies,
  };
};
export default connect(mapStateToProps, {
  getCurrenciesTC,
})(Currencies);
// Types
type MapDispatchType = {
  getCurrenciesTC: () => void;
};
type CurrenciesPropsType = CurrencyQueryResponse & MapDispatchType;
