import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { themeGet } from 'defaultTheme'
import classes from 'classnames'
import { InputIcon } from 'Input/Icon'
import { withFieldContext, FieldContext } from 'utils/withFieldContext'
import MaskedInput from 'react-text-mask'

const classNames = {
  iconBefore: 'before-icon',
  iconAfter: 'after-icon'
}

const containerStyles = variant({ key: 'inputs' })

const height = ({ height, ...props }) =>
  (height && height) || themeGet('lineHeights.2')(props)

const StyledInputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: ${height};
  ${containerStyles};
`

const StyledInput = styled.input`
  flex: 1 1 auto;
  font-size: ${themeGet('fontSizes.1')};
  font-family: ${themeGet('fonts.sansSerif')};
  letter-spacing: 0.25px;
  position: relative;
  background: none;
  border: none;
  box-shadow: none;
  outline: none;
  appearance: none;
  padding: 3px 6px 0 6px;
  height: 100%;
  /* Takes care of showing a transparent background for
     chromes auto-complete fields, which look yellowish */
  transition: background-color 5000s ease-in-out 0s;
`

const defaultRenderer = (ref, props) => <StyledInput ref={ref} {...props} />

class InputComponent extends React.Component {

  static Icon = InputIcon

  render () {
    const {
      LeftDecorator,
      RightDecorator,
      className,
      variant,
      height,
      focused,
      hasErrors,
      mask,
      ...rest
    } = this.props

    return (
      <FieldContext.Consumer>
        {fieldProps => (
          <StyledInputContainer
            {...fieldProps}
            className={classes(className)}
            variant={variant}
            height={height}
            focused={focused}
            hasErrors={hasErrors}
          >
            {LeftDecorator && (
              <LeftDecorator className={classes(classNames.iconBefore)} />
            )}

            {mask ? (
              <MaskedInput mask={mask} {...rest} />
            ) : (
              <StyledInput {...rest} />
            )}

            {RightDecorator && (
              <RightDecorator className={classes(classNames.iconAfter)} />
            )}
          </StyledInputContainer>
        )}
      </FieldContext.Consumer>
    )
  }

}

InputComponent.defaultProps = {
  render: defaultRenderer,
  mask: false,
  value: undefined,
  variant: 'default',
  placeholder: '',
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  readOnly: false,
  height: undefined,
  tabIndex: '-1',
  autoComplete: 'off'
}

InputComponent.propTypes = {
  render: PropTypes.func,
  /**
   * Input mask
   */
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.func]),
  /**
   * Height of input element
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Current input value
   */
  value: PropTypes.string,
  /**
   * Input theme variant
   */
  variant: PropTypes.string,
  /**
   * On change function
   */
  onChange: PropTypes.func,
  /**
   * On focus function
   */
  onFocus: PropTypes.func,
  /**
   * On blur function
   */
  onBlur: PropTypes.func,
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Read Only flag
   */
  readOnly: PropTypes.bool,
  /**
   * Tab index property
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The Left Decorator
   */
  LeftDecorator: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The Right Decorator
   */
  RightDecorator: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

export const Input = withFieldContext(InputComponent)
