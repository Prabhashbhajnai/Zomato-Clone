import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux action
import { getImage } from '../../Redux/Reducer/Image/Image.action';

// component
import MenuCollection from '../../Components/Restaurant/MenuCollection';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => {
                const images = [];
                data.payload.image.images.map(({location}) => images.push(location))
                setMenus(images)
            });
        }
    }, [reduxState]);

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
            </div>
        </>
    );
};

export default Menu;