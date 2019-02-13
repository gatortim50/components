import styled from 'styled-components'
import { Flex } from 'FlexBox'
import { themeGet } from 'defaultTheme'
import { withArrayOf } from 'utils/withArrayOf'
import { Pane } from 'Pane'

export const Document = styled(Pane)`
  & > * {
    margin: 0;
  }

  & > :not(:first-child) {
    margin-top: ${themeGet('space.3')};
  }
`

const ArrayWrapper = styled(Flex)`
  flex-direction: column;

  & > :not(:first-child) {
    margin-top: ${themeGet('space.2')};
  }
`

Document.defaultProps = {
  borderRadius: 6,
  elevation: 1,
  p: 2
}

// Expose the array field
export const DocumentArray = withArrayOf(Document, ArrayWrapper)
