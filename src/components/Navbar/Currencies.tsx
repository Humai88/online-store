import { QueryResult } from "@apollo/client";
import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { GET_CURRENCIES } from "../../grapgQL/queries";
import { Spinner } from "../../UI-kit/Spinner";

export class Currencies extends Component {
  render() {
    return (
      <>
        <Query query={GET_CURRENCIES}>
          {(result: QueryResult<CurrencyQueryResponse>) => {
            const { loading, error, data } = result;
            if (loading) return <Spinner />;
            if (error) console.log(error);
            return (
              <select>
                {data?.currencies.map((c) => {
                  return <option key={c}>{c}</option>;
                })}
              </select>
            );
          }}
        </Query>
      </>
    );
  }
}

// Types
interface CurrencyQueryResponse {
  currencies: string[];
}
