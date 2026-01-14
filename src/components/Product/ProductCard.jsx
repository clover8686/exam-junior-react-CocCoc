import styled from "styled-components"
import { formatPrice } from "../../utils/formatPrice"
import { ShoppingCartOutlined } from '@ant-design/icons';

const ProductCard = ({ data, onAdd }) => {

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    e.currentTarget.style.transformOrigin = `${x}% ${y}%`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transformOrigin = 'center'
  }

  return (
    <Card>
      <ImageWrapper>
        <Image
          src={data.image}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </ImageWrapper>

      <InfoRow>
        <Info>
          <Name>{data.name}</Name>
          <Price>{formatPrice(data.price)}</Price>
        </Info>

        <AddBtn onClick={() => onAdd(data)}>
          <ShoppingCartOutlined />
        </AddBtn>
      </InfoRow>
    </Card>
  )
}

export default ProductCard

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 12px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 12px;
  overflow: hidden;
  cursor: zoom-in;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.3);
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* gap: 4px; */
`;

export const Name = styled.p`
  font-weight: 600;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
  padding: 0;
  text-indent: 0;
  line-height: normal;
  align-self:start;
`;

export const AddBtn = styled.button`
  border: none;
  background: #f3f3f3;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
