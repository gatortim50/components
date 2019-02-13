import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet, variant } from '../defaultTheme'
import { borderRadius, space, width, border, borderColor, height, color } from 'styled-system'
import { Text } from 'Text'
import { Icon } from 'Icon'
import { Flex } from 'FlexBox'

const styleVariant = variant({
  key: 'progressBars'
})

// uses border radius only when progress is 100%
const completeBorderRadius = (property) => ({ progress, borderRadius }) => {
  if (!borderRadius || progress === 100) {
    return null
  }

  return `${property}: 0;`
}

const Bar = styled.div.attrs(({ progress }) => ({
  style: { width: `${progress}%` }
}))`
  box-shadow: none;
  height: 100%;
  ${color};
  ${borderRadius};
  ${completeBorderRadius('border-top-right-radius')};
  ${completeBorderRadius('border-bottom-right-radius')};
  transition: width 1s ease-in-out;
`

const Wrapper = styled(Flex).attrs(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center'
}))`
`

const Progress = styled.div`
  ${border};
  ${borderColor};
  ${borderRadius};
  ${space};
  ${styleVariant};
  height: ${({ height }) => themeGet(`lineHeights.${height}`)};
  box-shadow:none;
  position: relative;
  z-index: 0;
  width: 100%;
`

export const ProgressBar = ({ children, className, ...props }) => (
  <Wrapper>
    <Progress {...props} className={className}>
      <Bar {...props} className='ProgressBar__Bar' />
    </Progress>
    {children}
  </Wrapper>
)

ProgressBar.Text = styled(Text).attrs(() => ({
  as: 'span'
}))`
  color: ${themeGet('colors.darkGray')};
  padding: 2px;
  text-align: left;
  font-family: ${themeGet('fonts.sansSerif')};
  font-size: ${themeGet('fontSizes.0')};
  letter-spacing: ${themeGet('letterSpacings.1')};
  line-height: ${themeGet('lineHeights.1')};
  display: block;
`

ProgressBar.Icon = styled(Icon).attrs(({ icon = 'cancel', color = 'lightGray', size = 2 }) => ({
  icon,
  color,
  size
}))`
  border-radius: ${themeGet('radii.1')};
  margin-left: 4px;
`

ProgressBar.defaultProps = {
  variant: 'default',
  borderRadius: 3,
  bg: 'dark',
  border: '2px solid',
  borderColor: 'lightestGray',
  height: '12px',
  animated: false
}

ProgressBar.propTypes = {
  ...border.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  progress: PropTypes.number.isRequired,
  animated: PropTypes.bool,
  variant: PropTypes.string,
  bg: PropTypes.string
}
