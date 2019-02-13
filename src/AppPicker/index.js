import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Popover } from 'Popover'
import { AppPickerButton } from 'AppPicker/Button'
import { Chip } from 'AppPicker/Chip'
import { Content } from 'AppPicker/Content'
import { Item } from 'AppPicker/Item'
import { Flex } from 'FlexBox'
import { Text } from 'Text'

export class AppPicker extends PureComponent {

  static Item = Item

  render () {
    const { position, children, selectedIndex, ...rest } = this.props
    const { abbr, title, subtitle } = children[selectedIndex].props

    return (
      <Popover
        position={position}
        render={({ close }) => (
          <Content selectedIndex={selectedIndex} close={close}>
            {children}
          </Content>
        )}
      >
        <AppPickerButton
          {...rest}
          variant={abbr}
          iconAfter='caret_down'
          pl={2}
          pr={1}
        >
          <Flex justifyContent='flex-start'>
            <Chip>{abbr}</Chip>
            <Flex px={2} flexDirection='column' alignItems='flex-start'>
              <Text
                fontSize={3}
                fontWeight={5}
                lineHeight={3}
                letterSpacing={2}
              >
                {title}
              </Text>
              {subtitle && (
                <Text
                  fontSize={1}
                  fontWeight={5}
                  lineHeight={2}
                  letterSpacing={3}
                  display={['none', null, 'initial']}
                >
                  {subtitle}
                </Text>
              )}
            </Flex>
          </Flex>
        </AppPickerButton>
      </Popover>
    )
  }

}

AppPicker.propTypes = {
  selectedIndex: PropTypes.number,
  children: PropTypes.node,
  position: PropTypes.string
}

AppPicker.defaultProps = {
  selectedIndex: 0,
  position: 'bottom-left'
}
