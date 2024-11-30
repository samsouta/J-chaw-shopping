import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 export const resgiterAuth = createApi({
    reducerPath: "authres",
    tagTypes: ['auth'],
    baseQuery: fetchBaseQuery ({baseUrl: `http://chaw.giize.com/api`}), 
    endpoints: (builder) => ({
        resgiter: builder.mutation({
            query: (user) => ({
                url: `/register`,
                method: "POST",
                body: user
            }),
            invalidatesTags : ["auth"]
        })
    })
})

export const {useResgiterMutation} = resgiterAuth