import Table from '../components/Table';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Loan } from './types/spaceTrader';

function Ships() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ammount',
        accessor: 'col1'
      },
      {
        Header: 'collateral',
        accessor: 'col2'
      },
      {
        Header: 'rate',
        accessor: 'col3'
      },
      {
        Header: 'term (days)',
        accessor: 'col4'
      },
      {
        Header: 'type',
        accessor: 'col5'
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('/api/loans', {
        method: 'GET'
      });
      const data = await result.json();
      const currentAccount = data.map((element: Loan) => {
        return {
          col1: element.amount,
          col2: element.collateralRequired,
          col3: element.rate,
          col4: element.termInDays,
          col5: element.type
        };
      });
      setData(currentAccount);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Ships;
