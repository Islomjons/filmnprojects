import React from 'react'
import PayDetails from '../payDetails/PayDetails'
import "./PaySummaryBottom.css"

const PaySummaryBottom = () => {
  return (
    <div className='summaryBottom'>
    <div className='summaryBottom__container'>
        <h3 className='summaryBottom__heading'>Service description</h3>
        <p className='summaryBottom__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh hendrerit velit commodo pellentesque tellus urna magna tincidunt. Sagittis egestas in amet purus justo. Imperdiet mattis sagittis nisi, risus cursus in aenean eu interdum. Morbi eu, nec augue nunc neque a, senectus felis. Mattis ipsum auctor fames dui. In ultrices pulvinar pharetra, erat turpis nulla imperdiet sed. Eleifend massa magna risus dictum at est. Vitae massa nibh ornare libero, elit, leo. Sapien, nunc ipsum ullamcorper pellentesque. Facilisis lorem nibh diam id mus. Ac ac rhoncus viverra viverra et egestas eget porttitor. At ac non praesent nec lectus.</p>
    </div>
    <PayDetails />
</div>
  )
}

export default PaySummaryBottom