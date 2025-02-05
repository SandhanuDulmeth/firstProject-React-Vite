export default function ProductItem(props) {
    return (
        <>
            <div className="product-item">
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
            </div>

        </>
    );
}