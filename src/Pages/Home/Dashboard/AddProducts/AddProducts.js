import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
    axios.post('http://localhost:5000/services',data)
        .then(res=>{
            
            if(res.data.insertedId){
                alert('Successfully added your product')
                reset();
            }
        })
    
    console.log(data);
    }
       
    return (
<div>
            <h3>Add Services By Admin</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
            <input style={{width:'40%',height:'35px'}} {...register("name")}
            placeholder='Product Name' />
                <br />
            <input style={{width:'40%',height:'35px'}} {...register("img", 
            { required: true})} 
            placeholder='Image URL'
            />
              <br />
            <input style={{width:'40%',height:'35px'}} type="number"
            placeholder='Price'
            {...register("price")} />
                  <br />
            <input style={{width:'40%',height:'70px'}} {...register("description", { required: true})}
            placeholder='Short Description' />
                <br />
            <input type="submit" />             
    </form>

 </div>
    );
};

export default AddProducts;