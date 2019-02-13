import React, { memo } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'FlexBox'
import { Button } from 'Button'
import { Pane } from 'Pane'
import { Text } from 'Text'
import { themeGet } from 'defaultTheme'

function noop () {}

const variantBackground = props => {
  let bg = props.variant

  if (props.variant === 'default') {
    bg = 'dark'
  }

  return { backgroundColor: themeGet(`colors.${bg}`)(props) }
}

const StyledAlert = styled(Pane).attrs({
  bg: 'darkerGray',
  borderRadius: '6px',
  pl: 3
})`
  position: relative;

  &::before {
    content: '';
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    width: ${themeGet('space.3')};
    ${variantBackground};
  }
`

export const Alert = memo(
  ({ actionLabel, hasAction, message, onAction, variant, ...etc }) => {
    const buttonVariant = variant === 'default' ? 'primary' : variant

    return (
      <StyledAlert variant={variant} {...etc}>
        <Flex alignItems='center' flexDirection={['column', 'row']}>
          <Box flex='1 1 auto'>
            <Text color='white' p={[2, 3]} pb={[hasAction ? 0 : 2, 3]}>
              {message}
            </Text>
          </Box>
          {hasAction && (
            <Pane p={2} width={[1, 1 / 6]}>
              <Button variant={buttonVariant} onClick={onAction}>
                {actionLabel}
              </Button>
            </Pane>
          )}
        </Flex>
      </StyledAlert>
    )
  }
)

Alert.propTypes = {
  actionLabel: propTypes.string,
  hasAction: propTypes.bool,
  onAction: propTypes.func,
  variant: propTypes.oneOf(['default', 'success', 'danger']),
  ...Pane.propTypes
}

Alert.defaultProps = {
  actionLabel: 'Ok',
  hasAction: true,
  onAction: noop,
  variant: 'default'
}
