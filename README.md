# og-image-generator

You can generate dynamic Open Graph Images that you can embed in your `<meta>` tags for blog posts.

## Open Graph Image

Open Graph is an internet protocol that was originally created by Facebook to standardize the use of metadata within a webpage to represent the content of a page.

Within it, you can provide details as simple as the title of a page or as specific as the duration of a video. These pieces all fit together to form a representation of each individual page of the internet. For more detail you can view this [`link`](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/).

To use open graph image protocol, you can put `<meta>` tag in the `<head>` of your webpage.

It looks

```html
<head>
  <meta property="og:image" content="http://examplewebsite.com/image.png" />
</head>
```

## Example 

<p align="left">
  <img src="./og-image.png" width="300" alt="og-image" />
</p>