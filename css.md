# CSS

We use [Less](https://lesscss.org/) CSS preprocessor.

## Rules order

We use the following order for the CSS rules.

<b>IMPORTANT:</b> Line breaks mean we group roules by concept, DON'T add those on your styling, rules don't have spacing

```
* {
  position
  top
  left
  right
  bottom

  width
  max-width
  height
  max-height

  margin
  padding

  background
  background-repeat
  background-position
  background-size
  color

  font-family
  font-size
  font-weight
  text-align
  text-style
  text-transform
  text-shadow
  line-height

  display
  align-items
  justify-content
  flex-direction

  overflow

  z-index

  transform

  box-shadow

  transition
  animation

  border
}
```