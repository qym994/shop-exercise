export default createFetch({
    baseUrl:import.meta.env.VITE_BASE_URL,
    options:{
        refetch:true
    }
})