import './ProductForm.css';


function ProductForm(){

    return(
        <form>
            <div className='new-product_title' >
                <label>Title</label>
                <input type='text'></input>
            </div>
            <div className='new-product_date'>
                <label>Date</label>
                <input type='date' min='2026-01-01'  max='2026-12-12'></input>
            </div>
            <div className='new-product_button' >
                <button type='submit'>Add To Cart</button>
            </div>
            

        </form>
    )

}

export default ProductForm;