# React-Native AJAX enabled auto suggest TextView

An AJAX enabled dropdown select box.

![alt text](https://raw.githubusercontent.com/zohar-israel/react-native-ajax-auto-suggest/master/AjaxAutoSuggest.jpg "")
# Usage
  - Configure your API url  
  ```buildApiURL={(text)=> '<YOUR_API_URL>?q=' + encodeURIComponent(text)}```

  - Define how to parse the response  
  ```parseResults={(responseText)=> JSON.parse(responseText)}```

  - Receive the selected / entered text  
  ```onOptionSelected={this.optionSelected}```
# Installation
  - Add the AutoSuggest.js file to your project
  - Import it at the top of your file from it's path  
  ```import { AjaxAutosuggest } from './AjaxAutosuggest';```
  - Include it in your code like any react-native component  
  ```<AjaxAutosuggest .../>```
  
## Sample app
This repository includes a sample app (app.js) that demonstrates displaying auto complete suggestions from YouTube. To run the example:
  - Clone this repository  
  ```git clone https://github.com/zohar-israel/react-native-ajax-auto-suggest.git```
  - In the sample app directory, use npm to install the dependent react-native libraries  
  ```npm install```
  - Make sure you have a mobile device or an emulator connected, and run the app with  
  ```npm start```
# Dependencies
  - None. 
# Installation
  - Add the AutoSuggest.js file to your project
  - Import it at the top of your file from it's path  
  ```import { AjaxAutosuggest } from './AjaxAutosuggest';```
  - Include it in your code like any react-native component  
  ```<AjaxAutosuggest .../>```
## Usage example

```
<View style={styles.container}>

        <AjaxAutosuggest
          // Required - return the URL of the ajax request using the entered text
          buildApiURL={(text)=> '<YOUR_API_URL>?q=' + encodeURIComponent(text)}
          // Required - parse the response and return a string array
          parseResults={(responseText)=> JSON.parse(responseText)}
          
          // Important - function to call when an option is selected
          onOptionSelected={this.optionSelected}
          // and when the keyboard submit button is clicked
          onSubmit={this.optionSelected}

          // Optional
          placeholder='Search'        // text shown when the textbox is empty
          minLength={0}               // minimum length of text to initiate an API search call
          autoFocus={true}            // focus on the textbox and show keyboard on screen display
          debounce={300}              // debounce the requests in ms. Set to 0 to remove debounce. By default 200ms.
          returnKeyType={'search'}    // Submit icon to show on the keyboard https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          
          // Fun - UI customization
          styles={{
            container: {},
            textInputContainer: {},
            textInput: {},
            listView: {},
            row: {},
            separator: {},
            suggestion: {},
            loader: {},
            androidLoader: {}
          }}
        />  
```

### Tech

React-Native 

License
----

MIT


**Free Software, Hell Yeah!**
