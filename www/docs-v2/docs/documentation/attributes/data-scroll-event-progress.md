---
sidebar_position: 8
---

# data-scroll-event-progress

-   **Type:** `string`

When you declare this attribute, it will trigger the custom event that you specify. This event allows you to retrieve the current progress of the element, which ranges between `0` and `1`.

By utilizing the custom event, you can implement event handlers in your JavaScript code to perform actions or retrieve information based on the scrolling progress of the element.

```html
<div data-scroll data-scroll-event-progress="progressEvent">
    Progress custom event
</div>
```

```js
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

window.addEventListener('progressEvent', (e) => {
    const { target, progress } = e.detail;
    console.log(`target: ${target}`, `progress: ${progress}`);
});
```