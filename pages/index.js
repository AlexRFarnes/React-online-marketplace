import axios from "axios";
import React from "react";
import ProductList from "../components/Index/ProductList";
import ProductPagination from "../components/Index/ProductPagination";
import baseUrl from "../utils/baseUrl";

function Home({ products, totalPages }) {
  return (
    <>
      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </>
  );
}

// Instead of fetching data after the Component is mounted (client side) like with React.useEffect(), getInitialProps allows to perform the side effect (fetch) on the server side
Home.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 6;
  const url = `${baseUrl}/api/products`;
  const payload = {
    params: {
      page,
      size,
    },
  };
  // fetch data on server
  const response = await axios.get(url, payload);
  // return response data as an object
  // note: this object will be merged with existing props
  return response.data;
};

export default Home;
