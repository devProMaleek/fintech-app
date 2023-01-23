import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ChangingProgressProvider = props => {
  const interval = 2000;
  const [valueIndex, setValueIndex] = useState(0)

useEffect(() => {
    setInterval(() => {
      setValueIndex((valueIndex + 1) % props.values.length)
    }, interval)

    return () => {
      clearInterval(interval)
    }
}, [])


  return (
    <>
      {props.children(props.values[valueIndex])}
    </>
  )
}

ChangingProgressProvider.propTypes = {}

export default ChangingProgressProvider