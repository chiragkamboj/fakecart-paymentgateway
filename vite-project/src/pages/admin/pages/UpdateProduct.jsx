import React,{useContext} from 'react'
import myContext from '../../../context/data/mycontext';
import { updatePassword } from 'firebase/auth';


function UpdateProduct() {
    const myStyle={
        backgroundImage: 
 "url('https://www.realsimple.com/thmb/1Cnw2cb6xvEFU0fI0xDYsfhBANE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-skincare-products-for-skin-type-2000-5e9500323de54b6794b6006ecf2caf1f.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const context = useContext(myContext);
    const {products,setProducts,UpdateProduct} = context
    return (
        <div style={myStyle}> 
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button onClick={updatePassword}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Update Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct