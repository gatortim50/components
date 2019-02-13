import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { background, space } from 'styled-system'
import { Flex } from 'FlexBox'

const classNames = {
  content: 'content'
}

const paddingTop = ({ aspectRatio }) => ({
  paddingTop: `${aspectRatio * 100}%`
})

const IntrinsicContainer = styled.div`
  position: relative;
  ${background};
  ${space};
  &::before {
    content: '';
    display: block;
    ${paddingTop};
  }
  > .content {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const Intrinsic = ({ children, ...props }) => (
  <IntrinsicContainer {...props}>
    <Flex className={classNames.content}>{children}</Flex>
  </IntrinsicContainer>
)

Intrinsic.propTypes = {
  aspectRatio: PropTypes.number
}

Intrinsic.defaultProps = {
  aspectRatio: 9 / 16
}
