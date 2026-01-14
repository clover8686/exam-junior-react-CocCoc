import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from "styled-components"

const CartButton = ({ count, onClick }) => {
  return (
    <Button onClick={onClick}>
      <span>Giỏ hàng</span>
      <ShoppingCartOutlined />
      <Badge>{count}</Badge>
    </Button>
  )
}
export default CartButton

export const Button = styled.button`
  position: fixed;     
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 10px;
  background: white;
  border: 2px solid #222;
  cursor: pointer;
  font-size: 14px;
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 20px;
  height: 20px;
  background: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`;


