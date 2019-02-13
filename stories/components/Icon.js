import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from 'FlexBox'
import { Pane } from 'Pane'
import { Icon, IconContext, DefaultIconStrategy } from 'Icon'
import { Text } from 'Text'
import { iconKeys } from 'Icon/icons'
import MaterialIcon from '@material/react-material-icon'
import styled from 'styled-components'
import { themeGet } from 'defaultTheme'

// eslint-disable-next-line import/no-webpack-loader-syntax
const materialIcons = require('raw-loader!material-design-icons/iconfont/codepoints')
  .split('\n')
  .map(icon => icon.split(' ').shift())

const StyledMaterialIcon = styled(MaterialIcon)`
  color: ${({ color }) => themeGet(`colors.${color}`, color)};
`

const materialIconStrategy = props => {
  const { icon, ...rest } = props

  if (materialIcons.includes(icon)) {
    const fontSize = themeGet(`iconSizes.${rest.size}`)(props) || props.size

    return <StyledMaterialIcon style={{ fontSize }} icon={icon} {...rest} />
  }

  return <DefaultIconStrategy {...props} />
}

const ExampleIcon = props => {
  const { icon, ...rest } = props

  return (
    <Pane
      key={icon}
      minWidth={50}
      mr={3}
      mb={3}
      style={{ textAlign: 'center' }}
    >
      <Icon icon={icon} {...rest} />
      <Text>{icon}</Text>
    </Pane>
  )
}

const AllIcons = props => (
  <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
    {iconKeys.map(icon => (
      <ExampleIcon {...props} key={icon} icon={icon} />
    ))}
  </Flex>
)

storiesOf('Icon', module)
  .add('Default', () => <AllIcons />)
  .add('With color', () => <AllIcons color='dark' />)
  .add('With theme size', () => <AllIcons size={5} />)
  .add('With custom size', () => <AllIcons size='18px' />)
  .add('With all', () => <AllIcons size={3} color='darker' />)
  .add('With custom icons', () => (
    <React.Fragment>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
        <IconContext.Provider value={{ iconStrategy: materialIconStrategy }}>
          {materialIcons.map(icon => (
            <ExampleIcon key={icon} icon={icon} />
          ))}
        </IconContext.Provider>
      </Flex>
    </React.Fragment>
  ))
  .add('With custom icons and custom size', () => (
    <React.Fragment>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
        <IconContext.Provider value={{ iconStrategy: materialIconStrategy }}>
          {materialIcons.map(icon => (
            <ExampleIcon key={icon} icon={icon} size='44px' color='light' />
          ))}
        </IconContext.Provider>
      </Flex>
    </React.Fragment>
  ))
