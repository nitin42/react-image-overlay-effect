# react-image-overlay-effect

> A React component for displaying an overlay effect on an image

<br/>
<br/>

<p align="center">
  <img src="./example.gif" />
</p>

<br/>
<br/>

## Install

```bash
yarn add react-image-overlay-effect @emotion/react @emotion/styled
```

## Usage

```tsx
import React from 'react'

import { ImageOverlay } from 'react-image-overlay-effect'

const App = () => (
  <ImageOverlay
    src="https://reactjs.org/logo-og.png"
    description={<p>A JavaScript library for building user interfaces</p>}
  )
)
```

## Demo

Codesandbox - https://codesandbox.io/s/heuristic-tu-n648r?file=/src/App.js

## Props

The `ImageOverlay` component accepts all the props that are supported by the native `img` element except the prop `description`.

`description: React.ReactNode`

Use this prop to render a description text when the overlay effect is active.

## License

MIT © [nitin42](https://github.com/nitin42)
