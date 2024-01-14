import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

import myList from '../app/data/products/list.json';

import { useEffect, useState } from 'react';

type myProducts = {
  name: string;
};

export default function ProductsList(props: myProducts) {
  const [myValue, setMyValue] = useState(props.name);

  useEffect(() => {
    setMyValue(props.name);
  }, [props.name]);

  // console.log(typeof myValue + ' ' + myValue);

  return (
    <Table>
      <TableHeader columns={myList.columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={myList[myValue as keyof typeof myList]}>
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
