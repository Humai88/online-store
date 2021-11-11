import React, { ChangeEvent, Component } from "react";
import { CurrencyQueryResponse } from "../../grapgQL/CategoriesResponseType";
import { AppStore } from "../../redux/store/store";
import { getCurrenciesTC } from "../../redux/reducers/shopReducer";
import { connect } from "react-redux";
import { setCurrentCurrencyAC } from "../../redux/actions/shopActions";

class Currencies extends Component<CurrenciesPropsType, CurrenciesStateType> {
  constructor(props: CurrenciesPropsType) {
    super(props);
    this.state = {
      currentCurrency: "USD",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({ currentCurrency: e.currentTarget.value });
    localStorage.setItem("currency", e.currentTarget.value);
  }
  componentDidMount() {
    this.props.getCurrenciesTC();
    this.props.setCurrentCurrencyAC(this.state.currentCurrency);
    const storedCurrency = localStorage.getItem("currency");
    this.setState({ currentCurrency: storedCurrency ? storedCurrency : "USD" });
  }
  componentDidUpdate(
    prevProps: CurrenciesPropsType,
    prevState: CurrenciesStateType
  ) {
    if (this.state.currentCurrency !== prevState.currentCurrency) {
      this.props.setCurrentCurrencyAC(this.state.currentCurrency);
    }
  }
  render() {
    return (
      <>
        <select value={this.state.currentCurrency} onChange={this.handleChange}>
          {this.props.currencies.map((c) => {
            if (c == "USD") {
              return (
                <option value={c} key={c}>
                  &#36;
                </option>
              );
            }
            if (c == "GBP") {
              return (
                <option value={c} key={c}>
                  &#163;
                </option>
              );
            }
            if (c == "AUD") {
              return (
                <option value={c} key={c}>
                  A&#36;
                </option>
              );
            }
            if (c == "JPY") {
              return (
                <option value={c} key={c}>
                  &#165;
                </option>
              );
            }

            if (c == "RUB") {
              return (
                <option value={c} key={c}>
                  &#8381;
                </option>
              );
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
type CurrenciesStateType = {
  currentCurrency: string;
};
export default connect(mapStateToProps, {
  getCurrenciesTC,
  setCurrentCurrencyAC,
})(Currencies);
// Types
type MapDispatchType = {
  getCurrenciesTC: () => void;
  setCurrentCurrencyAC: (currency: string) => void;
};
type CurrenciesPropsType = CurrencyQueryResponse & MapDispatchType;
