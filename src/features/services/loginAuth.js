import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const LoginAuth = createApi({
    reducerPath: "loginauth",
    tagTypes: ["auth"],
    baseQuery: fetchBaseQuery ({baseUrl: `http://chaw.giize.com/api`}),
    // If using Laravel Sanctum for session-based auth, you may need to include credentials
    credentials: 'include',  // This sends cookies with requests if needed
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        // You can add any other headers like Authorization if necessary
        // headers.set('Authorization', `Bearer ${token}`);
        return headers;
    },
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
                url: `/login`,
                method: "POST",
                body: user
            }),
            invalidatesTags : ["auth"]
        })
    })
})

export const {useLoginMutation} = LoginAuth