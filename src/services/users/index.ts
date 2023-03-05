import { UsersRequest, UsersResponse } from "@/types/services/users";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getRequest = (url: string) => ({
	url,
});

export const users = createApi({
	reducerPath: "users",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<UsersResponse, UsersRequest>({
			query: () => getRequest("/api/v1/users"),
		}),
	}),
});

export const { useGetUsersQuery } = users;
