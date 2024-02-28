//商品信息
interface Product{
    id:number
    name:string
    description:string
    price:number
    stock:number
    image_url:string
    category_id:number
}

//分页信息
interface Page<T>{
data:Array<T>
totleItem:number
totalPages:number
currentPage:number
//每页数据数
itemsPerPage:number
}

//购物车
type CartItem = Product & {count:number}

//用户数据
interface User{
    id:number
    username:string
    email:string
    avatar_url:string
}

interface LoginUser{
    token?:string
    user?:User
}