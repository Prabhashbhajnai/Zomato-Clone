import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AiOutlineCompass} from 'react-icons/ai';
import {BiTimeFive} from 'react-icons/bi';


// components
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton';
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';

// redux action
import { getFoodList } from '../../Redux/Reducer/Food/Food.action';

const OrderOnline = () => {
    const [menu, setMenu] = useState([]);
    const [selected, setSelected] = useState("");

    const onClickHandler = (e) => {
        if(e.target.id){
            setSelected(e.target.id);
        }
        return;
    };

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();

    useEffect(() => {
        reduxState &&
            dispatch(getFoodList(reduxState.menu)).then((data) => 
                setMenu(data.payload.menus.menu)
            );
    }, [reduxState]);

    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r-2 overflow-y-scroll border-gray-200 h-screen w-64 mr-10">
                    {
                        menu.map((item) => (
                            <MenuListContainer 
                                {...item} 
                                key={item._id} 
                                onClickHandler={onClickHandler} 
                                selected={selected} 
                            />
                        ))
                    }
                </aside>
                <div className="w-full h-screen px-3 md:w-4/6">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 Min
                        </h4>
                    </div>

                    <section className="flex flex-col h-screen overflow-y-scroll gap-3 md:gap-5">
                        {menu.map((item) => (
                            <FoodList key={item._id} {...item} />
                        ))}
                    </section>
                </div>
            </div>
            <FloatMenuButton />
        </>
    );
};

export default OrderOnline;
