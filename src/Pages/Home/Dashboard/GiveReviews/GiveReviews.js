import React from 'react';
import './GiveReviews.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const GiveReviews = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
  axios.post('https://morning-reef-69283.herokuapp.com/reviews',data)
      .then(res=>{
          if(res.data.insertedId){
              alert('Thanks for your feadback')
              reset();
          }
      })
  
  console.log(data);
  }
    return (
        <div className='review-section'>
          <h2>Drop Your Review Below</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input style={{width:'40%',height:'35px'}} {...register("name")}
            placeholder='Name' />
    
              <br />
            <input style={{width:'40%',height:'35px'}} type="number"
            placeholder='Ratings up to 5'
            {...register("ratings")} />
                  <br />
            <input style={{width:'40%',height:'70px'}} {...register("description", { required: true})}
            placeholder='Send Your Feadback' />
                <br />
            <input type="submit" />             
    </form>
    </div>
    );
};

export default GiveReviews;