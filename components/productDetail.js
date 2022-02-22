import React from "react";
export default function ProductDetail({product}) {
    return (
        <React.Fragment>
            {product.fields.productName}
        </React.Fragment>
    )
}