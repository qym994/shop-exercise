import { useStorage, type RemovableRef } from "@vueuse/core"

export const useLoginUserStore = defineStore('loginUser',{
    state:()=>{
        return{ loginUser:useLocalStorage<LoginUser>('loginUser',{})}},
        getters:{
            isLogin:(state)=>{
                return "token" in state.loginUser && "user" in state.loginUser
            }
        },
    actions:{
        login(loginUser:LoginUser){
            this.loginUser = loginUser
        },
        logout(){
            this.loginUser = {}
        }
    }
})