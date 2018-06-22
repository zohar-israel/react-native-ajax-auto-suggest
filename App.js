import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AjaxAutosuggest } from './AjaxAutosuggest';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <AjaxAutosuggest
          // Required - return the URL of the ajax request using the entered text
          buildApiURL={(text)=> 'http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1a&format=5&alt=json&q=' + encodeURIComponent(text)}
          // Required - parse the response and return a string array
          parseResults={(responseText)=> JSON.parse(responseText)[1].map((r)=>r[0])}
          
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

        <View style={styles.textWrap}>
          <Text style={styles.text}>
            {this.state.selectedText}
          </Text>
        </View>
      </View>
    );
  }

  optionSelected(text){
    storeContext.setState({selectedText: 'Entered text:\n' 
      + text
    });
  }

  storeContext;
  constructor() {
    super()
    this.state = {
      selectedText: 'Type in the ajax-autosuggest-box \nClick enter or select a suggested option'
    }
    storeContext=this;
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddf',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 23
  },
  textWrap: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30,
  },
  text: {
    fontSize: 20
  }
});
