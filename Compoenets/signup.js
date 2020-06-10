import React ,{Component} from 'react';
import {TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView,Button, Dimensions,Image,StyleSheet,ImageBackground, Text, View , TextInput, TouchableOpacity } from 'react-native';
import Icon from'react-native-vector-icons/Ionicons'
import bgImage from '../images/background.jpg';
import logo from '../images/logo.png'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const {width : Width }=Dimensions.get('window')
const {height : Height }=Dimensions.get('window')
const DismissKeyboard=({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export default class signup extends Component{
  constructor(){
    super()
    this.state={
      showPass: true,
      press:false
    }
  }
  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false,press:true})
    } else{
      this.setState({showPass:true,press:false})
    }
  }  
  Show=()=>
  {
      this.props.navigation.navigate('login');
  }
  render(){
  return (
    
    <DismissKeyboard>
    
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContanier}>
          <Image source={logo} style={styles.logo}/>
        </View> 
        <KeyboardAwareScrollView style={{flex:1}}
     enableOnAndroid={true}>     
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Full Name'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-mail'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press==false ? 'ios-eye':'ios-eye-off'} size={26} color={'rgba(255,255,255,0.7)'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={' Confirm Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press==false ? 'ios-eye':'ios-eye-off'} size={26} color={'rgba(255,255,255,0.7)'}/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}> Sign Up</Text>
        </TouchableOpacity>
        <Text onPress={this.Show} style={styles.logbtn}>Already have an Account? Login</Text>
        </KeyboardAwareScrollView>
      </ImageBackground>
      
      {/* </KeyboardAvoidingView> */}
      </DismissKeyboard>
      
     
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width:null,
    height: Height,
    justifyContent: 'center',
  },
  logbtn:{
    marginTop:10,
    textAlign:'center',
    fontSize:15,
    color :'blue',
  },

  logoContanier: {
    alignItems:'center'
  },
  logo: {
    alignSelf:'center',
    width:120,
    height: 120,
  },
  logoText:{
    color:'white',
    fontSize:20,
    fontWeight:'500',
    marginTop:10,
    opacity:0.5,
  },
  input:{
    width: Width-55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,  
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25,
  },
  inputIcon:{
    position:'absolute',
    top:10,
    left:37
  },
  inputContainer:{
    marginTop:10,
  },
  btnEye:{
    position:'absolute',
    top: 8,
    right:45
  },
  btnLogin:{
    width: Width-55,
    height:45,
    alignSelf:'center',
    borderRadius:25,
    backgroundColor:'#432577',
    justifyContent:'center',
    marginTop:20
  },
  text:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  }
});
