import {
	UserRequest,
	UserResponse,
	UsersRequest,
	UsersResponse,
} from "@/types/services/users";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getRequest = (url: string) => ({
	url,
});

export const users = createApi({
	reducerPath: "users",
	refetchOnReconnect: true,
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr",
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<UsersResponse, UsersRequest>({
			query: () => getRequest("/api/v1/users"),
		}),
		getUser: builder.query<UserResponse, UserRequest>({
			query: (data) => getRequest(`/api/v1/users/${data.id}`),
		}),
	}),
});

export const { useGetUsersQuery, useLazyGetUserQuery } = users;
