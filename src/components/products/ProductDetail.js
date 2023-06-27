import styled from "styled-components";

const BlueDiv = styled.div`
 background-color:blue
`




const ProductDetail = ({product}) => {

    const {pno, pname, price,imgFile} = product;

    return ( 
        <li>
            <BlueDiv>PNO {pno}</BlueDiv>
            <div>NAME {pname}</div>
            <div>{price}</div>
            <button>BUY</button>
            <img src={require(`../../image/${imgFile}`)}></img>
        </li>
     );
}
 
export default ProductDetail;