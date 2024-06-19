---
sidebar_position: 3
---

# data-scroll-offset

-   **Type:** `string`
-   **Default:** `0,0`

![Data Scroll Offset](/assets/scroll-offset-1.jpg)

Specifies the trigger offset of the element within the viewport when using the Locomotive Scroll library. It takes two values: one for the offset when the element enters the viewport, and a second for the offset when the element leaves the viewport.

The offset can be defined in two ways:

-   If specified in percentages, it is relative to the viewport height.
-   If specified in pixels, it is an absolute value.

For example:

-   `'100,50%'` represents an offset of `100` pixels for the enter position and `50%` of the viewport height for the leave position.
-   `'25%, 15%'` represents an offset of `25%` of the viewport height for the enter position and `15%` of the viewport height for the leave position.

## Example

![Data Scroll Offset](/assets/data-scroll-offset-example.jpg)

Here's an example of using Locomotive Scroll's data-scroll-offset attribute on an HTML element:

```html
<div data-scroll data-scroll-offset="400, 200"></div>
```