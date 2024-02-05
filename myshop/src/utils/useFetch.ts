export default   <T>(url:Ref<string>)=>{
    const data = ref<null | T>(null)
    const loading = ref(true)
    const error = ref<Error | null>(null);
    const page = ref(1);

    watchEffect(()=>{
        loading.value = true
        fetch(import.meta.env.VITE_BASE_URL + url.value)
        .then((res) => res.json())
        .then((json) =>  data.value = json)
        .catch((err)=>error.value = err)
        .finally(()=>loading.value = false)
        
    })

    

    return{data , loading , error}
    
}