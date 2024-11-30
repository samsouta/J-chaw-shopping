import React from 'react'
import CancelOrderChild from './CancelOrder/CancelOrderChild'
const cancelorder = [
    {
        "id": 1,
        "title": "bracelet 101",
        "img": "https://i.pinimg.com/564x/b5/41/1f/b5411f086ce2073b10c3258fc6b0cd78.jpg",
        'price': 3000,
        "address": 'Q2MJ+QMF, အ​နောက်မြို့ပတ်လမ်း စိန်ပန်းရပ်, Taunggyi',
        "arrtime" : "2/4/2024"
    },
    {
        "id": 2,
        "title": "cute little butterfly",
        "img": "https://i.pinimg.com/564x/07/be/0c/07be0ca0567924a2659f73982b9b75b6.jpg",
        'price': 13000,
        "address": "73/14 Pearl st , Yae Aye Queen Quarter Taunggyi, 06011",
        "arrtime" : "2/5/2024"
    },
    {
        "id": 3,
        "title": "blue ring 224",
        "img": "https://i.pinimg.com/564x/d9/31/5c/d9315c865f7d94e1c8f8f0bc02748bb4.jpg",
        'price': 3400,
        "address": "Ya-3/47 , 71(C)st, Bet: Myawaddymingyi St.&, 113th St, Mandalay",
        "arrtime" : "1/2/2024"
        
    },
    {
        "id": 4,
        "title": "Gold Plated Lucky Colorful Butterfly Bracelet",
        "img": "https://i.pinimg.com/564x/d6/00/a6/d600a6016484b981edd5e05d91c51398.jpg",
        'price': 44100,
        "address": "R576+F58, မဟာစည်သာသနရိပ်သာလမ်း, Yangon",
        "arrtime" : "1/1/2024"


    },
]
const OrderCancel = () => {
  return (
    <div>
        {
            cancelorder?.map((item,index)=>{
                return(
                    <div key={index} >
                        <CancelOrderChild {...item} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default OrderCancel
