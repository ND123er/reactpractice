
import { useGetProductsQuery } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home(){
  const { data, isLoading } = useGetProductsQuery();

  if(isLoading) return <p className="p-4">Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {data.map(p=><ProductCard key={p.id} product={p} />)}
    </div>
  );
}
