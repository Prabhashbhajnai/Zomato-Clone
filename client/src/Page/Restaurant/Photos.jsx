import React, {useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';

// component
import PhotoCollection from '../../Components/Restaurant/PhotosCollection';

const Photos = () => {

    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/4/3300424/b3055069ad7ce4cd707acff1449c3f78.jpg", 
        "https://b.zmtcdn.com/data/pictures/chains/4/3300424/bcc941604e5dd4f94954e26e460695dc.jpg", 
        "https://b.zmtcdn.com/data/pictures/chains/4/3300424/10782846b5908f706f193d026b70af3c.jpg", 
        "https://b.zmtcdn.com/data/pictures/chains/4/3300424/7ed8023847cf71ee206b2d04c136576b.jpg", 
        "https://b.zmtcdn.com/data/pictures/chains/4/3300424/2d50cb2965e522e5db9f23f5c6eef1d3.jpg", 
        "https://b.zmtcdn.com/data/pictures/chains/4/3300424/da2592e0d25f079cbf9aedf436cabf6f.jpg", 
        "https://b.zmtcdn.com/data/pictures/chains/4/3300424/10782846b5908f706f193d026b70af3c.jpg"
    ]);
    const [isMenuOpen,  setIsMenuOpen] = useState(false);
    const [CurrentImg,  setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                src={ photos }
                currentIndex={ CurrentImg }
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={ closeViewer }
                />
            )}
             
            <div className="flex flex-wrap gap-2 md:px-4 lg:gap-10 lg:px-6">
                {photos.map((photo) => (
                    <PhotoCollection 
                        image={photo} 
                        openViewer={openViewer}
                    />
                ))}
            </div>
        </>
    );
};

export default Photos;
