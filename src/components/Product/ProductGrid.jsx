
import {useState} from "react"
import styled from "styled-components";
import { Skeleton } from 'antd';
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const SkeletonCard = () => {
  return (
    <Card>
      <Skeleton.Image active style={{ width: "100%", height: "auto" }} />
      <Content>
        <Skeleton.Input active size="small" style={{ width: "70%" }} />
        <Skeleton.Input active size="small" style={{ width: "40%" }} />
      </Content>
    </Card>
  );
};

const ProductGrid = ({ onAdd }) => {
  const [loading] = useState(false); 

  return (
    <Grid>
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : products.map((item) => (
            <ProductCard key={item.id} data={item} onAdd={onAdd} />
          ))}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 12px;
`;

const Content = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
