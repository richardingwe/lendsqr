import "../styles/globals.scss";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import store from "../store";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
	);
}
