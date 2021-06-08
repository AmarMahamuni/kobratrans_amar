export interface MainGoods {
   main_good_name:string;
  }
  type AddMainGood= (main_good_name: string) => void;

  export interface MainSubGoods {
    main_good:MainGoods;
    sub_good_name:string;
   }
   type AddSubGood= (main_good_name: string,main_good:MainGoods) => void;
 