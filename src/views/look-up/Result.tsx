import { useMemo } from 'react'
import { useTable } from 'react-table'
import './style/result.module.css'

type TableProps = { columns: any; data: any }
function Table({ columns, data }: TableProps) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    })
    return (
        <table className='table' {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default function Result() {
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName'
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName'
                    }
                ]
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age'
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status'
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress'
                    }
                ]
            }
        ],
        []
    )
    return <Table columns={columns} data={[]} />
}
