import '../styles/globals.css'
import {Layout, LayoutMobile} from '../components/layout'
import { useState, useEffect } from 'react';
import {Company_Dashboard, Company_Dashboard_Mobile} from './index'

function getWindowSize(){
  const [width, setWidth] = useState(null)

  useEffect(() => {
    if (window !== 'undefined'){
      function handleWindowSizeChange() {
        setWidth(window.innerWidth);
      }
    }
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange()
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  return width

}

function MyApp({ Component, pageProps }) {
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = getWindowSize() <= 1200;
  return (
    isMobile ? 
      <LayoutMobile>
        <Company_Dashboard_Mobile />
        {/* <Component {...pageProps} /> */}
      </LayoutMobile> 
    :
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
