import ProductItem from '../components/ProductItem'
export default function Product() {
    return (
        <>
            <div className="product">

                <ProductItem name="Iphone 15" price={7800} />
                <ProductItem name="Iphone 14" price={6900} />
                <ProductItem name="Iphone 13" price={5880} />
            </div>

        </>
    );
}
