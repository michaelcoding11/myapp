import React from 'react';

interface IProps{
    nama: string;
    kelas: string;
    IsMorning: string;
}

class Info extends React.Component<IProps> {
    render() {
        return (
            <div className='App'>
            <h1>Nama: {this.props.nama}</h1>
            <br></br>
            <h3>Kelas: {this.props.kelas}</h3>
            <p>Pagi/Siang: {this.props.IsMorning}</p>
            </div>
        )
    }
}
export default Info;