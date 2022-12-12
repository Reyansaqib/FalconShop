import React,{useState} from "react";
import { createContext } from "react";

import pic1 from "../assets/images/p1.jpg"
import pic2 from "../assets/images/p2.jpg"
import pic3 from "../assets/images/p3.jpg"
import pic4 from "../assets/images/p4.jpg"
import pic5 from "../assets/images/p5.jpg"
import pic6 from "../assets/images/p6.jpg"
import pic7 from "../assets/images/p7.jpg"
import pic8 from "../assets/images/p8.jpg"
import pic9 from "../assets/images/p9.jpg"
import pic10 from "../assets/images/p10.jpg"
import pic11 from "../assets/images/p11.jpg"
import pic12 from "../assets/images/p12.jpg"
import pic13 from "../assets/images/p13.jpg"
import pic14 from "../assets/images/p14.jpg"
import pic15 from "../assets/images/p15.jpg"
import pic16 from "../assets/images/p16.jpg"
import pic17 from "../assets/images/p17.jpg"
import pic18 from "../assets/images/p18.jpg"
import pic19 from "../assets/images/p19.jpg"
import pic20 from "../assets/images/p20.jpg"
import pic21 from "../assets/images/p21.jpg"
import pic22 from "../assets/images/p22.jpg"
import pic23 from "../assets/images/p23.jpg"
import pic24 from "../assets/images/p24.jpg"
import pic25 from "../assets/images/p25.jpg"
import pic26 from "../assets/images/p26.jpg"
import pic27 from "../assets/images/p27.jpg"
import pic28 from "../assets/images/p28.jpg"
import pic29 from "../assets/images/p29.jpg"
import pic30 from "../assets/images/p30.jpg"
import pic31 from "../assets/images/p31.jpg"
import pic32 from "../assets/images/p32.jpg"
import pic33 from "../assets/images/p33.jpg"
import pic34 from "../assets/images/p34.jpg"
import pic35 from "../assets/images/p35.jpg"
import pic36 from "../assets/images/p36.jpg"
import pic37 from "../assets/images/p37.jpg"
import pic38 from "../assets/images/p38.jpg"
import pic39 from "../assets/images/p39.jpg"
import pic40 from "../assets/images/p40.jpg"
import pic41 from "../assets/images/p41.jpg"
import pic42 from "../assets/images/p42.jpg"
import pic43 from "../assets/images/p43.jpg"
import pic44 from "../assets/images/p44.jpg"
import pic45 from "../assets/images/p45.jpg"
import pic46 from "../assets/images/p46.jpg"
import pic47 from "../assets/images/p47.jpg"
import pic48 from "../assets/images/p48.jpg"
import pic49 from "../assets/images/p49.jpg"
import pic50 from "../assets/images/p50.jpg"
import pic51 from "../assets/images/p51.jpg"
import pic52 from "../assets/images/p52.jpg"
import pic53 from "../assets/images/p53.jpg"
import pic54 from "../assets/images/p54.jpg"
import pic55 from "../assets/images/p55.jpg"
import pic56 from "../assets/images/p56.jpg"
import pic57 from "../assets/images/p57.jpg"
import pic58 from "../assets/images/p58.jpg"
import pic59 from "../assets/images/p59.jpg"
import pic60 from "../assets/images/p60.jpg"
import pic61 from "../assets/images/p61.jpg"
import pic62 from "../assets/images/p62.jpg"
import pic63 from "../assets/images/p63.jpg"
import pic64 from "../assets/images/p64.jpg"
import pic65 from "../assets/images/p65.jpg"
import pic66 from "../assets/images/p66.jpg"
import pic67 from "../assets/images/p67.jpg"
import pic68 from "../assets/images/p68.jpg"
import pic69 from "../assets/images/p69.jpg"
import pic70 from "../assets/images/p70.jpg"
import pic71 from "../assets/images/p71.jpg"
import pic72 from "../assets/images/p72.jpg"
import pic73 from "../assets/images/p73.jpg"
import pic74 from "../assets/images/p74.jpg"
import pic75 from "../assets/images/p75.jpg"
import pic76 from "../assets/images/p76.jpg"
import pic77 from "../assets/images/p77.jpg"
import pic78 from "../assets/images/p78.jpg"
import pic79 from "../assets/images/p79.jpg"
import pic80 from "../assets/images/p80.jpg"
import pic81 from "../assets/images/p81.jpg"
import pic82 from "../assets/images/p82.jpg"
import pic83 from "../assets/images/p83.jpg"
import pic84 from "../assets/images/p84.jpg"
import pic85 from "../assets/images/p85.jpg"
import pic86 from "../assets/images/p86.jpg"
import pic87 from "../assets/images/p87.jpg"
import pic88 from "../assets/images/p88.jpg"
import pic89 from "../assets/images/p89.jpg"
import pic90 from "../assets/images/p90.jpg"
import pic91 from "../assets/images/p91.jpg"
import pic92 from "../assets/images/p92.jpg"
import pic93 from "../assets/images/p93.jpg"

import pic94 from "../assets/images/p94.jpg"
import pic95 from "../assets/images/p95.jpg"
import pic96 from "../assets/images/p96.jpg"
import pic97 from "../assets/images/p97.jpg"
import pic98 from "../assets/images/p98.jpg"
import pic99 from "../assets/images/p99.jpg"
import pic100 from "../assets/images/p100.jpg"
import pic101 from "../assets/images/p101.jpg"
import pic102 from "../assets/images/p102.jpg"
import pic103 from "../assets/images/p103.jpg"
import pic104 from "../assets/images/p104.jpg"
import pic105 from "../assets/images/p105.jpg"
import pic106 from "../assets/images/p106.jpg"
import pic107 from "../assets/images/p107.jpg"
import pic108 from "../assets/images/p108.jpg"
import pic109 from "../assets/images/p109.jpg"
import pic110 from "../assets/images/p110.jpg"
export const ProductContext=createContext()

const ProductContextProvider=(props)=>{
    const [products] = useState([
        {id:1,name:"Dennis Lingo",maincategory:"male",subcategory:"Shirts",brand:"Dennis-Lingo",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic1,pic2:pic2,pic3:pic3,pic4:pic4},
        {id:2,name:"Amazon Brand",maincategory:"male",subcategory:"Shirts",brand:"Amazon-Brand",baseprice:3000,discount:50,finalprice:1500,color:"blue",size:"XL",pic1:pic5,pic2:pic6,pic3:pic7,pic4:pic8},
        {id:3,name:"Allen Solly Shirts",maincategory:"male",subcategory:"Shirts",brand:"Allen-Solly",baseprice:2000,discount:50,finalprice:1000,color:"blue",size:"XL",pic1:pic9,pic2:pic10,pic3:pic11,pic4:pic12},
        {id:4,name:"Allen Solly Jeans ",maincategory:"male",subcategory:"Jeans",brand:"Allen-Solly",baseprice:6000,discount:50,finalprice:3000,color:"blue",size:"XL",pic1:pic13,pic2:pic14,pic3:pic15,pic4:pic16},
        {id:5,name:"Levi's Jeans",maincategory:"male",subcategory:"Jeans",brand:"Levi's",baseprice:500,discount:10,finalprice:450,color:"blue",size:"XL",pic1:pic17,pic2:pic18,pic3:pic19,pic4:pic20},
        {id:6,name:"Ben Martin Jeans",maincategory:"male",subcategory:"Jeans",brand:"Ben-Martin",baseprice:500,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic21,pic2:pic22,pic3:pic23,pic4:pic24},
        {id:7,name:"US POLO TSHIRTS",maincategory:"male",subcategory:"Tshirts",brand:"USPOLO",baseprice:5000,discount:10,finalprice:2500,color:"blue",size:"XL",pic1:pic33,pic2:pic34,pic3:pic35,pic4:pic36},
        {id:8,name:"Amazon Brand",maincategory:"male",subcategory:"Tshirts",brand:"Amazon Brand",baseprice:5000,discount:50,finalprice:450,color:"blue",size:"XL",pic1:pic29,pic2:pic30,pic3:pic31,pic4:pic32},
        {id:9,name:"Allen Solly",maincategory:"male",subcategory:"Tshirts",brand:"Allen-Solly",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic25,pic2:pic26,pic3:pic27,pic4:pic28},
        {id:10,name:"Sight Bomb Tops",maincategory:"female",subcategory:"Tops",brand:"SightBomb",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic45,pic2:pic46,pic3:pic47,pic4:pic48},
        {id:11,name:"Puma Tops",maincategory:"female",subcategory:"Tops",brand:"Puma",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic55,pic2:pic56,pic3:pic57,pic4:pic58},
        {id:12,name:"Lymio Tops",maincategory:"female",subcategory:"Tops",brand:"Lymio",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic59,pic2:pic60,pic3:pic61,pic4:pic62},
        {id:13,name:"Sight Bomb Shorts",maincategory:"female",subcategory:"Shorts",brand:"SightBomb",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic49,pic2:pic50,pic3:pic51,pic4:pic50},
        {id:14,name:"Stars And You Shorts",maincategory:"female",subcategory:"Shorts",brand:"StarsAndYou",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic41,pic2:pic42,pic3:pic43,pic4:pic44},
        {id:15,name:"Lymio Shorts",maincategory:"female",subcategory:"Shorts",brand:"Lymio",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic37,pic2:pic38,pic3:pic39,pic4:pic40},
        {id:16,name:"Puma Shorts",maincategory:"female",subcategory:"Shorts",brand:"Puma",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic52,pic2:pic53,pic3:pic54,pic4:pic52},
        {id:17,name:"Brakhat Muslim Dress",maincategory:"female",subcategory:"MuslimDresses",brand:"Barakhat",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic63,pic2:pic64,pic3:pic66,pic4:pic65},
        {id:18,name:"Puma Tshirts for Women",maincategory:"female",subcategory:"Tshirts",brand:"Puma",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic71,pic2:pic72,pic3:pic73,pic4:pic74},
        {id:19,name:"Levi's Tshirts for women",maincategory:"female",subcategory:"Tshirts",brand:"Levi's",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic67,pic2:pic70,pic3:pic68,pic4:pic69},
        {id:20,name:"Amazon Brand Tshirts for women",maincategory:"female",subcategory:"Tshirts",brand:"Amazon-Brand",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic75,pic2:pic76,pic3:pic77,pic4:pic78},
        {id:21,name:"Amazon Brand Boy Kid's Shirt",maincategory:"kids",subcategory:"Shirts",brand:"Amazon-Brand",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic79,pic2:pic80,pic3:pic82,pic4:pic81},
        {id:22,name:"Dennis Lingo Boy Kid's Shirt",maincategory:"kids",subcategory:"Shirts",brand:"Dennis-Lingo",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic83,pic2:pic84,pic3:pic85,pic4:pic86},
        {id:23,name:"Allen Solly Boy Kid's Shirt",maincategory:"kids",subcategory:"Shirts",brand:"Allen-Solly",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic87,pic2:pic88,pic3:pic89,pic4:pic90},
        {id:24,name:"Amazon Brand Boy Kid's Jeans",maincategory:"kids",subcategory:"Jeans",brand:"Amazon-Brand",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"SM",pic1:pic99,pic2:pic100,pic3:pic101,pic4:pic102},
        {id:25,name:"Cherokee Boy's Relaxed Fit Jeans",maincategory:"kids",subcategory:"Jeans",brand:"Cherokee",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"SM",pic1:pic95,pic2:pic96,pic3:pic97,pic4:pic98},
        {id:26,name:"Cherokee Boy's Relaxed Fit Jeans",maincategory:"kids",subcategory:"Jeans",brand:"Cherokee",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"XL",pic1:pic91,pic2:pic93,pic3:pic92,pic4:pic94},
        {id:27,name:"EasyBuy Girls Shirt",maincategory:"kids",subcategory:"Shirts",brand:"EasyBuy",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"SM",pic1:pic103,pic2:pic104,pic3:pic105,pic4:pic106},
        {id:28,name:"Pepe Jeans Girl's Regular fit Shirt",maincategory:"kids",subcategory:"Shirts",brand:"Pepe",baseprice:5000,discount:50,finalprice:2500,color:"blue",size:"SM",pic1:pic107,pic2:pic108,pic3:pic109,pic4:pic110}

        
    ])
    return(
        <>
        <ProductContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductContext.Provider>
        </>
    )
}
export default ProductContextProvider