# Banner template
> A great starting point for building product based banners.

![Demo of banner template](assets/banner_preview.gif)

This system uses
- [ Adapt style ](https://github.com/AdaptRetail/banner-style)
    - [sass-asset-inline](https://github.com/LasseHaslev/sass-asset-inliner)
- [ Adapt Data ](https://github.com/AdaptRetail/banner-data)
- [laravel-mix](https://github.com/JeffreyWay/laravel-mix)
    - [ Laravel mix extender ](https://github.com/AdaptRetail/adapt-mix-extender)

## Install

```bash
# Clone repository
git clone https://github.com/AdaptRetail/banner-template

# Go to directory
cd banner-template

# Install dependencies
npm install 
```

## Usage

### `npm run watch`
You can see the banner when working on it simply by writing `npm run watch`.
This will start [Browser Sync](https://www.browsersync.io/) and will display your content, and refresh your browsers every time you save a file.

If you want to test your banners on different devices you can see in the terminal after you entered the command.
There will be a `External` info with a `ip-address`. 
Copy paste that info into your browser on your external devices and watch the magic happens.

> Note: All the external devices must be on the same local network as your development machine.

### `npm run prod`
The `npm run prod` command is minifying css and javascript and removes source maps.
<!-- The prod command will also change `AdaptData` to `LightAdaptData`. -->

## Building banners

The adapt banner builder is extending [laravel-mix](https://github.com/JeffreyWay/laravel-mix).
Therefor you can customize whats happens when building using `webpack.mix.js`.

### Style

The banner builder is including [sass-asset-inliner](https://github.com/LasseHaslev/sass-asset-inliner) for base64 encoding assets.
Even though `laravel-mix` is including multiple asset compilers, the `asset-inliner` will only be included when you use the `sass` compiler.

### Best practice

#### Responsiveness
When building banners you should have the responsive thinking.
Use as much `%`, `em`, `rem` values for width and padding on elements.
And use `vw`, `em` and `rem` for texts. Never write static properties.

#### [ Media queries ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

If you write good responsive banners you almost only need to think about 3 formats.
`topbanner`, `skyscraper` and `board`.
If you make good banners it does not matter if the banner is `180x500` or `120x480`.

One of the best media queries are [ aspect ratio ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#aspect-ratio)

### Quick tips

To temporary remove all items you can add following line after we are setting the items.
F.eks. line `97` in the `main.js` file.

This overwrites the items array to only include the first item.

```js
items = [items[0]];
```

## Publishing to [Adapt Retail](https://adaptretail.com)

1. Prepare files to [Adapt Retail](https://adaptretail.com) by running `npm run prod` in your terminal.
1. [Log in to your Adapt retail account](https://app.adaptretail.com/signup_login.php?task=login)
1. Click on template section in your left navigation bar
1. Create a new `Banner template`
1. Set your properties in `Details` tab
1. Select `Files` tab
1. Drag `dist/ad.js` and `dist/ad.css` to the `dropzone (Drop files or click to upload)` in Adapt
1. **And you are done!**
