import React, { ChangeEvent, Component } from "react";
import { CurrencyQueryResponse } from "../../grapgQL/CategoriesResponseType";
import { AppStore } from "../../redux/store/store";
import { getCurrenciesTC } from "../../redux/reducers/shopReducer";
import { connect } from "react-redux";
import { setCurrentCurrencyAC } from "../../redux/actions/shopActions";
import { currencyConverter } from "../../helpers/functions";
import { RequestStatusType } from "../../redux/reducers/appReducer";
import { Spinner } from "../../UI-kit/Spinner";

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
    const { currentCurrency } = this.state;
    const { currencies, status } = this.props;
    return (
      <>
        {status === "loading" && <Spinner />}
        <select value={currentCurrency} onChange={this.handleChange}>
          {currencies.map((c) => {
            return (
              <option
                value={c}
                key={c}
                dangerouslySetInnerHTML={{
                  __html: currencyConverter(c),
                }}
              ></option>
            );
          })}
        </select>
      </>
    );
  }
}

const mapStateToProps = (state: AppStore): MapStateToPropsType => {
  return {
    currencies: state.products.currencies,
    status: state.app.status,
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
type MapStateToPropsType = {
  currencies: string[];
  status: RequestStatusType;
};
type CurrenciesPropsType = CurrencyQueryResponse &
  MapDispatchType &
  MapStateToPropsType;
