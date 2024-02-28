
export const useNoticeStore = defineStore('notice',  {
    state:()=>{
     return{
       shownotice:false
     }
    },
    actions:{
        hidenotice(){
            setTimeout(()=>{
            this.shownotice = false
            },1500)
        }
    }
 })
 