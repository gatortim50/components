import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Heading } from 'Heading'
import { Pane } from 'Pane'
import { ColumnLayout } from 'ColumnLayout'
import styled from 'styled-components'

const items1 = [
  { height: '100px', weight: 1 },
  { height: '200px', weight: 0.5 },
  { height: '300px', weight: 1 },
  { height: '400px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '300px', weight: 1 },
  { height: '400px', weight: 0.5 },
  { height: '500px', weight: 1 }
]

const items2 = [
  { height: '100px', weight: 2 },
  { height: '100px', weight: 1 },
  { height: '500px', weight: 0.5 },
  { height: '400px', weight: 1 },
  { height: '200px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 1 },
  { height: '300px', weight: 0.5 },
  { height: '200px', weight: 1 }
]

const items3 = [
  { height: '200px', weight: 1 },
  { height: '300px', weight: 0.5 },
  { height: '100px', weight: 1 },
  { height: '200px', weight: 2 },
  { height: '400px', weight: 2 },
  { height: '300px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '100px', weight: 1 },
  { height: '400px', weight: 0.5 },
  { height: '400px', weight: 1 }
]

const items4 = [
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '300px', weight: 0.5 },
  { height: '400px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '400px', weight: 0.5 },
  { height: '500px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '300px', weight: 0.5 },
  { height: '400px', weight: 0.5 }
]

const items5 = [
  { height: '100px', weight: 2 },
  { height: '200px', weight: 2 },
  { height: '300px', weight: 0.5 },
  { height: '400px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '400px', weight: 2 },
  { height: '500px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '100px', weight: 0.5 },
  { height: '200px', weight: 0.5 },
  { height: '200px', weight: 2 },
  { height: '300px', weight: 2 },
  { height: '400px', weight: 2 }
]

const items = [items1, items2, items3, items4, items5]

const StyledItem = styled(Pane)`
  border: 1px solid #000;
  padding: 5px;
`

storiesOf('Columns Layout', module).add('Example', () => (
  <Fragment>
    <Heading as='h3' mb={1}>
      2 Column Form Layout
    </Heading>

    {items.map((itemArray, index) => (
      <Pane m={5} key={`items-2col-${index}`} bg='lightestGray'>
        <Heading as='h4' mb={1}>
          Items #{index + 1}
        </Heading>
        <ColumnLayout
          columns={2}
          gutter={2}
          columnGap={4}
          bg={'lightgray'}
          name={`form-2col-${index}`}
        >
          {itemArray.map(({ weight, ...rest }, i) => (
            <StyledItem key={i} weight={weight} {...rest}>
              Initial Index = {i}
              <br />
              Weight = {weight}
              <br />
            </StyledItem>
          ))}
        </ColumnLayout>
      </Pane>
    ))}

    <Heading as='h3' mb={1}>
      3 Column Form Layout
    </Heading>

    {items.map((itemArray, index) => (
      <Pane m={5} key={`items-3col-${index}`}>
        <Heading as='h4' mb={1}>
          Items #{index + 1}
        </Heading>
        <ColumnLayout
          columns={3}
          gutter={2}
          columnGap={4}
          bg={'lightgray'}
          name={`form-3col-${index}`}
        >
          {itemArray.map(({ weight, ...rest }, i) => (
            <StyledItem key={i} weight={weight} {...rest}>
              Initial Index = {i}
              <br />
              Weight = {weight}
              <br />
            </StyledItem>
          ))}
        </ColumnLayout>
      </Pane>
    ))}
  </Fragment>
))
