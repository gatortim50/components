import React, { Fragment, memo } from 'react'
import { matchPath, withRouter } from 'react-router-dom'
import { Pane } from 'Pane'

function ItemGroupComponent ({ children, location, render }) {
  const active = Boolean(
    matchPath(location.pathname, {
      path: render.props.to
    })
  )

  return (
    <Fragment>
      {React.cloneElement(render, { parentActive: active })}

      {active && <Pane pl={1}>{children}</Pane>}
    </Fragment>
  )
}

export const ItemGroup = withRouter(memo(ItemGroupComponent))
