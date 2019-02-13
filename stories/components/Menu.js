import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'Button'
import { Menu } from 'Menu'
import { Pane } from 'Pane'
import { Popover } from 'Popover'
import { Heading } from 'Heading'

storiesOf('Menu', module)
  .add('Standalone', () => (
    <Fragment>
      <Heading>With Icons</Heading>

      <Menu width='250px'>
        <Menu.ItemGroup>
          <Menu.Item icon='hashtag' onClick={close}>
            Share...
          </Menu.Item>
          <Menu.Item icon='poll' onClick={close}>
            Move...
          </Menu.Item>
          <Menu.Item onClick={close}>Rename...</Menu.Item>
        </Menu.ItemGroup>

        <Menu.Divider />

        <Menu.ItemGroup>
          <Menu.Item icon='round_checked' onClick={close} variant='danger'>
            Delete...
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>

      <Heading>Without Icons</Heading>

      <Menu width='250px'>
        <Menu.ItemGroup withoutIcons>
          <Menu.Item icon='hashtag' onClick={close}>
            Share...
          </Menu.Item>
          <Menu.Item icon='poll' onClick={close}>
            Move...
          </Menu.Item>
          <Menu.Item onClick={close}>Rename...</Menu.Item>
        </Menu.ItemGroup>

        <Menu.Divider />

        <Menu.ItemGroup withoutIcons>
          <Menu.Item icon='round_checked' onClick={close} variant='danger'>
            Delete...
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>

      <Heading>Mixed icons</Heading>

      <Menu width='250px'>
        <Menu.ItemGroup withoutIcons>
          <Menu.Item icon='hashtag' onClick={close}>
            Share...
          </Menu.Item>
          <Menu.Item icon='poll' onClick={close}>
            Move...
          </Menu.Item>
          <Menu.Item onClick={close}>Rename...</Menu.Item>
        </Menu.ItemGroup>

        <Menu.Divider />

        <Menu.ItemGroup>
          <Menu.Item icon='round_checked' onClick={close} variant='danger'>
            Delete...
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Fragment>
  ))
  .add('Examples', () => (
    <Pane style={{ width: '100vw', height: '100vh' }} p={4}>
      <Popover
        render={({ close }) => (
          <Menu width='250px' elevation={4}>
            <Menu.ItemGroup>
              <Menu.Item icon='hashtag' onClick={close}>
                Share...
              </Menu.Item>
              <Menu.Item icon='poll' onClick={close}>
                Move...
              </Menu.Item>
              <Menu.Item onClick={close}>Rename...</Menu.Item>
            </Menu.ItemGroup>

            <Menu.Divider />

            <Menu.ItemGroup>
              <Menu.Item
                icon='checkbox'
                onClick={() => {
                  if (confirm('Confirm Delete?')) {
                    close()
                  }
                }}
                variant='danger'
              >
                Delete...
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        )}
      >
        <Button width={100}>Menu</Button>
      </Popover>
    </Pane>
  ))
