import { Button, Table as TableComp } from 'react-bootstrap';

type TableProps = {
    columns: any[];
    dataSource: any;
    onEdit: (item: any) => void;
    onDelete: (itemId: number) => void;
};

function Table({ columns = [], dataSource = [], onEdit, onDelete }: TableProps) {
    const keys = columns.map((col) => col.key);

    return (
        <TableComp hover responsive>
            <thead>
                <tr>
                    <th>Quote#</th>
                    {columns.map((col: any) => (
                        <th>{col.title}</th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item: any, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {keys.map((key) => {
                                if (key.model) {
                                    return <td>{item[key.model][key.field]}</td>;
                                }
                                return <td>{item[key]}</td>;
                            })}

                            <td>
                                <Button variant="warning" className="text-light mx-1" onClick={() => onEdit(item)}>
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => onDelete(item.id)}>
                                    Xoa
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </TableComp>
    );
}

export default Table;
