
var products = [
    {
        category: 'Sporting Goods',
        price: '$49.99',
        name: 'Football',
        inStock: true
    },
    {
        category: 'Sporting Goods',
        price: '$9.99',
        name: 'Baseball',
        inStock: true
    },
    {
        category: 'Sporting Goods',
        price: '$29.99',
        name: 'Basketball',
        inStock: false
    },

    {
        category: 'Electronics',
        price: '$99.99',
        name: 'iPod Touch',
        inStock: true
    },
    {
        category: 'Electronics',
        price: '$399.99',
        name: 'iPhone 5',
        inStock: false
    },
    {
        category: 'Electronics',
        price: '$199.99',
        name: 'Nexus 7',
        inStock: true
    }
];

function SportingGoods(props) {
    return(
    <div>

        <p>{props.product} {props.price}</p>
    </div>

    )
}

function Electronics(props) {
    return(
        <div>
            <p>Electronics</p>
            <p>{props.product} {props.price}</p>
        </div>

    )
}

function DisplayProduct(props) {

    if (props.category === 'Sporting Goods'){
        return(
            <div>
                <p>Sporting Goods</p>
                <SportingGoods product = {props.name} price = {props.price}/>
            </div>)
    }else{
        return(
            <div>
                <Electronics product = {props.name} price = {props.price}/>
            </div>)
    }


}

function NamePrice(props) {
    return(
        <div >
            <p>Name Price</p>

            {props.products.map((product, index)=>{
                return <DisplayProduct key = {index} category = {product.category} name = {product.name} price = {product.price}  />

            })}

        </div>
    )
}

function Search(props) {
    return(
        <form className="form">
            <div className="form-group">

                <div>
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>

                <div class="checkbox">
                    <label>
                        <input type="checkbox" /> Only show products in stock
                    </label>
                </div>
            </div>

        </form>
    )
}


function Application(props) {
    return(
        <div className="container col-sm-4">
            <Search />
            <NamePrice products = {props.data}/>


        </div>

    )
}


ReactDOM.render(
    <Application data = {products}/>,
    document.getElementById('root')
);