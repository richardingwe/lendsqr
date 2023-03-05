export interface User {
	createdAt: string;
	orgName: string;
	userName: string;
	email: string;
	phoneNumber: string;
	lastActiveDate: string;
	profile: {
		firstName: string;
		lastName: string;
		phoneNumber: string;
		avatar: string;
		gender: string;
		bvn: number;
		address: string;
		currency: string;
	};
	guarantor: {
		firstName: string;
		lastName: string;
		string;
		phoneNumber: string;
		gender: string;
		address: string;
	};
	accountBalance: number;
	accountNumber: string;
	socials: {
		facebook: string;
		instagram: string;
		twitter: string;
	};
	education: {
		level: string;
		employmentStatus: string;
		sector: string;
		duration: string;
		officeEmail: string;
		monthlyIncome: number[];
		loanRepayment: number;
	};
	id: number;
}

export type UsersResponse = User[];

export type UsersRequest = {};

export type UserResponse = User;

export type UserRequest = {
	id: number;
};
