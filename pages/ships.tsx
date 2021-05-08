import Table from '../components/Table';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Ship } from '../types/spaceTrader';

function ShipsOverview() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'class',
        accessor: 'class'
      },
      {
        Header: 'manufacturer',
        accessor: 'manufacturer'
      },
      {
        Header: 'maxCargo',
        accessor: 'maxCargo'
      },
      {
        Header: 'plating',
        accessor: 'plating'
      },
      {
        Header: 'weapons',
        accessor: 'weapons'
      },
      {
        Header: 'speed',
        accessor: 'speed'
      },
      {
        Header: 'type',
        accessor: 'type'
      },
      {
        Header: 'purchaseLocations',
        accessor: 'purchaseLocations'
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('/api/ships', {
        method: 'GET'
      });
      const data = await result.json();
      const currentAccount = data.ships.map((element: Ship) => {
        // const purchaseLocations = element.purchaseLocations?.map((locs) => {
        //   return JSON.stringify(locs);
        // });
        return {
          class: element.class,
          manufacturer: element.manufacturer,
          maxCargo: element.maxCargo,
          plating: element.plating,
          weapons: element.weapons,
          speed: element.speed,
          type: element.type
          // purchaseLocations: purchaseLocations
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

export default ShipsOverview;
