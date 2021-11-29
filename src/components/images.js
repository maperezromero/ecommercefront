import previous from '../images/icon-previous.svg'
import next from '../images/icon-next.svg'
import { useState } from 'react';

export const Images = () => {
    
    const  [styles, setStyles] = useState([
        {style: 'selected'},
        {style: ''},
        {style: ''},
        {style:''}]);
    let imagesNames =[];
    const [imageNum, setImageNum] = useState(0);
    

    const slideRight = () => {

        imageNum === imagesNames.length-1 ? setImageNum( 0) : setImageNum(imageNum+1);
    };
    
    const slideLeft = () => {
        imageNum === 0 ? setImageNum(imagesNames.length-1) : setImageNum(imageNum-1);

    };

    const handleChangeImage = (numImage) =>{
        
        setImageNum(numImage);
        styles.map((e,index)=>{
            let result = index===numImage? 'selected' : '';
            e.style=result;
            return e});
    }

    function importAll(r) {
        let images = [];
        r.keys().map((item, index) => { 
            imagesNames.push(item.replace('./',''));
            return images[item.replace('./', '')] = r(item); 
        });
        return images;
    }
    //With this RegExp allow jpeg/jpg extensions and avoid the text 'thumbnail'  
    const images = importAll(require.context('../images', false, /^(?!.*(thumbnail)).*(.(jpe?g))/));
    

    return(
       <div className="images-container">
            <img src={previous} alt="previous-icon" className="previous-icon" onClick={slideLeft}/>
            <img src={images[`${imagesNames[imageNum]}`].default} className= "image-product" alt="products"/>
            <img src={next} alt="next-icon" className="next-icon" onClick={slideRight}/>
            <div className="gallery">
                <img src={images[`${imagesNames[0]}`].default} className= {`image-gallery ${styles[0].style}`} alt="products" onClick={()=>handleChangeImage(0)}/>
                <img src={images[`${imagesNames[1]}`].default} className= {`image-gallery ${styles[1].style}`} alt="products" onClick={()=>handleChangeImage(1)}/>
                <img src={images[`${imagesNames[2]}`].default} className= {`image-gallery ${styles[2].style}`} alt="products" onClick={()=>handleChangeImage(2)}/>
                <img src={images[`${imagesNames[3]}`].default} className= {`image-gallery ${styles[3].style}`} alt="products" onClick={()=>handleChangeImage(3)}/>
            </div>
       </div> 
    )
}