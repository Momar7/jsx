import React from "react";
import './ProfilePhoto.css'

function ProfilePhoto({imageUrl}){
    return(
        <div className="image-container">
            <img src={imageUrl} alt='' />
        </div>
    )


}



export default ProfilePhoto 