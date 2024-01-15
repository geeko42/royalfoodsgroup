import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
} from '@nextui-org/react';

import myList from '../app/data/stores/list.json';
import { useMemo, useState } from 'react';

interface StoreListItems {
  columns: { key: number; label: string };
  myList: { key: number; stores: string; city: string };
}

export default function StoreList() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;

  console.log(myList.rows.length);
  const pages = Math.ceil(myList.rows.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return myList.rows.slice(start, end);
  }, [page]);
  return (
    <Table
      bottomContent={
        <div className='flex w-full justify-center'>
          <Pagination
            isCompact
            showControls
            showShadow
            color='success'
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: 'min-h-[222px]',
      }}
    >
      <TableHeader columns={myList.columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
