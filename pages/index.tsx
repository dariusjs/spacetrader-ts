import { parseCookies } from '../helpers';

export default function Home({ loginDetails }: any) {
  // const loggedinUser = JSON.parse(loginDetails.spacetrader);

  return (
    <div>
      <div>
        <h2>
          <p>SpaceTracer TS</p>
          {/* <p>Signed in with: {loggedinUser.user}</p> */}
        </h2>
        <div></div>
      </div>
    </div>
  );
}

Home.getInitialProps = async ({ req }: any) => {
  let loginDetails = parseCookies(req);

  return {
    loginDetails: loginDetails
  };
};
