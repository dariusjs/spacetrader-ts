import { parseCookies } from '../../helpers';

export default async (req: any, res: any) => {
  const loginDetails = JSON.parse(parseCookies(req).spacetrader);

  if (req.method === 'POST') {
    const result = await fetch(`https://api.spacetraders.io/users/${loginDetails.user}/loans?type=STARTUP`, {
      headers: {
        Authorization: `Bearer ${loginDetails.token}`
      },
      method: 'POST'
    });
    const data = await result.json();

    res.status(200).json(data);
  } else {
    const result = await fetch('https://api.spacetraders.io/game/loans', {
      headers: {
        Authorization: `Bearer ${loginDetails.token}`
      },
      method: 'GET'
    });
    const data = await result.json();

    res.status(200).json(data.loans);
  }
};
