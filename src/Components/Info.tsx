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
            <div>
            <h1>Nama: {this.props.nama}</h1>
            <h2>Kelas: {this.props.kelas}</h2>
            <h3>Sesi: {this.props.IsMorning}</h3>
            </div>
            </div>

        )
    }
}
export default Info;