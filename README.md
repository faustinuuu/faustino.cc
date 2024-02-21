# Terminal Website

Cool and simple website that works like a command prompt, everything is customizable and you can create your own commands.\

![alt text](https://i.imgur.com/59CZm9x.png)

## Installation

The website is made with HTML, CSS and Javascript, there's no installation needed, you just need a browser.

## Creating new commands

To create new commands you need to go to ```main.js``` and create a new ```case``` on the ```commander``` function.

```javascript
case "hello":
      addLine("hello there...", "color2", 80);
      break;
```

If you want to create more complex commands just create it on ```commands.js``` and call it on ```main.js```, simple as that.

```javascript
/*main.js*/

case "help":
      loopLines(whois, "color2 margin", 80);
      break;

/*commands.js*/

whois = [
  "<br>",
  "Hey, I'm Faustino!👋",
  "I'm an amateur software developer and professional no-lifer.",
  "I spend most of my time gaming or doing stupid and useless projects like this one.",
  "I'm from Portugal and in this moment I'm living in Aveiro, working and saving up",
  "to move to Lisbon, a way bigger city where I have some of my friends and my girlfriend :)",
  "<br>"
];
```

## Questions?

If you need help with anything just contact me on discord: ```faustino```
