import React from 'react'
import { Header } from './Header'
import { Main } from './Main'

export const Root =()=> {
    return (
      <div>
         <Header />
         <div className="container col-lg-10 col-md-10 col-xs-12 col-sm-12 col-lg-offset-2 col-md-offset-2">
            <Main />
         </div>
    </div>
    );
}

//export default Root;