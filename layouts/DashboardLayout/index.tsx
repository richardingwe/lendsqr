import Head from "next/head";
import AddNewWallet from "@/components/global/AddNewWallet";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/layouts/Navigation";
import { AppState } from "@/src/app/store";
import {
	setShowAddWalletModal,
	setShowSendReceiveModal,
} from "@/src/features/wallet/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import SendReceiveModal from "@/components/wallets/SendReceiveModal";
import WithdrawFundModal from "@/components/wallets/WithdrawFundModal";
import { useRouter } from "next/router";
import VerificationLevelOneModal from "@/components/home/Verification/VerificationLevelOneModal";
import VerificationLevelTwoModal from "@/components/home/Verification/VerificationLevelTwoModal";
import VerificationLevelThreeModal from "@/components/home/Verification/VerificationLevelThreeModal";
import SwapModal from "@/components/swap/SwapModal";
import CreateCardModal from "@/components/cards/CreateCardModal";
import CardActionsModal from "@/components/cards/CardActionsModal";

type DashboardLayoutProps = {
	title: string;
	children: React.ReactNode;
	padding?: boolean;
	backgroundColor?: boolean;
	goBack?: boolean;
	showMobileTitle?: boolean;
	headerLeftConponent?: JSX.Element;
	mobileHeaderBackgroundColor?: boolean;
};

export const delQuery = (asPath: string) => {
	return asPath.split("?")[0];
};

const DashboardLayout = ({
	children,
	title = "Aza | Swap, Save, Send and Receive Multiple Currencies Globally.",
	padding = true,
	backgroundColor = true,
	goBack = false,
	showMobileTitle = true,
	headerLeftConponent,
	mobileHeaderBackgroundColor = true,
}: DashboardLayoutProps) => {
	const showAddWalletModal = useSelector(
		(state: AppState) => state.wallet.showAddWalletModal
	);

	const showSendReceiveModal = useSelector(
		(state: AppState) => state.wallet.showSendReceiveModal
	);

	const showWithdrawFundModal = useSelector(
		(state: AppState) => state.wallet.showWithdrawFundModal
	);

	const dispatch = useDispatch();

	const router = useRouter();

	const { action = "", level = "", swapStep = "" } = router.query;

	return (
		<>
			<Head>
				<title>{`Aza${title ? ` | ${title}` : ""}`}</title>
			</Head>
			<section className='w-full min-h-screen bg-pc-01 xl:pl-[100px] xl:pt-14 xl:pb-5 xl:space-x-5 xl:flex'>
				<Navigation />
				<div className='xl:w-[calc(100vw-202px)] xl:h-full xl:space-y-4'>
					<Header
						goBack={goBack}
						title={title}
						showMobileTitle={showMobileTitle}
						headerLeftConponent={headerLeftConponent}
						mobileHeaderBackgroundColor={mobileHeaderBackgroundColor}
					/>
					<main
						className={`hidden overflow-auto xl:block h-[calc(100vh-148px)] w-full rounded-lg ${
							backgroundColor ? "bg-white" : ""
						} ${padding ? "p-10 pr-[100px]" : ""}`}>
						{children}
					</main>
					<main className='xl:hidden relative py-[88px] container w-full'>
						{children}
					</main>
				</div>
				<AddNewWallet
					showAddWalletModal={showAddWalletModal}
					setShowAddWalletModal={() => dispatch(setShowAddWalletModal())}
				/>
				<SendReceiveModal
					showSendReceiveModal={showSendReceiveModal}
					setShowSendReceiveModal={() => dispatch(setShowSendReceiveModal())}
				/>
				<WithdrawFundModal
					showWithdrawFundModal={
						action.toString() === "withdraw" || action.toString() === "fund"
					}
					setShowWithdrawFundModal={() => {
						(router.query.id || router.pathname === "/") &&
							router.replace({
								pathname: delQuery(router.asPath),
							});
					}}
				/>
				<VerificationLevelOneModal
					showLevelOneModal={level.toString() === "1"}
					setShowLevelOneModal={() => {
						router.replace({
							pathname: delQuery(router.asPath),
						});
					}}
				/>
				<VerificationLevelTwoModal
					showLevelTwoModal={level.toString() === "2"}
					setShowLevelTwoModal={() => {
						router.replace({
							pathname: delQuery(router.asPath),
						});
					}}
				/>
				<VerificationLevelThreeModal
					showLevelThreeModal={level.toString() === "3"}
					setShowLevelThreeModal={() => {
						router.replace({
							pathname: delQuery(router.asPath),
						});
					}}
				/>
				<SwapModal
					showSwapModal={
						swapStep.toString() === "pin" || swapStep.toString() === "success"
					}
					setShowSwapModal={() => {
						router.replace({
							pathname: router.pathname,
							query: {
								...router.query,
								swapStep: "",
							},
						});
					}}
				/>
				<CreateCardModal
					showCreateCardModal={action.toString() === "create-card"}
					setShowCreateCardModal={() => {
						router.replace({
							pathname: delQuery(router.asPath),
						});
					}}
				/>
				<CardActionsModal
					showCardActionsModal={action.toString() === "card-actions"}
					setShowCardActionsModal={() => {
						router.replace({
							pathname: delQuery(router.asPath),
						});
					}}
				/>
			</section>
		</>
	);
};

export default DashboardLayout;
