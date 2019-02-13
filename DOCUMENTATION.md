Components
----------

**src/Alert/index.js**

### 1. Alert




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
actionLabel|string|no|&lt;See the source code&gt;|
hasAction|bool|no|true|
onAction|func|no|&lt;See the source code&gt;|
variant|enum|no|&lt;See the source code&gt;|
-----
**src/AppPicker/Content/index.js**

### 1. Content




-----
**src/AppPicker/Item/index.js**

### 1. Item




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
title|string|yes||
subtitle|string|no||
abbr|string|yes||
-----
**src/AppPicker/index.js**

### 1. AppPicker




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
selectedIndex|number|no|0|
children|node|no||
position|string|no|&lt;See the source code&gt;|
-----
**src/Button/index.js**

### 1. 




-----
**src/Checkbox/index.js**

### 1. Checkbox




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
checked|bool|no|false|
variant|enum|no|&lt;See the source code&gt;|
-----
**src/Container/index.js**

### 1. Container




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
theme||no|&lt;See the source code&gt;|
-----
**src/Control/Divider/index.js**

### 1. Divider




-----
**src/Control/Item/index.js**

### 1. Item




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|node|no||
-----
**src/Control/index.js**

### 1. Control




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
variant||no|&lt;See the source code&gt;|
-----
**src/Form/index.js**

### 1. Form




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
columns|number|no|2|
children|any|yes||
name|string|yes||
-----
**src/Icon/index.js**

### 1. Icon




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
color||no|&lt;See the source code&gt;|
size||no|3|
icon||no|&lt;See the source code&gt;|
-----
**src/Intrinsic/index.js**

### 1. Intrinsic




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
aspectRatio|number|no|&lt;See the source code&gt;|
-----
**src/Label/index.js**

### 1. Label




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|node|yes||
icon|string|no|null|
variant||no|&lt;See the source code&gt;|
fontSize||no|0|
lineHeight||no|0|
fontWeight||no|5|
letterSpacing||no|1|
caps||no|true|
-----
**src/Link/index.js**

### 1. Link




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
displayText|string|no|&lt;See the source code&gt;|
href|string|yes||
variant|string|no|&lt;See the source code&gt;|
-----
**src/Menu/Divider/index.js**

### 1. Divider




-----
**src/Menu/Item/index.js**

### 1. Item




-----
**src/Menu/ItemGroup/index.js**

### 1. ItemGroup




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
withoutIcons||no|false|
-----
**src/Menu/index.js**

### 1. Menu




-----
**src/Popover/index.js**

### 1. Popover




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
position|enum|no|POSITIONS.BOTTOM_LEFT|
-----
**src/Portal/index.js**

### 1. Portal




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|node|yes||
-----
**src/SideNav/Item/index.js**

### 1. Item




-----
**src/SideNav/ItemGroup/index.js**

### 1. ItemGroup




-----
**src/SideNav/index.js**

### 1. SideNav




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
width||no|&lt;See the source code&gt;|
-----
**src/Stack/index.js**

### 1. Stack




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value||no|0|
-----
**src/Toaster/Manager/index.js**

### 1. ToasterManager




-----
**src/Toaster/Toast/index.js**

### 1. Toast




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
duration|number|no|5000|
id|string|yes||
onAction|func|no|undefined|
onClose|func|yes||
-----
**src/formComponents/Boolean/index.js**

### 1. CheckboxItem




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
selected|bool|no|false|
variant|string|no|&lt;See the source code&gt;|
children|string|no||
default||no|null|
-----
**src/formComponents/Date/Edit.js**

### 1. DateComponent




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
locale|string|no|&lt;See the source code&gt;|
includeTime|bool|no|false|
-----
**src/formComponents/Date/Header.js**

### 1. Header




-----
**src/formComponents/Input/ClearIcon/index.js**

### 1. ClearIcon




-----
**src/formComponents/Input/index.js**

### 1. Input




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
height|union|no|undefined|
value|string|no|&lt;See the source code&gt;|Current input value
variant|string|no|&lt;See the source code&gt;|Input theme variant
iconBefore|union|no|undefined|Icon before the text field
iconAfter|union|no|undefined|Icon after the text field
onChange|func|no|&lt;See the source code&gt;|On change function
onFocus|func|no|&lt;See the source code&gt;|On focus function
onBlur|func|no|&lt;See the source code&gt;|On blur function
placeholder|string|no|&lt;See the source code&gt;|Placeholder text
readOnly|bool|no|false|Read only flag
tabIndex|string|no|&lt;See the source code&gt;|Tab index property
-----
**src/formComponents/Search/index.js**

### 1. Search




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
iconAfter||no|&lt;See the source code&gt;|
iconBefore||no|&lt;See the source code&gt;|
variant||no|&lt;See the source code&gt;|
placeholder||no|&lt;See the source code&gt;|
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
