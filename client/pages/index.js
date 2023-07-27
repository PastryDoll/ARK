import buildClient from "../api/build-client";

const LandingPage = ({currentUser}) => {
    return currentUser ? <h1>You are signed in</h1> :
    <h1>You are NOT signed in</h1>
};

// I think getInitialProps is outdated we should use getserversideprops:
// when changing pages getinitialprops change to client side..
// idk if that has any utility...
// if using getinitialprops we can use if typeof window === 'undefined'
// to know if we are on the server or not (no window on server)
// LandingPage.getInitialProps = async () => {
//     // const response = await axios.get('/api/users/currentuser');
//     console.log("executes");
//     // return response.data;
//     return {};
// };

export async function getServerSideProps(context) {
    const client = buildClient(context);
    const {data} = await client.get('/api/users/currentuser');
    return {props: data}
}


export default LandingPage;