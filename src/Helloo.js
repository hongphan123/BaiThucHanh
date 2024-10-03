function Helloo(){
	const hiAll=()=>{
        alert("hello everyone")
    }

    const hiYou=(name)=>{
        alert("Hello "+ name)
    }


   return (
        <div>
            <h1>Xin chào bạn</h1>
            {/* Nút gọi hiAll */}
            <button onClick={hiAll}>Say Hi to Everyone</button>
            
            {/* Nút gọi hiYou với giá trị name là "Nguyen Van A" */}
            <button onClick={() => hiYou("Nguyen Hoang Tan")}>Say Hi to You</button>
        </div>
    );
}

export default Helloo;