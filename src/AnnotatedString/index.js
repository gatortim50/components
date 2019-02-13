import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withEditable, withValueAsChildren } from 'utils/withEditable'
import { withValue } from 'utils/withValue'
import { Input } from 'Input'
import { Text } from 'Text'
import { Flex } from 'FlexBox'

const StyledInput = styled(Input)`
  flex-grow: 1;
`

const Label = styled(Text).attrs(({ left, right }) => ({
  fontSize: 2,
  lineHeight: 3,
  color: 'darkestGray',
  fontWeight: 3,
  as: 'div',
  ml: left ? 0 : 1,
  mr: right ? 0 : 1
}))``

const StyledContainer = styled(Flex)`
  align-items: center;
`

const WithValueText = styled(withValueAsChildren(Text)).attrs({
  fontWeight: 7
})`
  flex-grow: 0;
`

class AnnotatedStringWrapper extends React.Component {

  static Label = Label

  render () {
    const {
      LeftDecorator,
      RightDecorator,
      alwaysShowDecorators,
      readOnly,
      ...rest
    } = this.props

    const Component = !readOnly ? StyledInput : WithValueText

    return (
      <StyledContainer>
        {(readOnly || alwaysShowDecorators) && LeftDecorator && (
          <LeftDecorator left />
        )}
        <Component readOnly={readOnly} {...rest} />
        {(readOnly || alwaysShowDecorators) && RightDecorator && (
          <RightDecorator right />
        )}
      </StyledContainer>
    )
  }

}

AnnotatedStringWrapper.propTypes = {
  alwaysShowDecorators: PropTypes.bool,
  ...Input.propTypes
}

AnnotatedStringWrapper.defaultProps = {
  ...Input.defaultProps,
  alwaysShowDecorators: false
}

export const AnnotatedString = withValue(
  'string',
  withEditable(AnnotatedStringWrapper)
)
