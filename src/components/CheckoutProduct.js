import Image from "next/dist/client/image";
import { StarIcon } from "@heroicons/react/solid";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

        // Push item into Redux
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        // Remove item from Redux
        dispatch(removeFromBasket({ id }));
    };

    return (
        <div className="grid grid-cols-5">
            {/* Left Section - Image*/}
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle Section - Info */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon
                                height={15}
                                widht={15}
                                className="text-yellow-500"
                            />
                        ))}
                </div>

                <p className="text-s my-2 line-clamp-3">{description}</p>

                <NumberFormat value={price} prefix={"$"} />

                {hasPrime && (
                    <div className="flex items-center space-x-2 -mt-5">
                        <img
                            src="https://links.papareact.com/fdw"
                            alt=""
                            className="h-12"
                        />
                        <p className="text-xs text-gray-500">
                            FREE Next-day Delivery
                        </p>
                    </div>
                )}
            </div>
            {/* Right Section - Add/Remove Buttons*/}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">
                    Add to Basket
                </button>
                <button onClick={removeItemFromBasket} className="button">
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
