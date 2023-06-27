// 함수형 컴포넌트 생성
const HelloWorld = ({product}) => {


    const {pno, pname, price} = product || {pno:-1,pname : '', price :0}

    

    return ( 
        <div>
            <div>{pno}</div>
            <div>{pname}</div>
            <div>{price}</div>
            {price > 5000 && <div>비싸다</div>}
            {price > 5000 ? <div>비싸</div> : <div>싸</div>}
        </div>
        

     );
}
 
export default HelloWorld;