import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}