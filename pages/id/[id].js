import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../../components/Table.module.css'

const id = ({dat}) => {

    const resultado = dat.results;
    const { query } = useRouter();

    const {id} = query;
    console.log(resultado)
    console.log(id)

    const unico = resultado.filter(resultado => resultado._id === id);
    console.log(unico);

    return (
        <> 
            <table  className={styles.container}>
            <thead >
                <tr >
                    <th>_Id</th>
                    <th>Ciyid</th>
                    <th>Name</th>
                    <th>State</th>
                    <th>Probability of precip</th>
                    <th>Relative humidity</th>
                    <th>Last report time</th>
                    <th>Llueve</th>

                    <th>validdateutc</th>
                    <th>winddirectioncardinal</th>
                    <th>tempc</th>
                    <th>latitude</th>
                </tr>
            </thead>
            <tbody>    
                {
                    unico.map((unico, i)=>{
                        return (
                            <tr key={i}>
                                <td>{ unico._id }</td>
                                <td> { unico.cityid } </td>
                                <td> { unico.name} </td>
                                <td> { unico.state} </td>
                                <td> { unico.probabilityofprecip} </td>
                                <td> { unico.relativehumidity} </td>
                                <td> { unico.lastreporttime} </td>
                                <td> { (unico.probabilityofprecip>60 || unico.relativehumidity>50)? 'Llueve':'No llueve'  } </td>
                                
                                <td> { unico.validdateutc} </td>
                                <td> { unico.winddirectioncardinal} </td>
                                <td> { unico.tempc} </td>
                                <td> { unico.latitude} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
            
            <br />
            <Link href='/'>
               <a className={styles.btn}>Ir al inicio</a>
            </Link>
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

export default id