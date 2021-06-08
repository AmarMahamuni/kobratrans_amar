export interface DropDetails {
      d_user: string;
    d_location: string,
    d_phone: string;
    d_comments: string;
    d_goods:GoodsDetails[];
 

  }
  export interface GoodsDetails{
    main_goods:string;
    sub_goods:string;
    goods_weight:string;
    goods_quantity:string;
  }
  type AddDrop = (    d_user: string, d_location: string, d_phone: string,d_comments: string,  d_goods:GoodsDetails[] ) => void;
  type Addgoods=(    main_goods:string,sub_goods:string,goods_weight:string, goods_quantity:string)=>void;