import React from 'react'

import grayWave from '../../images/grayWave.svg'
import boyAndGirl from '../../images/boyAndGirl.svg'
import arrowTarget from '../../images/arrowTarget.svg'
import manAndChild from '../../images/manAndChild.svg'
import socialCart from '../../images/socialCart.svg'
import sendPackage from '../../images/sendPackage.svg'

import classes from './index.module.scss'

function Banner () {
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.titleContainer}>
        <span className={classes.bannerTitle}>¡Hay equipo!</span>
        <span className={classes.bannerSubtitle}>¿Cómo funciona?</span>
      </div>
      <img src={boyAndGirl} className={classes.boyAndGirlImg} />
      <img src={grayWave} alt='grayWave' className={classes.grayWaveImg} />
      <div className={classes.informativeImagesContainer}>
        <div className={classes.imgTextContainer}>
          <img src={arrowTarget} className={classes.informativeImage} />
          <span className={classes.informativeText}>
            Elegí el producto que más te guste
          </span>
        </div>
        <div className={classes.imgTextContainer}>
          <img src={manAndChild} className={classes.informativeImage} />
          <span className={classes.informativeText}>
            Sumate al grupo de compra
          </span>
        </div>
        <div className={classes.imgTextContainer}>
          <img src={socialCart} className={classes.informativeImage} />
          <span className={classes.informativeText}>
            Compartí y sumá más compradores para completar el grupo y obtener el
            descuento
          </span>
        </div>
        <div className={classes.imgTextContainer}>
          <img src={sendPackage} className={classes.informativeImage} />
          <span className={classes.informativeText}>
            Una vez completo, tu compra se hace efectiva y recibís el producto
            en tu casa
          </span>
        </div>
      </div>
    </div>
  )
}

export default Banner
