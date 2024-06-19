---
sidebar_position: 2
---

# data-scroll-position

-   **Type:** `string`
-   **Default:** `start,end`

![Data Scroll Position](/assets/data-scroll-position.jpg)

This attribute specifies the trigger position of the element within the viewport when using the Locomotive Scroll library. It accepts two values: one for the position when the element enters the viewport, and a second for the position when the element leaves the viewport.

Accepted values are: `'start'`, `'middle'`, `'end'`.

## Examples

![Data Scroll Position](/assets/data-scroll-position-example-1.jpg)
![Data Scroll Position](/assets/data-scroll-position-example-2.jpg)

Here's an example of using Locomotive Scroll's data-scroll-position attribute on an HTML element:

```html
<div data-scroll data-scroll-position="start, start"></div>
```
