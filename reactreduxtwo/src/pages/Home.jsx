import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1000 },
  { id: 3, name: "Watch", price: 200 },
  { id: 4, name: "Headphones", price: 150 },
];

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Home;