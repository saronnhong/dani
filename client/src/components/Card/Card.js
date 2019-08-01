import React from 'react';
import "./Card.css";

let Card = ({ file }) => {
    // if(file.data.preview) {
    //     if(file.data.preview.enabled) {
    //         let image = file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url;
    //         image = image.replace(/&amp;/g,"&");

    //         let title = file.data.title;
    //     }
    // } 
    if(file.data.preview) {
        if(file.data.preview.enabled){
            // console.log(file.data)
            // let image = (file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url).replace(/&amp;/g,"&");
            // console.log(image);
            // console.log(file.data)
            // console.log()

            let image = (file.data.preview.images[0].resolutions[file.data.preview.images[0].resolutions.length - 1].url)
            image = image.replace(/&amp;/g,"&");
            // console.log(image)
            return (
                //     <div className="col-md-3">
                //     <div className="card">
                //         <div className="img-container">
                //             <img alt={file.title} src={file.image} />
                //         </div>
                //         <div className="content">
                //             <p>{file.title}</p>
                //         </div>
                //     </div>
                // </div>
                <div className="col-md-3">
                    <div className="card-subreddit">
                        <div className="img-container">
                            <img className="redditimage" src={image} alt={file.data.title} />
                        </div>
                        {/* <div className="content">
                            <p>{file.data.title}</p>
                        </div> */}
                    </div>
                </div>
        
            )
        }
        
    }
    return(
        <div></div>
    )
}



export default Card;