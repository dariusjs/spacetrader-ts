import Table from '../components/Table';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Account } from '../types/spaceTrader';

function AccountOverview() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1'
      },
      {
        Header: 'Credits',
        accessor: 'col2'
      },
      {
        Header: 'Ships',
        accessor: 'col3'
      },
      {
        Header: 'Loans',
        accessor: 'col4'
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('/api/account', {
        method: 'GET'
      });
      const data = await result.json();
      const currentAccount = data.map((element: Account) => {
        const loans = element.user.loans?.map((loans) => {
          return JSON.stringify(loans);
        });
        const ships = element.user.ships?.map((loans) => {
          return JSON.stringify(loans);
        });
        return {
          col1: element.user.username,
          col2: element.user.credits,
          col3: ships,
          col4: loans
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

export default AccountOverview;
