import './App.css';

import React, { useState } from "react";

const dataSource = [
    {firstName: "John", lastName: "Doe", active: false},
    {firstName: "Mary", lastName: "Moe", active: false},
    {firstName: "Peter", lastName: "Noname", active: true}
];

function GridRecord ({record}) {
    return (
        <tr>
            <td>{record.firstName}</td>
            <td>{record.lastName}</td>
            <td><input type="checkbox" checked={record.active}/></td>
        </tr>
    )
}

function GridComponent() {
    const [records, setRecords] = useState(dataSource);

    let recordsGrid = records.map((record) => {
        return <GridRecord record={record} />
    });

    return (
        <div style={{width: 300, height: 300, padding:20}}>
            <p>
                <input type="text" placeholder="Filter by..." />
            </p>
            <table className="table table-condensed">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Active</th>
                </tr>
                </thead>
                <tbody>
                {recordsGrid}
                </tbody>
            </table>
        </div>
    );
}

function App() {
    return <GridComponent />
}

export default App;
