import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/product'


export const CreateProduct = () => {
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const navigate = useNavigate()
  const store = async(e)=>{
      e.preventDefault()
      await axios.post(endpoint, {description: description, price: price, stock:stock})
      navigate('/')
  }
  return (
    <div className='mt-4'>
        <h3>Create Product</h3>
        <form onSubmit={store}>
          <div className='mb-3'>
            <label className='form-label'>Description</label>
            <input value={description}
            onChange={(e)=>setDescription(e.target.value)}
            type='text'
            className='form-control'
            ></input>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Price</label>
            <input value={price}
            onChange={(e)=>setPrice(e.target.value)}
            type='number'
            className='form-control'
            ></input>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Stock</label>
            <input value={stock}
            onChange={(e)=>setStock(e.target.value)}
            type='number'
            className='form-control'
            ></input>
          </div>
          <button type='submit' className='btn btn-primary'>Store</button>
        </form>

    </div>
  )
}
