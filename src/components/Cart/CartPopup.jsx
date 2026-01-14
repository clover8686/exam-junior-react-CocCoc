import styled from 'styled-components';
import { formatPrice } from './../../utils/formatPrice';

const CartPopup = ({ items }) => {
    if (!items.length) return <Popup>Giỏ hàng của bạn đang trống</Popup>
    return (
        <Popup>
            {items.map((item, index) => (
                <Item key={index}>
                    <img src={item.image} />
                    <TextBox>
                        <Name>{item.name}</Name>
                        <Price>
                            Thành tiền: {formatPrice(item.price)} x {item.quantity} ={' '}
                            {formatPrice(item.price * item.quantity)}
                        </Price>
                    </TextBox>

                </Item>
            ))}
        </Popup>
    )
}
export default CartPopup

export const Popup = styled.div`
  position: fixed;
  top: 70px; 
  right: 20px;
  width: auto;
  background: white;
  border-radius: 14px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  padding: 12px;
  z-index: 1000;
`;

export const Item = styled.div`
  display: flex;
  gap: 20px;
  padding: 8px 0;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const Price = styled.div`
  font-size: 13px;
  color: #555;
  margin: 0;
  padding: 0;
`;


