function FoodItem(){
    let foodItem=["dal","Roti","milk","tea"]
    // let foodItem=[]
    return<>
    <h1>FOOD ITEMS</h1>
    {foodItem.length===0 ?<h1>Please add menu Here</h1>:null}

        {foodItem.map((el)=>(

        <h1 key={el}>{el}</h1>
        ))}
  
    
    
    </>

}

export default FoodItem