import React from 'react'
import { GET_STUDENTS } from './graphql/queries/GET_STUDENTS'
import { useLazyQuery } from '@apollo/client'
const Home = () => {
    const [getStudents, { loading, error, data }] = useLazyQuery(GET_STUDENTS);

    const handleClick = () => {
        getStudents();
    }
    return <div>
        <button className='btn btn-primary mb-3 mt-3' onClick={handleClick}>get users</button>
        {data && <table className='table table-bordered'>
            <tr>
              
                <th>Name</th>
                <th>Roll No</th>
                <th>Location</th>
            </tr>
            {
                data?.getStudents?.map(({  name, rno, loc }) => {
                    return <tr>
                       
                        <td>{name}</td>
                        <td>{rno}</td>
                        <td>{loc}</td>
                    </tr>
                })

            }
        </table>
        }
    </div>
}

export default Home;
