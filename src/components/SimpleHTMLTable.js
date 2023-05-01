import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'

// const BASE_API_URL = "http://127.0.0.1:5000";
const BASE_API_URL = "http://localhost:5000";

function SimpleRow(props) {
    return <tr className="basic_row">
        <td className="basic_row pk">{props.row.n_id}</td>
        <td className="basic_row action">{props.row.action}</td>
        <td className="basic_row timestamp">{props.row.created_ts}</td>
        <td className="basic_row status">{props.row.status}</td>
        <td className="basic_row name">{props.row.name}</td>
    </tr>
}
function SimpleTable(props) {
    console.log("Build_table")
    const rows = props.rows
    console.log(rows)
    for (let i = 0; i<rows.length; i++){}
    return (
        <table className="basic_table">
        <tr className="basic_row">
            <th className="basic_header">PK</th>
            <th className="basic_header">Action</th>
            <th className="basic_header">Time stamp</th>
            <th className="basic_header">Status</th>
            <th className="basic_header">Name</th>
        </tr>
            {rows.map((row) => <SimpleRow row={row} />)}
    </table>)
}

export default function Posts() {
    console.log("Posts function:")
    const [result, setResult] = useState();

    useEffect(() => {
        fetch(BASE_API_URL + '/artist').then(res => res.json()).then(data => {
            setResult(data);
        });
    }, []);

    console.log("after useEffect")
    console.log("results")
    console.log(result)
    return (
        <>
            { result === undefined ?
                <Spinner />
                :
                <SimpleTable rows={result.rows} columns={result.columns} />
            }
        </>
    )
}