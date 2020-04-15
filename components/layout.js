import Head from 'next/head'
import { Container } from 'reactstrap'

const Layout = (props) => (
    <Container fluid={true} style={{padding: 0}}>
        <Head>
            <meta charSet = "UTF-8"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155374728-3"></script>
            <script dangerouslySetInnerHTML = {{__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-155374728-3');`}}>    
            </script>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
            <title>{props.title}</title>
        </Head>
        {props.children}
    </Container>
)

export default Layout;