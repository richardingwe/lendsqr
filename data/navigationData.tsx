import Icon from "@/components/global/icons";

export const navigations = [
	{
		links: [
			{
				label: "Dashboard",
				icon: <Icon.DashboardIcon />,
				to: "/dashboard",
			},
		],
	},
	{
		sectionTitle: "CUSTOMERS",
		links: [
			{
				label: "Users",
				icon: <Icon.UsersIcon />,
				to: "/users",
			},
			{
				label: "Guarantors",
				icon: <Icon.GuarantorsIcon />,
				to: "/",
			},
			{
				label: "Loans",
				icon: <Icon.LoansIcon />,
				to: "/",
			},
			{
				label: "Decision Models",
				icon: <Icon.DecisionModelsIcon />,
				to: "/",
			},
			{
				label: "Savings",
				icon: <Icon.SavingsIcon />,
				to: "/",
			},
			{
				label: "Loan Requests",
				icon: <Icon.LoanRequestsIcon />,
				to: "/",
			},
			{
				label: "Whitelist",
				icon: <Icon.WhitelistIcon />,
				to: "/",
			},
			{
				label: "Karma",
				icon: <Icon.KarmaIcon />,
				to: "/",
			},
		],
	},
	{
		sectionTitle: "BUSINESSES",
		links: [
			{
				label: "Organization",
				icon: <Icon.BriefcaseIcon />,
				to: "/",
			},
			{
				label: "Loan Products",
				icon: <Icon.LoanRequestsIcon />,
				to: "/",
			},
			{
				label: "Savings Products",
				icon: <Icon.SavingsProductsIcon />,
				to: "/",
			},
			{
				label: "Fees and Charges",
				icon: <Icon.FeesAndChargesIcon />,
				to: "/",
			},
			{
				label: "Transactions",
				icon: <Icon.TransactionsIcon />,
				to: "/",
			},
			{
				label: "Services",
				icon: <Icon.ServicesIcon />,
				to: "/",
			},
			{
				label: "Service Account",
				icon: <Icon.ServiceAccountIcon />,
				to: "/",
			},
			{
				label: "Settlements",
				icon: <Icon.SettlementsIcon />,
				to: "/",
			},
			{
				label: "Reports",
				icon: <Icon.ReportsIcon />,
				to: "/",
			},
		],
	},
	{
		sectionTitle: "SETTINGS",
		links: [
			{
				label: "Preferences",
				icon: <Icon.PreferencesIcon />,
				to: "/dashboard",
			},
			{
				label: "Fees and Pricing",
				icon: <Icon.FeesAndPricingIcon />,
				to: "/dashboard",
			},
			{
				label: "Audit Logs",
				icon: <Icon.AuditLogsIcon />,
				to: "/dashboard",
			},
		],
	},
];
