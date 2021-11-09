import { QueryResult } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../../grapgQL/queries";
import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import styles from "./PDP.module.scss";
import { Button } from "../../UI-kit/Button";
import { Spinner } from "../../UI-kit/Spinner";
import { RouteComponentProps } from "react-router-dom";
import { SquareBtn } from "../../UI-kit/SquareBtn";

export class PDP extends Component<PDPPropsType> {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Query query={GET_PRODUCT_BY_ID} variables={{ id }}>
          {(result: QueryResult<PDPQueryResponse>) => {
            const { loading, error, data } = result;
            if (loading) return <Spinner />;
            if (error) console.log(error);
            return (
              <div className={styles.wrapper}>
                <div className={styles.imgPreviewWrapper}>
                  {data?.product.gallery.slice(1).map((img) => {
                    return (
                      <img key={img} className={styles.imgPreview} src={img} />
                    );
                  })}
                </div>
                <div className={styles.mainImgWrapper}>
                  <img
                    className={styles.mainImg}
                    src={data?.product.gallery[0]}
                  />
                </div>
                <div className={styles.descrWrapper}>
                  <h2 className={styles.brand}>{data?.product.brand}</h2>
                  <h3 className={styles.name}>{data?.product.name}</h3>

                  {data?.product.attributes.map((attr) => {
                    return (
                      <>
                        {/* <h3>{attr.type}</h3> */}
                        <div className={styles.attrName}>{attr.name}</div>
                        <div className={styles.attrValuesWrapper}>
                          {attr.items.map((item) => {
                            return (
                              <SquareBtn className={styles.attrValue}>
                                {item.displayValue}
                              </SquareBtn>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}
                  <h2 className={styles.attrName}>Price:</h2>
                  <div className={styles.price}>
                    {data?.product.prices[0].currency}
                    {data?.product.prices[0].amount}
                  </div>
                  <Button
                    disabled={!data?.product.inStock}
                    className={styles.btn}
                  >
                    add to cart
                  </Button>
                  {data?.product && (
                    <div
                      className={styles.productDescr}
                      dangerouslySetInnerHTML={{
                        __html:
                          data.product.description.length > 300
                            ? `${data.product.description.substring(0, 300)}...`
                            : data.product.description,
                      }}
                    />
                  )}
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

//Types
type PDPPropsType = RouteComponentProps<PathParamsType>;
type PathParamsType = {
  id: string;
};
interface PDPQueryResponse {
  product: Product;
}
interface Product {
  id: string;
  name: string;
  inStock: boolean;
  prices: Price[];
  gallery: string[];
  description: string;
  category: string;
  attributes: AttributeSet[];
  brand: string;
}

interface Price {
  currency: string;
  amount: number;
}

interface AttributeSet {
  id: string;
  name: string;
  type: string;
  items: Attribute[];
}
interface Attribute {
  displayValue: string;
  value: string;
  id: string;
}
