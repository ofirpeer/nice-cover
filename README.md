# nice-cover
A simple, customizable, cover section composed from an icon, and a blurry background, which by default is the same as the icon.

![default cover](https://raw.githubusercontent.com/ofirpeer/nice-cover/master/Demo/screenshots/default.bmp) 

## Installation

```bash
npm install nice-cover
```

## Usage

```javascript
import React, { Component } from "react";
import Cover from "nice-cover";

class App extends Component {
  render() {
    return (
        <Cover 
         imageUrl={"https://images-platform.99static.com/8TVfQCr1NjZu5qLQE8WIJAE7pdk=/340x0:1288x948/500x500/top/smart/99designs-contests-attachments/90/90737/attachment_90737669"}
        />
    );
  }
}

```

## Customizing
Costumizing is done by overriding css.  
optional attributes:  

* coverStyle: overrides the cover style
* iconStyle: overrides the icon style

coverStyle override example:
```javascript
<Cover 
         imageUrl={"https://images-platform.99static.com/8TVfQCr1NjZu5qLQE8WIJAE7pdk=/340x0:1288x948/500x500/top/smart/99designs-contests-attachments/90/90737/attachment_90737669"}
         coverStyle={{
            backgroundImage:
              'url("https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Garden_Center/fruit-trees.jpg")'
          }}
        />
```
will result in:

![default cover](https://raw.githubusercontent.com/ofirpeer/nice-cover/master/Demo/screenshots/changedCover.bmp)

iconStyle override example:
```javascript
<Cover 
         imageUrl={"https://images-platform.99static.com/8TVfQCr1NjZu5qLQE8WIJAE7pdk=/340x0:1288x948/500x500/top/smart/99designs-contests-attachments/90/90737/attachment_90737669"}
         iconStyle={{
            content:
              'url("https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Outdoor/Garden_Center/fruit-trees.jpg")'
          }}
        />
```
will result in:

![default cover](https://raw.githubusercontent.com/ofirpeer/nice-cover/master/Demo/screenshots/changedIcon.bmp)

Of course you can override any other style as well.

To play around more, take a look at the demo. 

