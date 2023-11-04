import React from 'react';
import { sendshop } from '../contains';

const SendShopPage = () => {
  return (
    <section className='send-shop'>
      <div className='send-shop-description'>
      <h1>Inventive Lifestyle Synergy</h1>
        <p>
            JENNY Tools are designed with uniform specifications, allowing you to freely mix and match them.
        </p>
        <button>shop now</button>
        
      </div>
      <div className='send-shop-image'>
              <img src={sendshop} />
        </div>
    </section>
  )
};

export default SendShopPage;