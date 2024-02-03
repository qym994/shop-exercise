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
totalPage:number
currentPage:number
//每页数据数
itemsPerPage:number

}