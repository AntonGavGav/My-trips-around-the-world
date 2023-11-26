import React from 'react'
import '../css/TopInfo_style.css';
import "../fonts/StretchPro.otf";

const TopInfo = () => {
    const images = require.context('../images/front_page_gallery', true);
    const imageList = images.keys().map(image => images(image));
    const defaultItemFlex = "0 1 20px";
    const hoverItemFlex = "1 1 400px";

    const hovered = (e) => {
        e.currentTarget.style.flex = hoverItemFlex;
    }
    const unHovered = (e) => {
        e.currentTarget.style.flex = defaultItemFlex;
    }

    return (
        <div className='box'>
            <h1>My trips arouuund <br></br>theeee woorld</h1>

            <div className='galleryContainer'>
                <div className='gallery'>
                    {imageList.map((image,index) => (
                        <div className='galleryItem'
                        key = {index}
                        onMouseEnter={(e) => hovered(e)}
                        onMouseLeave={(e) => unHovered(e)}
                        >
                            <img className = "galleryImg" key = {index} src = {image} alt ={`image-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopInfo