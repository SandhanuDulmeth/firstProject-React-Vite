export default function ProductItem(props) {
    return (
        <>
            <div className="product-item">
                <img className="product-img" src={props.imageUrl} alt="" />
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
            </div>

        </>
    );
}