
const LoopEx = () => {

    // 1. 배열로 처리
    const arr = [1,2,3,4,5,6]

    // 2. 
    const result = arr.map((ele,i) => {
        if(ele % 2 === 0){
            return <li key={i}>{ele}</li>
        }
    })

    return (
        <>
        <ul>
            {result}
        </ul>
        <hr/>
        </>
      );
}
 
export default LoopEx;