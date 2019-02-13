import { withField } from 'utils/withField'

import { Alert } from 'Alert'
// Merge AnnotatedString into the Text component
import { AnnotatedString } from 'AnnotatedString'
// TODO Remove AppPicker component from the library
// Since it should be part of the web-framework instead
// import { AppPicker } from 'AppPicker'
import { AppBar } from 'AppBar'
import { AssistiveText } from 'AssistiveText'
import { Boolean, BooleanArray } from 'Boolean'
import { Button } from 'Button'
// TODO Checkbox can be merged into the Boolean component
// import { Checkbox } from 'Checkbox'
import { Card } from 'Card'
import { ColumnLayout } from 'ColumnLayout'
import { Container } from 'Container'
import { Content } from 'Content'
import { Control } from 'Control'
import { Date } from 'Date'
import { Document, DocumentArray } from 'Document'
import { Drawer } from 'Drawer'
import { Flex, Box } from 'FlexBox'
import { File } from 'File'
import { ListVariant, GalleryVariant } from './File/variants'
import { Heading } from 'Heading'
import { Icon, Svg, IconContext, DefaultIconStrategy } from 'Icon'
// import { Input } from 'Input'
// import { Intrinsic } from 'Intrinsic'
import { Label } from 'Label'
import { Link } from 'Link'
import { List } from 'List'
import { Menu } from 'Menu'
import { Paging } from 'Paging'
import { Pane } from 'Pane'
import { Popover } from 'Popover'
import { Portal } from 'Portal'
import { Search } from 'Search'
import { Select } from 'Select'
import { SideNav } from 'SideNav'
import { Stack } from 'Stack'
// Merge String into Text component
import { String } from 'String'
import { Table } from 'Table'
import { Text } from 'Text'
import { TextArea } from 'TextArea'
// TODO Merge this into the Boolean Component
// import { Tag } from 'Tag'
import { Toaster, ToasterManager } from 'Toaster'

export { mergeWithDefaultTheme as defaultTheme } from './defaultTheme'

export {
  Alert,
  AnnotatedString,
  AppBar,
  AssistiveText,
  Boolean,
  BooleanArray,
  Button,
  Card,
  ColumnLayout,
  Container,
  Content,
  Control,
  Date,
  DefaultIconStrategy,
  Document,
  DocumentArray,
  Drawer,
  Flex,
  Box,
  Heading,
  Icon,
  IconContext,
  Label,
  Link,
  File,
  List,
  Menu,
  Paging,
  Pane,
  Popover,
  Portal,
  Search,
  Select,
  SideNav,
  Stack,
  String,
  Svg,
  Table,
  Text,
  TextArea,
  Toaster,
  ToasterManager
}

// Annotated String Fields
export const AnnotatedStringField = withField(AnnotatedString)

// Boolean Fields
export const BooleanField = withField(Boolean)
export const BooleanArrayField = withField(BooleanArray)

// Date Field
export const DateField = withField(Date)

// Document Fields
export const DocumentField = withField(Document)
export const DocumentArrayField = withField(DocumentArray)

export const FileField = withField(File)
export const FileList = withField(ListVariant)
export const FileGallery = withField(GalleryVariant)

// Link Field
export const LinkField = withField(Link)

// Select Field
export const SelectField = withField(Select)

// Table Fields
export const TableField = withField(Table)

// String Fields
export const StringField = withField(String)

// TextArea Fields
export const TextAreaField = withField(TextArea)
