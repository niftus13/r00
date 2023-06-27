import ProductDetail from "./ProductDetail";

const ProductList = () => {

    // 컨테이너 형 컴포넌트
    const products = [
        {pno:1 , pname:'상품1' , price: 3000,imgFile:'k01.jpg'},
        {pno:2 , pname:'상품2' , price: 4000,imgFile:'k02.jpg'},
        {pno:3 , pname:'상품3' , price: 5000,imgFile:'k03.jpg'},
        {pno:4 , pname:'상품4' , price: 6000,imgFile:'k04.jpg'},
        {pno:5 , pname:'상품5' , price: 7000,imgFile:'k05.jpg'}
      ]

    return ( 
        <ul className = "productList">
            {products.map(p => 
                <ProductDetail 
                key={p.pno} 
                product={p}/>
            )}
        </ul>
     );
}
 
export default ProductList;