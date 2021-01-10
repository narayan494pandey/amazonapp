import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
 
            <img className="home__image" alt="amazon" 
                src=" https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           
            />
            <div className="home__row">
                <Product title='Good Trimer for Save' 
                    id="4591"
                    price={99.99} 
                    image='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/Personalcare/Shavers._CB440874771_.jpg' 
                    rating={4}
                />
                <Product 
                    title='Nice looking smart watch'
                    id="4592" 
                    price={299.99} 
                    image='https://m.media-amazon.com/images/I/41aBcpoWWfL._AC_UL320_.jpg' 
                    rating={3}
                
                
                />
                
            </div>
            <div className="home__row">
                <Product title='The lean startup' 
                    id="4593"
                    price={29.99} 
                    image='https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg' 
                    rating={4}
                />
                <Product title='Moile Holder' 
                    id="4594"
                    price={9.99} 
                    image='https://images-eu.ssl-images-amazon.com/images/I/61sCL37xvlL._AC_UL200_SR200,200_.jpg' 
                    rating={3}
                    
                
                
                />
                <Product   title='The Daily Nutrition' 
                    price={15.99} 
                    id="4595"
                    image='https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/Diet/Dailynutritionadults._CB442445732_.jpg' 
                    rating={4}
                    />
            </div>
            <div className="home__row">
                <Product title='Chocolates with amazing flavour ' 
                    price={20.99} 
                    id="4596"
                    image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg' 
                    rating={5} />
            </div>
            </div>
        </div>
    )
}

export default Home
