

const ButtonContanier=({handleClick})=>{

    let buttons=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
    return<>
    <div className="container-sm text-center pt-5 " >
        <div class="row align-items-center">
        {buttons.map((el)=>(
    <div class="col-4">
     <button onClick={()=>handleClick(el)} className="btn btn-info p-3 m-2">{el}</button>
    </div>
    
        ))}
  </div>
  
</div>
    </>
}


export default ButtonContanier