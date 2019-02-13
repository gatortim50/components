import styled from 'styled-components'
import React from 'react'
import { themeGet } from 'defaultTheme'
import { Text } from 'Text'

export const GrayText = styled(Text).attrs({ as: 'span' })`
  color: ${themeGet('colors.darkGray')};
  font-family: ${themeGet('fonts.sansSerif')};
`

/**
 * @param value
 * @param uniqueId {String} a unique id for the date picker instance. Used in a React key.
 * @returns {*}
 */
export const applyTextStyles = (value, uniqueId) => {
  return value.split(new RegExp(/(@)|(\/)|(AM)|(PM)/, 'i')).map((group, i) => {
    if (['/', '@', 'AM', 'PM'].includes(group)) {
      return <GrayText key={`${uniqueId}-${i}-${group}`}> {group} </GrayText>
    }
    return group
  })
}
