import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const fetchData = createApi({
    reducerPath: "fetch",
    tagTypes: ['api'],
    baseQuery: fetchBaseQuery ({baseUrl: `https://bluetv.x10.bz/api/v1`}),
    endpoints: (builder) => ({
        getproducts: builder.query({
            query: () => `/products`,
            providesTags: ['api']
        })
    })

})

export const {useGetproductsQuery} = fetchData