import React from 'react'
import { useForm } from '@inertiajs/react'
import { route } from 'ziggy-js';

const edit = ({product}) => {

    const {data, setData, put, errors, processing } = useForm({
        name:product.name,
        stock:product.stock,
        description:product.description,
    });

    function submit(e){
        e.preventDefault();
        put(route('products.update',product.id));
    };

  return (
    <form className="max-w-sm mx-auto border-2 border-gray-900 border-solid p-10" onSubmit={submit}>
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
            <input value={data.name} onChange={(e)=> setData('name',e.target.value)} type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe"  />
            {errors.name && <p className='error text-red-600'>{errors.name}</p>}
        </div>
        <div className="mb-5">
            <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Stock</label>
            <input value={data.stock} onChange={(e)=> setData('stock',e.target.value)} type="number" name='stock' id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            {errors.stock && <p className='error text-red-600'>{errors.stock}</p>}
        </div>
        <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
            <input value={data.description} onChange={(e)=> setData('description',e.target.value)} type="text" name='description' id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hi, There" />
            {errors.description && <p className='error text-red-600'>{errors.description}</p>}
        </div>
        <button disabled={processing} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}

export default edit