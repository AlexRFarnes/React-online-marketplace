// import products from "../../static/products.json";
import connectDb from "../../utils/connectDb";
import Product from "../../models/Product";

connectDb();

export default async (req, res) => {
  const { page, size } = req.query;
  // Convert query string value to number
  const pageNum = Number(page);
  const pageSize = Number(size);
  let products = [];
  const totalDocs = await Product.countDocuments();
  const totalPages = Math.ceil(totalDocs / pageSize);
  console.log(totalPages);
  if (pageNum === 1) {
    products = await Product.find().limit(pageSize);
  } else {
    const skips = pageSize * (pageNum - 1);
    products = await Product.find().skip(skips).limit(pageSize);
  }
  // const products = await Product.find();
  res.status(200).json({ products, totalPages });
};
