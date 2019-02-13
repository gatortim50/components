import React from 'react'
import { storiesOf } from '@storybook/react'
import { Table } from 'Table'
import { Pane } from 'Pane'
import { Heading } from 'Heading'
import { Label } from 'Label'
import { Menu } from 'Menu'

const customRender = props => <Label icon={props.icon}>{props.name}</Label>

/* eslint-disable react/display-name */
const tableData = {
  headers: [
    { name: 'Name', sortable: true },
    () => customRender({ name: 'date' }),
    'Region',
    { name: 'City', render: customRender, icon: 'close' }
  ],
  rows: [
    [
      { name: 'August F. Gardner' },
      { name: '1999/01/25' },
      { name: 'Massachusetts' },
      { name: 'Equatorial Guinea' }
    ],
    [
      { name: 'Marvin Whitaker' },
      { name: '1999/01/01' },
      { name: 'New South Wales' },
      { name: 'Tonga' }
    ],
    [
      { name: 'Kane Pittman' },
      { name: '1999/01/01' },
      { name: 'Västra Gotalands lan' },
      { name: 'Grenada' }
    ],
    [
      { name: 'Ima B. Dudley' },
      { name: '1999/01/01' },
      { name: 'Ontario' },
      { name: 'Libya' }
    ],
    ['Hiroko Flowers', '1999/01/01', 'Euskadi', 'Bahrain'],
    [
      // Supports passing in an object
      {
        name: 'Jessamine P. Santiago',
        // Supports passing in a render method on the props
        render: customRender,
        icon: 'hashtag'
      },
      { name: '1999/01/01' },
      // Supports passing in a render method directly
      () => customRender({ name: 'Emilia-Romagna' }),
      // Supports passing in the cell string directly
      'Guyana'
    ]
  ]
}

const confirmDelete = props => () => {
  if (confirm('Confirm Delete?')) {
    props.close()
  }
}

const actions = props => (
  <Menu width='250px' elevation={4}>
    <Menu.ItemGroup>
      <Menu.Item icon='hashtag' onClick={props.close}>
        View
      </Menu.Item>
      <Menu.Item icon='poll' onClick={props.close}>
        Duplicate
      </Menu.Item>
    </Menu.ItemGroup>

    <Menu.Divider />

    <Menu.ItemGroup>
      <Menu.Item icon='checkbox' onClick={confirmDelete(props)}>
        Delete
      </Menu.Item>
    </Menu.ItemGroup>
  </Menu>
)

storiesOf('Table', module).add('Examples', () => (
  <React.Fragment>
    <Pane m={4}>
      <Heading>Table Sample</Heading>

      <Table
        name='table-simple'
        headers={tableData.headers}
        rows={tableData.rows}
        selectable
        onChange={value => console.log(value)}
        defaultValue={{ selectedIndexes: [], sortedColumns: {} }}
        actions={actions}
      />
    </Pane>
  </React.Fragment>
))
