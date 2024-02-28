import {type RemovableRef } from "@vueuse/core"
//不引入会报错
export const useShopcartStore = defineStore("cart", { 
        state:()=>{
         return{
           items:useLocalStorage<CartItem[]>("cart",[])
         }
        },
        getters:{
          totalCount:(state)=>{
            return state.items.reduce((a,b)=>a + b.count,0)
          },

          totalPrice:(state)=>{
            return state.items.reduce((a,b)=> a + b.count * b.price,0)
          }},
        actions:{
          addItem(product:Product,count:number){
            if(count<=0){
              return
            }
            const cartItem = this.items.find(item => item.id == product.id)
            if(cartItem){
              //货品未添加的情况
              const usercount = count + cartItem.count
              if(usercount>cartItem.stock){
                //判断是否还有存货
                cartItem.count = cartItem.stock
              }else{
                cartItem.count = usercount
              }
              //货品为已添加的情况
            } else{
              count = count <= product.stock ? count : product.stock
              this.items.push({...product,count})
              }
          },
          removeItem(id:number){

            this.items =  this.items.filter((item)=>item.id !== id)
          },
          clearItem(){
            this.items = []
          }
        }
        })
  