import axios from "axios";
import React from "react";

function Home({ products }) {
  console.log(products);

  // React.useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = "http://localhost:3000/api/products";
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // }

  return <>home</>;
}

// Instead of fetching data after the Component is mounted (client side) like with React.useEffect(), getInitialProps allows to perform the side effect (fetch) on the server side
Home.getInitialProps = async () => {
  // fetch data on server
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  // return response data as an object
  // note: this object will be merged with existing props
  return { products: response.data };
};

export default Home;
