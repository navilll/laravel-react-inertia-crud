import React, { useState } from 'react'
import Pagination from '../../Components/Paginate'
import { Link, useForm, usePage } from '@inertiajs/react'
import { route } from 'ziggy-js';

const index = ({products}) => {
    const {delete:destroy} = useForm();
    const { flash } = usePage().props;

    const [ flashMsg , setFlashMsg ] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    const deleteLog =(id) => {
        if (window.confirm("Are you sure you want to delete this Product?")) {
            destroy(route('products.destroy',id))
        }
        
    };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {flashMsg && (
            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-6 " role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p className="font-bold">{flashMsg}</p>
                    </div>
                </div>
            </div>
        )}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-8 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-8 py-3">
                        Stock
                    </th>
                    <th scope="col" className="px-8 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-8 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.data.map(product => (  
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={product.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.name}
                        </th>
                        <td className="px-8 py-4">
                            {product.stock}
                        </td>
                        <td className="px-8 py-4">
                            {product.description}
                        </td>
                        <td className="px-8 py-4">
                            <Link href={route('products.edit',product.id)}  className="bg-blue-500 rounded-md text-sm px-4 py-1 text-white ml-3">Edit</Link>
                            <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white ml-3" onClick={() => deleteLog(product.id)} title="Delete">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Pagination className="mt-6" links={products.links} />
    </div>
  )
}

export default index