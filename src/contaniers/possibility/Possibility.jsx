import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__poss section__padding' id='possibility'>
      <div className='gpt3__poss-image'>
          <img src={possibility} alt="possibilty" />
      </div>
      <div className='gpt3__poss-content'>
        <p className='gpt3__poss-content__start'>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='gpt3__poss-content__middle'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='gpt3__poss-content__end'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility