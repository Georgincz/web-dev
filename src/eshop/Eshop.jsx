import { useState } from "react";
import Product from "./Product";
import "./Eshop.css";

function Eshop() {

    const [cart, setCart] = useState([])
    // const [data, setData] = useState([])
    // const [isPending, setIsPending] = useState(true)

    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/Georgincz/web-dev/main/products.json', {
    //         method: 'GET',
    //         redirect: 'follow'
    //       })
    //     .then(response => response.json())
    //     .then(json => setData(json))
    //     .finally(() => setIsPending(false))
    // }, [])

    const handler = function(product) {
        const newCart = [...cart];
        newCart.push(product);
        console.log(newCart);
        setCart(newCart)
    }

    const data = [
        {
            "product_code": "TL140963",
            "name": "Shanghai Leather backpack",
            "color": "Dark Blue",
            "ean": "8054383732111",
            "available_quantity": 29,
            "estimated_arrival_date": "",
            "phase_out": 0,
            "saleable": 1,
            "outlet": 0,
            "iso_code_2": "CZ",
            "language": "en",
            "prices": {
                "currency": "CZK",
                "list": {
                    "default": "2425",
                    "special": null,
                    "special_expire_date": null
                },
                "reseller": {
                    "default": "1202",
                    "special": null,
                    "special_expire_date": null
                }
            },
            "main_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/43110.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/43110_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/43110_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/43110_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/43110.jpg"
                }
            },
            "rollover_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/43111.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/43111_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/43111_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/43111_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/43111.jpg"
                }
            },
            "additional_images": [
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/43112.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/43112_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/43112_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/43112_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/43112.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/43113.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/43113_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/43113_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/43113_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/43113.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/64366.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/64366_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/64366_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/64366_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/64366.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/43114.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/43114_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/43114_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/43114_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/43114.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/30910.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/30910_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/30910_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/30910_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/30910.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/71311.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/71311_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/71311_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/71311_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/71311.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/71310.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/71310_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/71310_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/71310_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/71310.jpg"
                    }
                }
            ]
        },
        {
            "product_code": "TL10034",
            "name": "Monalisa Doctor gladstone leather bag with front straps",
            "color": "Brown",
            "ean": "8053830520455",
            "available_quantity": 20,
            "estimated_arrival_date": "",
            "phase_out": 0,
            "saleable": 1,
            "outlet": 0,
            "iso_code_2": "CZ",
            "language": "en",
            "prices": {
                "currency": "CZK",
                "list": {
                    "default": "7689",
                    "special": null,
                    "special_expire_date": null
                },
                "reseller": {
                    "default": "3812",
                    "special": null,
                    "special_expire_date": null
                }
            },
            "main_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/38000.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/38000_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/38000_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/38000_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/38000.jpg"
                }
            },
            "rollover_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/35871.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/35871_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/35871_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/35871_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/35871.jpg"
                }
            },
            "additional_images": [
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/38054.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/38054_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/38054_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/38054_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/38054.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/48447.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/48447_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/48447_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/48447_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/48447.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/61455.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/61455_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/61455_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/61455_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/61455.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/35867.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/35867_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/35867_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/35867_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/35867.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/48448.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/48448_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/48448_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/48448_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/48448.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/59063.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/59063_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/59063_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/59063_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/59063.jpg"
                    }
                }
            ]
        },
        {
            "product_code": "TL10038",
            "name": "Michelangelo Doctor gladstone leather bag",
            "color": "Brown",
            "ean": "8053830520561",
            "available_quantity": 16,
            "estimated_arrival_date": "",
            "phase_out": 0,
            "saleable": 1,
            "outlet": 0,
            "iso_code_2": "CZ",
            "language": "en",
            "prices": {
                "currency": "CZK",
                "list": {
                    "default": "7097",
                    "special": null,
                    "special_expire_date": null
                },
                "reseller": {
                    "default": "3519",
                    "special": null,
                    "special_expire_date": null
                }
            },
            "main_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/33512.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/33512_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/33512_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/33512_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/33512.jpg"
                }
            },
            "rollover_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/35863.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/35863_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/35863_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/35863_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/35863.jpg"
                }
            },
            "additional_images": [
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/38055.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/38055_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/38055_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/38055_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/38055.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/61454.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/61454_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/61454_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/61454_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/61454.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/35862.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/35862_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/35862_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/35862_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/35862.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/59061.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/59061_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/59061_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/59061_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/59061.jpg"
                    }
                }
            ]
        },
        {
            "product_code": "TL141283",
            "name": "Prato Exclusive leather laptop case",
            "color": "Brown",
            "ean": "8053830525023",
            "available_quantity": 25,
            "estimated_arrival_date": "",
            "phase_out": 0,
            "saleable": 1,
            "outlet": 0,
            "iso_code_2": "CZ",
            "language": "en",
            "prices": {
                "currency": "CZK",
                "list": {
                    "default": "5027",
                    "special": null,
                    "special_expire_date": null
                },
                "reseller": {
                    "default": "2493",
                    "special": null,
                    "special_expire_date": null
                }
            },
            "main_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/64077.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/64077_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/64077_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/64077_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/64077.jpg"
                }
            },
            "rollover_image": {
                "url": "https://web-dev.kvalitne.cz/images/products/4716.jpg",
                "thumbs": {
                    "256": "https://web-dev.kvalitne.cz/images/products/4716_thumb_256.jpg",
                    "512": "https://web-dev.kvalitne.cz/images/products/4716_thumb_512.jpg",
                    "1024": "https://web-dev.kvalitne.cz/images/products/4716_thumb_1024.jpg",
                    "1500": "https://web-dev.kvalitne.cz/images/products/4716.jpg"
                }
            },
            "additional_images": [
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/64078.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/64078_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/64078_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/64078_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/64078.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/64079.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/64079_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/64079_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/64079_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/64079.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/16702.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/16702_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/16702_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/16702_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/16702.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/16700.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/16700_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/16700_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/16700_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/16700.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/16701.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/16701_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/16701_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/16701_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/16701.jpg"
                    }
                },
                {
                    "url": "https://web-dev.kvalitne.cz/images/products/16699.jpg",
                    "thumbs": {
                        "256": "https://web-dev.kvalitne.cz/images/products/16699_thumb_256.jpg",
                        "512": "https://web-dev.kvalitne.cz/images/products/16699_thumb_512.jpg",
                        "1024": "https://web-dev.kvalitne.cz/images/products/16699_thumb_1024.jpg",
                        "1500": "https://web-dev.kvalitne.cz/images/products/16699.jpg"
                    }
                }
            ]
        }
    ]
    

    // console.log(data);
    
    return (
        <>
            {cart.length}
            <div className="productList grid">
                {/* {isPending && "Loading data..."} */}
                {data.map(item => <Product key={item.ean} product={item} onClickHandler={handler} />)}
            </div>
        </>
    )
} 

export default Eshop