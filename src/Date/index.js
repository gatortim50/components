import React from 'react'
import PropTypes from 'prop-types'
import check from 'check-types'
import { withValue } from 'utils/withValue'
import { withEditable } from 'utils/withEditable'
import { DateEdit } from './Edit'
import { DateView } from './View'
import { setupLocales } from './locales'
import hoistNonStatics from 'hoist-non-react-statics'

setupLocales()

const resolveFormatProps = Component => {
  const Enhance = props => {
    const {
      dateFormatView,
      dateFormatEdit,
      timeFormatView,
      timeFormatEdit,
      readOnly
    } = props

    // default to edit mode
    let timeFormat = timeFormatEdit
    let dateFormat = dateFormatEdit

    // view mode
    if (readOnly) {
      if (check.nonEmptyString(timeFormatView)) {
        timeFormat = timeFormatView
      }
      if (check.nonEmptyString(dateFormatView)) {
        dateFormat = dateFormatView
      }
    }

    return (
      <Component
        {...props}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        readOnly={readOnly}
      />
    )
  }

  hoistNonStatics(Enhance, Component)

  return Enhance
}

// Expose the base field
export const Date = withValue(
  'any',
  resolveFormatProps(withEditable(DateEdit, DateView))
)

Date.defaultProps = {
  locale: 'en-US',
  dateFormatEdit: 'yyyy / dd / MM',
  timeFormatView: ' @ hh:mm aa',
  timeFormatEdit: ' hh:mm aa',
  dateMask: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    '/',
    ' ',
    /\d/,
    /\d/,
    ' ',
    '/',
    ' ',
    /\d/,
    /\d/
  ],
  timeMask: [/\d/, /\d/, ':', /\d/, /\d/, ' ', /[aApP]/, /[mM]/],
  datePlaceholder: 'Enter a date',
  timePlaceholder: 'Enter a time',
  includeTime: false
}

Date.propTypes = {
  locale: PropTypes.string,
  dateFormatView: PropTypes.string,
  dateFormatEdit: PropTypes.string,
  timeFormatView: PropTypes.string,
  timeFormatEdit: PropTypes.string,
  includeTime: PropTypes.bool,
  datePlaceholder: PropTypes.string,
  timePlaceholder: PropTypes.string,
  dateMask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.func
  ]),
  timeMask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.func
  ]),
  name: PropTypes.string.isRequired
}
