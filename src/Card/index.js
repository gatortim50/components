import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Flex, Box } from 'FlexBox'
import { Heading } from 'Heading'

const cardVariant = variant({
  key: 'cards'
})

const StyledCard = styled(Flex)`
  justify-content: space-between;
  ${cardVariant};
`

const Title = styled(Box).attrs({
  order: 0,
  flex: '0 0 auto'
})``

const Actions = styled(Flex).attrs({
  flexDirection: ['column', 'column', 'row'],
  alignSelf: 'flex-end',
  justifyContent: 'flex-end',
  order: [3, 3, 1],
  width: [1, 1, 'auto'],
  flex: '1 0 auto'
})``

const Action = styled(Flex).attrs({
  m: 0,
  ml: [0, 0, 3],
  width: [1, 1, 'auto']
})``

const Content = styled(Box).attrs({
  flex: '1 0 auto',
  order: 2,
  width: 1,
  my: [3, 3, 5]
})``

export const Card = ({ secondary, title, actions, children, ...rest }) => (
  <StyledCard {...rest}>
    {title && (
      <Title>
        <Heading as={secondary ? 'h2' : 'h1'}>{title}</Heading>
      </Title>
    )}

    {actions && (
      <Actions>
        {React.Children.map(actions, action => (
          <Action>{React.cloneElement(action, { width: 1 })}</Action>
        ))}
      </Actions>
    )}

    <Content>{children}</Content>
  </StyledCard>
)

Card.defaultProps = {
  bg: 'white',
  width: 1,
  elevation: 4,
  variant: 'default',
  borderRadius: '6px',
  pt: 4,
  pb: [3, 3, 3, 5],
  px: [3, 3, 3, 5],
  actions: null,
  flexDirection: 'row',
  flexWrap: 'wrap',
  secondary: false
}

Card.propTypes = {
  title: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool
}
