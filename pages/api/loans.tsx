import { parseCookies } from '../../helpers';

export default async (req: any, res: any) => {
  const loginDetails = JSON.parse(parseCookies(req).spacetrader);
  const result = await fetch('https://api.spacetraders.io/game/loans', {
    headers: {
      Authorization: `Bearer ${loginDetails.token}`
    },
    method: 'GET'
  });
  const data = await result.json();

  res.status(200).json(data.loans);
};
