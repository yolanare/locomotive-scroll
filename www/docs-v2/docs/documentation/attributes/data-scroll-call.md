---
sidebar_position: 7
---

# data-scroll-call

-   **Type:** `string`

The `data-scroll-call` attribute enables you to trigger a custom event when an element becomes visible within the viewport. This attribute requires a string value that specifies the name of the custom event that you want to trigger.

By utilizing the `data-scroll-call` attribute, you can define and trigger your own events to perform specific actions or handle certain behaviors when elements scroll into view. These events can be listened to and handled in your JavaScript code using event listeners or any event handling mechanism provided by your framework or library.

Here's an example of how to use the `data-scroll-call` attribute:

```html
<div data-scroll data-scroll-call="scrollEvent">Trigger</div>
```

```js
window.addEventListener('scrollEvent', (e) => {
    const { target, way, from } = e.detail;
    console.log(`target: ${target}`, `way: ${way}`, `from: ${from}`);
});
```