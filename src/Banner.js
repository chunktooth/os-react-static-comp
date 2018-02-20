import React from 'react';
import Button from './Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-left'>
        <h2>Set your motion towards an untold future</h2>
        <p>In many ways, dystopian societies can be seen as conservative ideas against modernization and are explored in various sub-genres of fiction to draw attention to real-world issues surrounding ethics, science and technologies - often characterized by dehumanization, totalitarian governments, environmental disasters, or other characteristics associated with a cataclysmic decline in society. </p>
        <div className='button-holder'>
          <Button buttonType='dark'
                  buttonText="Take me there" />
          <Button buttonType='light'
                  buttonText="I'm outta here" />
        </div>
      </div>
      <div className='banner-right'></div>
    </div>
  )
}

export default Banner;