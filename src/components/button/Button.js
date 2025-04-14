import { memo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import AngleForward from 'assets/svg/angle-forward.svg'

import stl from './Button.module.scss'

const Button = ({ label, onClick, customClass }) => (
  <button 
    onClick={onClick} 
    className={clsx(stl.btn, customClass)}
    type="button"
  >
    {label} <AngleForward />
  </button>
)

Button.defaultProps = {
  label: 'Button',
  onClick: () => {}, // No-op function instead of console.log
  customClass: '',
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
}

// Using memo to prevent unnecessary re-renders
export default memo(Button)
