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
				to: "/dashboard",
			},
			{
				label: "Loans",
				icon: <Icon.LoansIcon />,
				to: "/dashboard",
			},
			{
				label: "Decision Models",
				icon: <Icon.DecisionModelsIcon />,
				to: "/dashboard",
			},
			{
				label: "Savings",
				icon: <Icon.SavingsIcon />,
				to: "/dashboard",
			},
			{
				label: "Loan Requests",
				icon: <Icon.LoanRequestsIcon />,
				to: "/dashboard",
			},
			{
				label: "Whitelist",
				icon: <Icon.WhitelistIcon />,
				to: "/dashboard",
			},
			{
				label: "Karma",
				icon: <Icon.KarmaIcon />,
				to: "/dashboard",
			},
		],
	},
	{
		sectionTitle: "BUSINESSES",
		links: [
			{
				label: "Organization",
				icon: <Icon.BriefcaseIcon />,
				to: "/dashboard",
			},
			{
				label: "Loan Products",
				icon: <Icon.LoanRequestsIcon />,
				to: "/dashboard",
			},
			{
				label: "Savings Products",
				icon: <Icon.SavingsProductsIcon />,
				to: "/dashboard",
			},
			{
				label: "Fees and Charges",
				icon: <Icon.FeesAndChargesIcon />,
				to: "/dashboard",
			},
			{
				label: "Transactions",
				icon: <Icon.TransactionsIcon />,
				to: "/dashboard",
			},
			{
				label: "Services",
				icon: <Icon.ServicesIcon />,
				to: "/dashboard",
			},
			{
				label: "Service Account",
				icon: <Icon.ServiceAccountIcon />,
				to: "/dashboard",
			},
			{
				label: "Settlements",
				icon: <Icon.SettlementsIcon />,
				to: "/dashboard",
			},
			{
				label: "Reports",
				icon: <Icon.ReportsIcon />,
				to: "/dashboard",
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
