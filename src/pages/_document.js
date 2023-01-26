import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        // content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                        content='width=device-width, initial-scale=1.0, user-scalable=no'
                    />
                    <meta name='HandheldFriendly' content='true' />
                    <link
                        rel='shortcut icon'
                        href='https://wedding-cloud.s3.ap-northeast-2.amazonaws.com/love_letter.jpeg'
                    ></link>
                    <link
                        rel='apple-touch-icon'
                        href='https://wedding-cloud.s3.ap-northeast-2.amazonaws.com/love_letter.jpeg'
                    ></link>
                    <link
                        rel='image_src'
                        href='https://wedding-cloud.s3.ap-northeast-2.amazonaws.com/love_letter.jpeg'
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
