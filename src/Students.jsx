import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { GET_STUDENTS } from './graphql/queries/GET_STUDENTS';

const Students = () => {
    const { loading, data, error } = useQuery(GET_STUDENTS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    return <table className='table table-bordered table-striped '>
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
export default Students
