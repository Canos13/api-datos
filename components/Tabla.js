import styles from './Table.module.css'
import {useRouter} from 'next/router'
const Tabla = ({result}) => {

    const resultado = result.results;
    const { push } = useRouter()

    console.log(resultado);

  return (
    <table className={styles.container} >
        <thead >
            <tr className={styles.head}>
                <th>_Id</th>
                <th>Ciyid</th>
                <th>Name</th>
                <th>State</th>
                <th>Probability of precip</th>
                <th>Relative humidity</th>
                <th>Last report time</th>
                <th>Llueve</th>
            </tr>
        </thead>
        <tbody>
                {
                    resultado.map((resultado, i)=>{
                        return (
                            <tr key={i}>
                                <td className={styles.id}
                                    onClick={ () =>{
                                        push( '/id/' + resultado._id )
                                }}>       
                                    { resultado._id }   
                                </td>
                                <td> { resultado.cityid } </td>
                                <td> { resultado.name} </td>
                                <td> { resultado.state} </td>
                                <td> { resultado.probabilityofprecip} </td>
                                <td> { resultado.relativehumidity} </td>
                                <td> { resultado.lastreporttime} </td>
                                <td> { (resultado.probabilityofprecip>60 || resultado.relativehumidity>50)? 'Llueve':'No llueve'  } </td>
                            </tr>
                        )
                    })
                }
            
        </tbody>
    </table>
  )
}

export default Tabla