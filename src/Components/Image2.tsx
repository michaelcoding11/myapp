import React from 'react'
import Gambar from '../Foto/cute-img.jpg'

class Image extends React.Component{
render() {
    return(
        <>
        <img src={Gambar}/>
        </>
    )
}
}

export default Image;