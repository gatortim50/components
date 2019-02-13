import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import { Input } from 'Input'
import { Pane } from 'Pane'
import { themeGet } from 'defaultTheme'
import { GrayText } from './shared-styles'
import { ValueContext } from 'utils/withValue'
import { Header } from './Header'
import libraryStyles from 'react-datepicker/dist/react-datepicker.css'

// temp fix for prop type error --
// currently it's complaining when value is not a string, however, it works
// just fine when value is a Date..
// TODO: https://github.com/Hacker0x01/react-datepicker/pull/1589
DatePicker.propTypes.value = PropTypes.instanceOf(Date)

const DateStyleWrapper = styled.div`
  ${libraryStyles};
  margin-top: 7px;
  .react-datepicker-wrapper {
    ${({ includeTime }) => includeTime && `margin-right: 8px;`};
  }
  .react-datepicker__input-container {
    min-width: 186px;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker {
    border: 0;
    border-radius: 0;
  }
  .react-datepicker__header {
    padding-top: 0;
    background: #fff;
  }
  .react-datepicker__day {
    border: 1px solid transparent;
    border-radius: 100px !important;
    user-select: none;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--selected:hover {
    background-color: ${themeGet('colors.dark')} !important;
  }
  .react-datepicker__day:hover {
    background-color: ${themeGet('colors.white')};
    border: 1px solid ${themeGet('colors.dark')};
  }
  .react-datepicker__day--outside-month {
    visibility: hidden;
  }
  .react-datepicker__day-name {
    color: ${themeGet('colors.lightGray')};
    letter-spacing: ${themeGet('letterSpacings.1')};
    font-family: ${themeGet('fonts.sansSerif')};
    text-align: center;
    user-select: none;
    line-height: 1;
  }
  .react-datepicker__day-names {
    padding: 12px 0 3px 0;
  }
  .react-datepicker__month {
    padding: 10px 0;
  }
`

const TimePickerStyleWrapper = styled(DateStyleWrapper)`
  display: inline-block;
  > span {
    position: relative;
    top: 4.5px;
    margin-left: 1.5px;
    margin-right: 3px;
  }
  .react-datepicker__input-container {
    width: unset;
    min-width: 80px;
    text-transform: lowercase;
    white-space: nowrap;
  }
  .react-datepicker__header--time {
    display: none;
  }
  .react-datepicker__time-container {
    width: 90px;
  }
  .react-datepicker__time-box {
    width: 100% !important;
  }
  .react-datepicker__time-list-item {
    display: flex;
    align-content: center;
    flex-direction: column;
    text-transform: lowercase;
  }
`

export class DateEdit extends React.Component {

  renderTimeSelection = ({ set }) => {
    const { timeFormat, timeMask, timePlaceholder, ...rest } = this.props

    return (
      <TimePickerStyleWrapper>
        <GrayText>@</GrayText>
        <DatePicker
          {...rest}
          selected={this.getSelected()}
          onChange={set}
          customInput={<Input format={timeFormat} mask={timeMask} {...rest} />}
          placeholderText={timePlaceholder}
          calendarContainer={props => <Pane elevation={2} {...props} />}
          showTimeSelect
          locale={this.props.locale}
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat={timeFormat}
          timeCaption=''
        />
      </TimePickerStyleWrapper>
    )
  }

  getSelected = () => this.props.value

  renderCustomHeader = props => <Header {...props} {...this.props} />

  render () {
    const {
      includeTime,
      dateFormat,
      dateMask,
      datePlaceholder,
      ...rest
    } = this.props

    return (
      <ValueContext.Consumer>
        {({ set }) => (
          <React.Fragment>
            <DateStyleWrapper includeTime={includeTime}>
              <DatePicker
                selected={this.getSelected()}
                onChange={set}
                placeholderText={datePlaceholder}
                customInput={
                  <Input mask={dateMask} format={dateFormat} {...rest} />
                }
                calendarContainer={props => <Pane elevation={2} {...props} />}
                renderCustomHeader={this.renderCustomHeader}
                dateFormat={dateFormat}
              />
              {includeTime && this.renderTimeSelection({ set })}
            </DateStyleWrapper>
          </React.Fragment>
        )}
      </ValueContext.Consumer>
    )
  }

}
