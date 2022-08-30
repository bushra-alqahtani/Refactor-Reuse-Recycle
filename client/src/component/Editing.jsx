import React,{useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import ProductForm from './ProductForm'

function Editing(props) {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")


    const { id } = useParams();
    
    const history = useHistory();


    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            setTitle(res.data.title);
            setDescription(res.data.description);
            setPrice(res.data.price);
        }).catch(err => console.log(err));
    },[])
   
    const handleSubmit = (product) => {
        // e.preventDefault()

        //    /api/product/:_id
        axios.put("http://localhost:8000/api/product/"+id,product)
                    .then(res => {
                        console.log(res);
                        history.push("/products/new")})
                        .catch(err => console.log(err));
        
                    
    }
  return (
    <div className="container w-50 py-4">
      <div className="p-4 rounded container-fluid bg-light text-center fw-bolder"> 
    <div>Editing</div>
 
   </div>
    <ProductForm onSubmitProp={handleSubmit} intialTitle={title} intialPrice={price} intialDescription={description} />
    </div>
    
  )
}

export default Editing