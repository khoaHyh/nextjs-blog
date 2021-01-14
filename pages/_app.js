import '../styles/global.css';

// Top-level component that will be common across all different pages
// You can only import global css here because global CSS affects all
// elements on the page.
const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App;
