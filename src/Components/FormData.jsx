import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


// validatsiya
const schema = yup.object().shape({
    first_name:yup.string().required('ism kiritish majburiy'),
    last_name:yup.string().required('familya kiritish majburiy'),
    email:yup.string().email('Email notogri ').required('Email kiritish majburiy'),
    password:yup.string().required('parol kiritish majburiy'),
})


export const FormData = () => {

    const {register , handleSubmit , formState:{errors , isSubmitting} , reset} = useForm({
        resolver:yupResolver(schema)
    })


    const onSubmit =(data)=>{
        console.log(data);
        reset()
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Ism kiriting:</label>
                <input type="text" {...register('first_name')}  id="ism" className='border rounded-2xl ' placeholder='ism kiriting'/>
                {errors.first_name && <p className='text-red-500'>{errors.first_name.message}</p>}
            </div>
            <div>
                <label htmlFor="">Familya kiriting:</label>
                <input type="text"  {...register('last_name')} id="familya" className='border rounded-2xl ' placeholder='familya kiriting'/>
                {errors.last_name && <p className='text-red-500'>{errors.last_name.message}</p>}
            </div>
            <div>
                <label htmlFor="">Email kiriting:</label>
                <input type="text"  {...register('email')} id="email" className='border rounded-2xl ' placeholder='email kiriting'/>
            </div>
            <div>
                <label htmlFor="">Parol kiriting:</label>
                <input type="text"  {...register('password')} id="password" className='border rounded-2xl ' placeholder='password kiriting'/>
            </div>
            <button type='submit' className='bg-blue-500 p-3 rounded-2xl'>Submit</button>
        </form>
    </div>
  )
}
