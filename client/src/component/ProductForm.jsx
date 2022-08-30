import React from "react";


function ProductForm(props) {
    const {intialTitle,intialPrice,intialDescription,onSubmitProp}=props;
    const [title,setTitle] = React.useState(intialTitle)
    const [price,setPrice] = React.useState(intialPrice)
    const [description,setDescription] = React.useState(intialDescription)

  //handler
  function handleSubmit(e){
    e.preventDefault();
    onSubmitProp({title,price,description,bushra:true});
 } 


  
  return (
    <div className="container w-50 py-4">
    <form onSubmit={handleSubmit} className="container-fluid p-3 bg-light rounded-5">
        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
                Title:
            </div>
            <div className="col-md-9 ">
                <input  name="title" type="text" onChange={ (e) => setTitle(e.target.value)}
                       value={title} className="form-control"/>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
                Price:
            </div>
            <div className="col-md-9 ">
                <input name="price" type="Number" onChange={ (e) => setPrice(e.target.value)}
                       value={price} className="form-control"/>
            </div>
        </div>


        <div className="row mb-3">
            <div className="col-md-2 text-center align-self-center fw-semibold">
                Description:
            </div>
            <div className="col-md-9">
                <textarea name="description" onChange={ (e) => setDescription(e.target.value)}
                          value={description} className="form-control"></textarea>
            </div>
        </div>


        <div className="row mb-3">
            <input type="submit" value="Submit" className="btn btn-dark btn-block w-50 mx-auto"/>
        </div>

    </form>


    
</div>
  );
}

export default ProductForm;
