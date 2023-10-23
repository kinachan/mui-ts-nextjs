import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";



export default function Layout({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
      <Head>
        <title key="page-title">APP TITLE</title>
        {/* <link rel="apple-touch-icon" sizes="180x180" href={userState.faviconUrl || '/favicons/apple-touch-icon.png'} />
        <link rel="icon" type="image/png" sizes="32x32" href={userState.faviconUrl || '/favicons/favicon-32x32.png'}/>
        <link rel="icon" type="image/png" sizes="16x16" href={userState.faviconUrl || '/favicons/favicon-16x16.png'}/> */}
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        {/* <link data-favicon="favicon" rel="shortcut icon" href={state.avatarUrl || ''} /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* <Navbar
        authStatus={userState.uid != null ? state.authStatus : AUTH_STATUS.NOT_YET}
        avatarUrl={userState.uid != null ? state.avatarUrl : null}
        loginUserName={userState.uid != null ? state.loginUserName: null}
        onClickLogout={onClickLogout}
      /> */}
      <Component {...pageProps} />
      {/* <Notification
        isShow={state.isShowNotice}
        level={state.noticeLevel}
        message={state.noticeMessage}
        onDeleteIconClick={() => {
          dispatch(action.closeNotice());
        }}
      /> */}
      
    </React.Fragment>
  )
}