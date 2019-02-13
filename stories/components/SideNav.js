import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { SideNav } from 'SideNav'

storiesOf('SideNav', module)
  .addDecorator(story => {
    return (
      <MemoryRouter>
        <Route component={story} />
      </MemoryRouter>
    )
  })
  .add('Example', () => (
    <SideNav>
      <SideNav.ItemGroup
        render={
          <SideNav.Item icon='poll' to='/settings'>
            Settings
          </SideNav.Item>
        }
      >
        <SideNav.Item icon='poll' to='/settings/organization'>
          Organization
        </SideNav.Item>
        <SideNav.Item icon='poll' to='/settings/users'>
          Users
        </SideNav.Item>
        <SideNav.Item icon='poll' to='/settings/objects'>
          Objects
        </SideNav.Item>
        <SideNav.Item icon='poll' to='/settings/views'>
          Views
        </SideNav.Item>
        <SideNav.Item icon='poll' to='/settings/scripts'>
          Scripts
        </SideNav.Item>

        <SideNav.ItemGroup
          render={
            <SideNav.Item icon='poll' to='/settings/nested'>
              Nested Test
            </SideNav.Item>
          }
        >
          <SideNav.Item icon='poll' to='/settings/nested/1'>
            Nested 1
          </SideNav.Item>
          <SideNav.Item icon='poll' to='/settings/nested/2'>
            Nested 2
          </SideNav.Item>
          <SideNav.Item icon='poll' to='/settings/nested/3'>
            Nested 3
          </SideNav.Item>
        </SideNav.ItemGroup>
      </SideNav.ItemGroup>

      <SideNav.Item icon='poll' to='/deploy'>
        Deploy
      </SideNav.Item>
      <SideNav.Item icon='poll' to='/developer'>
        Developer
      </SideNav.Item>
      <SideNav.Item icon='poll' to='/dashboard'>
        Dashboard
      </SideNav.Item>
      <SideNav.Item icon='poll' to='/export'>
        Export
      </SideNav.Item>
    </SideNav>
  ))
