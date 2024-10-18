import styles from "./page.module.css";
import FilterProducts from "@/components/FilterProducts/FilterProducts";
import Product from "@/components/Product/Product";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";
import Category from "@/components/Category/Category";

export default function Home() {
  return (
    <main className={styles.main}>
      <Category />
      <FilterProducts />
      {/* <Product /> */}
      <TrendingProducts />
    </main>
  );
}
