import React from 'react'
import Tabla from '../components/Tabla'

const Index = ({dat}) => {

    console.log(dat);

    return (
        <>
            <Tabla result={dat} />
        </>
    )
}


export async function getServerSideProps(){

    const res = await fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
    const data = await res.json();

    return {
        props: {
            dat : data
        }
    }

}

export default Index 