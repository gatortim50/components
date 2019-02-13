export const POSITIONS = {
  TOP: 'top',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  LEFT: 'left',
  RIGHT: 'right'
}

export function getPositions (props) {
  let bottom = 'auto'
  let left = 'auto'
  let right = 'auto'
  let top = 'auto'
  let transform = 'translate(0, 0)'

  switch (props.position) {
    case POSITIONS.TOP:
      bottom = '100%'
      left = '50%'
      transform = 'translate(-50%, 0)'
      break

    case POSITIONS.BOTTOM:
      top = '100%'
      left = '50%'
      transform = 'translate(-50%, 0)'
      break

    case POSITIONS.LEFT:
      right = '100%'
      top = '50%'
      transform = 'translate(0, -50%)'
      break

    case POSITIONS.RIGHT:
      left = '100%'
      top = '50%'
      transform = 'translate(0, -50%)'
      break

    case POSITIONS.TOP_LEFT:
      bottom = '100%'
      left = 0
      break

    case POSITIONS.BOTTOM_LEFT:
      top = '100%'
      left = 0
      break

    case POSITIONS.TOP_RIGHT:
      bottom = '100%'
      right = 0
      break

    case POSITIONS.BOTTOM_RIGHT:
      top = '100%'
      right = 0
      break
  }

  return {
    bottom,
    left,
    right,
    top,
    transform
  }
}
