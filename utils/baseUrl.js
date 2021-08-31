const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://react-commerce-mu.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
