import axios from "axios";
import React from "react";
import ProductList from "../components/Index/ProductList";
import baseUrl from "../utils/baseUrl";

function Home({ products }) {
  return <ProductList products={products} />;
}

// Instead of fetching data after the Component is mounted (client side) like with React.useEffect(), getInitialProps allows to perform the side effect (fetch) on the server side
Home.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  // return response data as an object
  // note: this object will be merged with existing props
  return { products: response.data };
};

export default Home;
