import {fetchProducts} from "../util/contentful";
import React from "react";
import ProductThumbnail from "../components/productThumbnail";
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const { products } = props;
  return (
      <React.Fragment >
        <div className="container">
          {products.map(e=> (<ProductThumbnail key={e.sys.id} product={e}/>))}
        </div>
      </React.Fragment>
  )
}
export async function getStaticProps({ preview = false }) {
  const products = await fetchProducts()
  return {props: {products}}
}