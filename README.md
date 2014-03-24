jContexy
========

jQuery Plugin for handling simple Context menu

$.jcontexy is a free jQuery plugin that allows you to bind contextmenu on your elements ! 

##Features
- bind Contextmenu on Click , Contextmenu , custom events , ...
- fully customizable ( event , menu , position , ...) 
- bind as many as contexy menu to specific elements in your page as you want !
- cross browser
- chainable

##Dependencies
jContexy will need following to work ! you can find them on the Dependencies folder or you can use latest available CDNs ! 
jQuery 
jQuery UI (js (required) + css (optional) )


##Usage
after including Dependencies and Plugin on your Project, you can use it as simple as this examples ! 

###Menu Structure Example
```html
<ul id="menu">
            <li class="ui-state-disabled"><a href="#">Custom Menu</a></li>
            <li><a href="#">Mahdi</a></li>
            <li><a href="#">Maghrooni</a></li>
            <li><a href="#">jContexy</a></li>
            <li>
                <a href="#">jQuery</a>
                <ul>
                    <li class="ui-state-disabled"><a href="#">Dependencies</a></li>
                    <li><a href="#">jQuery</a></li>
                    <li><a href="#">jQuery-UI</a></li>
                </ul>
            </li>
        </ul>
```

###Simple
this example will use all the default parameters which are (menu: '#menu',event: 'contextmenu' , ...) 
```javascript
$('div').jcontexy();
```

###Advanced
in this example we use multiple elements to bind our custom menu and pass custom parameters

```javascript
$('.user,.profile').jcontexy({
                    'menu': '.userMenu',
                    'event': 'contextmenu',
                    'position': 'left top',
                    at: 'right-5 top+5',
                    collision: 'flipfit'
                });
```

[Visit my website][http://maghrooni.ir]


