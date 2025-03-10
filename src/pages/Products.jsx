
import ProductItem from '../components/ProductItem'
import { useState } from 'react'
export default function Product() {


    let [data, setData] = useState([
        { name: "Iphone 150", price: 7700 , imageUrl:"https://th.bing.com/th/id/OIP.HfDaw-1w0DpMnKa0e5FcBQHaHa?rs=1&pid=ImgDetMain" },
        { name: "Iphone 140", price: 6900 , imageUrl:"https://th.bing.com/th/id/OIP.5TCgpn96fggMvcKV88JfkgHaHa?w=900&h=900&rs=1&pid=ImgDetMain" },
        { name: "Iphone 130", price: 5880 , imageUrl:"https://th.bing.com/th/id/OIP.1RB7gxv-P_A5kr7phSKc6gHaHa?rs=1&pid=ImgDetMain" },
    ]);

    function getIphoneList() {
        return data.map((item) => {
            return (
                <h1>{item.name + " , " + item.price}</h1>

            )
        })
    }

    return (
        <>
            <div className="product">

                {/* {getIphoneList()} */}


                {/* <ProductItem name="Iphone 15" price={7700} />
                <ProductItem name="Iphone 14" price={6900} />
                <ProductItem name="Iphone 13" price={5880} /> */}

                {
                    data.map((item) => {
                        return (
                            <ProductItem name={item.name} price={item.price} imageUrl={item.imageUrl} />
                        )

                    })
                }


            </div>

        </>
    );
}
