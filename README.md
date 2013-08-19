# Nill - Nano Image Lazy Loader

Nano is a pure blood and superfast JavaScript image lazy loading tool.

Usage:

```html
<img src="/img/blank.gif" alt="Image" data-nill="/img/photo.jpg">
```

## Demo
Check out the [Nill's demo](http://brunosouza.info/labs/nill/).

## Installation
Drop your files into your required folders, make sure you're using the file(s) from the `dist` folder, which is the compiled production-ready code. Ensure you place the script before the closing `</body>` tag so the DOM tree is populated when the script runs.
    
```html
<body>
    <!-- your html code -->
    <script type="text/javascript" src="/dist/nill.min.js"></script>
</body>
```

## Configuration
Just add the image that needs to be lazy-loaded in a `data-nill` attribute:

```html
<img src="/img/blank.gif" alt="Image" data-nill="/img/image.jpg">
```

## License
MIT license
