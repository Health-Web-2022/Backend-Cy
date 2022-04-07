import axios from "axios";
import React from "react";

function App() {
  const [v, setV] = React.useState();

  React.useEffect(() => {
    
    axios.get('http://localhost:5000/hi')
    .then(function(res){
      setV(res.data.text);
      console.log(res);
    }).catch(function(error){
      console.log(error);
    })
    
  }, [])


  return (
    <div className="App">
     <h5>{v}</h5>
    </div>
  );
}

export default App;
