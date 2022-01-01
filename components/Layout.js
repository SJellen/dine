import Head from 'next/head'
import Header from './Header'


export default function Layout({children}) {

    return (
        <div >
        <Head>
            <title>Dine</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="Description" content="Designo" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
          </Head>
            <Header />
            <main >
                {children}
            </main>

        </div>
    )
}