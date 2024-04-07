import './App.css';

function App() {
  const change=(color)=>{
    document.body.style.backgroundColor=color;
  }
  return (
    <>
    <img src="https://images.freecreatives.com/wp-content/uploads/2016/04/Beautiful-Plain-Website-Background.jpg" alt="" />
    <div style={{backgroundColor:"rgba(0,0,0, 0.4)" ,position:"absolute",top:"30%",left:"30%",padding:"20px",color:'white',width:'40%'}} className="hello container d-flex align-items-center text-center justify-content-center my-5">
    <h1>Try to change Background Color</h1>
    </div>
    <div style={{ width:"50%", margin:"auto", display:'flex'}} className="hello2 container d-flex flex-wrap align-items-center justify-content-around">
      <button style={{width:"95px", padding:"15px", fontWeight:"bolder", boxShadow:"1px 1px 10px black",borderRadius:"15px"}} onClick={()=>change("red")} className='btn btn-danger'>Red</button>
      <button  style={{width:"95px", padding:"15px", fontWeight:"bolder", boxShadow:"1px 1px 10px black",borderRadius:"15px"}} onClick={()=>change("blue")} className='btn btn-primary'>Blue</button>
      <button  style={{width:"95px", padding:"15px", fontWeight:"bolder", boxShadow:"1px 1px 10px black",borderRadius:"15px"}} onClick={()=>change("green")} className='btn btn-success'>Green</button>
      <button  style={{width:"95px", padding:"15px", fontWeight:"bolder", boxShadow:"1px 1px 10px black",borderRadius:"15px"}} onClick={()=>change("white")} className='btn btn-light'>White</button>
      <button  style={{width:"95px", padding:"15px", fontWeight:"bolder", boxShadow:"1px 1px 10px black",borderRadius:"15px"}} onClick={()=>change("black")} className='btn btn-dark'>Black</button>
      <button  style={{width:"95px", padding:"15px", fontWeight:"bolder", boxShadow:"1px 1px 10px black",borderRadius:"15px"}} onClick={()=>change("yellow")} className='btn btn-warning'>Yellow</button>
    </div>
    </>
  );
}

export default App;
