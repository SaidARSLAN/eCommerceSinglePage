"use client"

import React from 'react';
import { sendshop } from '../contains';
import {motion,useScroll} from 'framer-motion'
import { useRef } from 'react';

const SendShopPage = () => {

  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["0 1", "1.33 1"]
  })

  return (
    <motion.div ref={ref}
    style={{scale: scrollYProgress, opacity:scrollYProgress}}>

    <section  className='send-shop' >
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
    </motion.div>
  )
};

export default SendShopPage;