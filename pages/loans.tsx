import Table from '../components/Table';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Loan } from '../types/spaceTrader';

function Ships() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'type',
        accessor: 'col1',
        Cell: ({ value }: any) => (
          <Link href={{ pathname: 'api/loans', query: { type: value } }}>
            <a>{value}</a>
          </Link>
        )
      },
      {
        Header: 'ammount',
        accessor: 'col2'
      },
      {
        Header: 'collateral',
        accessor: 'col3'
      },
      {
        Header: 'rate',
        accessor: 'col4'
      },
      {
        Header: 'term (days)',
        accessor: 'col5'
      },
      {
        Header: '',
        accessor: 'col6'
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const requestLoan = async (event: any) => {
        await fetch('/api/loans', {
          method: 'POST'
        });
      };

      const result = await fetch('/api/loans', {
        method: 'GET'
      });

      const data = await result.json();
      const currentAccount = data.map((element: Loan) => {
        return {
          col1: element.type,
          col2: element.amount,
          col3: element.collateralRequired,
          col4: element.rate,
          col5: element.termInDays,
          col6: (
            <button onSubmit={requestLoan} type="submit">
              Register
            </button>
          )
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
