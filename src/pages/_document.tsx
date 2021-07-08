import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='en' dir='rtl'>
                <Head>
                    <link rel='shortcut icon' href='/images/Favicon.ico' />
                    <link href='/css/bootstrap.css' rel='stylesheet' />
                    <link href='/css/bootstrap-rtl.min.css' rel='stylesheet' />
                    <link href='/css/owl.carousel.css' rel='stylesheet' />
                    <link href='/css/font-awesome.css' rel='stylesheet' />
                    <link href='/css/jquery.countdown.css' rel='stylesheet' />
                    <link href='/css/docs.css' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
