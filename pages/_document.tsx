import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class Root extends Document {
  render() {
    return (
      <html lang={this.props.__NEXT_DATA__.query.language as string}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
