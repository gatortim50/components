import React from 'react'
import { Text } from 'Text'
import styled from 'styled-components'
import formatDate from 'date-fns/format'
import { themeGet } from 'defaultTheme'
import { applyTextStyles } from './shared-styles'
import { lineHeight } from 'styled-system'

const StyledText = styled(Text)`
  font-family: ${themeGet('fonts.sansSerif')};
  margin-bottom: 0;
  margin-top: 0;
`

export const DateView = props => {
  const { value, includeTime, timeFormat, dateFormat, name } = props

  return (
    <StyledText>
      {applyTextStyles(
        formatDate(value, includeTime ? dateFormat + timeFormat : dateFormat, {
          awareOfUnicodeTokens: true
        }),
        name
      )}
    </StyledText>
  )
}

DateView.propTypes = {
  ...lineHeight.propTypes
}

DateView.defaultProps = {
  lineHeight: 3
}
