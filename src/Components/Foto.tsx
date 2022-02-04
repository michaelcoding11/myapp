import React from 'react'
import Gambar from '../Foto/cute-img.jpg'

class Image extends React.Component{
render() {
    return(
        <div className= "App">
        <img src={Gambar}/>
        </div>
    )
}
}

export default Image;