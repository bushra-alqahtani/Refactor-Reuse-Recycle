import React from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import { useHistory } from "react-router-dom";
function Create(props) {
  const [title,setTitle] = React.useState("")
  const [price,setPrice] = React.useState("")
  const [description,setDescription] = React.useState("")
  const [data,setData]=React.useState([])
 const history=useHistory();
  //const [isLoded, setIsLoded] = React.useState(false);

  // React.useEffect(() => {
  //   axios.get("http://localhost:8000/api/products").then(res=>setData(res.data)).catch(err=>console.log(err));
    
  // }, []);
  //handle the Submit
  function handleSubmit(product){
    //  e.preventDefault()
     axios.post("http://localhost:8000/api/products/new",product)
     .then(res => {
        setData(res.data)
        history.push("/products/new")  
      }).catch(err => console.log(err));
     setTitle("")
     setPrice("")
     setDescription("")

  }

  return (
    <div className="container w-50 py-4">

{/*  */}
    <header className="pb-3 mb-4 border-bottom">
        <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
            Product Manager
        </div>
    </header>
{/*  */}

<ProductForm onSubmitProp={handleSubmit} intialTitle={title} intialPrice={price} intialDescription={description} />

    
</div>
  );
}

export default Create;
