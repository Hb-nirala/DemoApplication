import React from 'react';
import { DataTable, Provider } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const DataTableClone = () => {

    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <Provider>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Age</DataTable.Title>
                    <DataTable.Title>City</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Nirala</DataTable.Cell>
                    <DataTable.Cell>20</DataTable.Cell>
                    <DataTable.Cell>Bhopal</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Riddhi</DataTable.Cell>
                    <DataTable.Cell>20</DataTable.Cell>
                    <DataTable.Cell>Ahmedabad</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                />



            </DataTable>
        </Provider>
    )
}
export default DataTableClone