import { useCallback, useEffect, useState } from 'react';
import { supabase } from './providers/supabaseClient';
import { Table } from './types/collection';
import {
  CardBody,
  Heading,
  Card,
  Text,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';

function App() {
  const [tables, setTables] = useState<Table[]>([]);

  const fetcher = useCallback(async () => {
    const { data, error } = await supabase
      .from('table')
      .select(`id, name, items, dice, description, source (id, name)`);
    if (error) {
      console.log('error', error);
    } else {
      setTables(data);
    }
  }, []);
  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <>
      {tables.map((table) => (
        <Card key={table.id}>
          <CardBody>
            <Heading>{table.name}</Heading>
            <Text>From: {table.source.name}</Text>
            <Text>{table.description}</Text>
            <Text>d{table.dice}</Text>
            <OrderedList>
              {table.items.map((type, index) => {
                return <ListItem key={index}>{type}</ListItem>;
              })}
            </OrderedList>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
export default App;
