import React ,{Component} from 'react';
import {AsyncStorage,Alert,TouchableWithoutFeedback,Keyboard,Dimensions,Image,StyleSheet,ImageBackground, Text, View , TextInput, TouchableOpacity} from 'react-native';
import Icon from'react-native-vector-icons/Ionicons'
import bgImage from '../images/background.jpg';
import logo from '../images/logo.png'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const key='@MyApp:key';


const {width : Width }=Dimensions.get('window')
const {height : Height }=Dimensions.get('window')
const DismissKeyboard=({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
 
export default class login extends Component{
  constructor(){
    super()
    this.state={
      showPass: true,
      press:false,
      text:'',
      storedValue:'',
    }
  };
  componentWillMount(){
    this.onLoad();
  }
  onLoad=async()=>{
       try{
      const storedValue =await AsyncStorage.getItem(key);
      this.setState({storedValue});
    } catch (error){
      Alert.alert('Error','there was an error while loading the data');
    }
  }
  onChange=(text)=>{
    this.setState({text});
  }
  onSave =async() =>{
    const{text}=this.state;
    try{
      await AsyncStorage.setItem(key,text);
      Alert.alert('Saved','succes');
    } catch (error){
      Alert.alert('Error','there was error');
    }
  }
   
  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false,press:true})
    } else{
      this.setState({showPass:true,press:false})
    }
  }  
  Show=()=>{
      this.props.navigation.navigate('signup');
  }
  render(){
    const{storedValue,text}=this.state;
  return (
    <DismissKeyboard>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContanier}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <KeyboardAwareScrollView style={{flex:1}}
     enableOnAndroid={true}>
       <Text style={styles.text}>{storedValue}</Text>   
        <View style={styles.inputContainerfirst}>
          <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            onChangeText={this.onChange}
            value={text}
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
        <TouchableOpacity style={styles.btnLogin} onPress={this.onSave}>
          <Text style={styles.text}> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={this.onLoad}>
          <Text style={styles.text}> Load</Text>
        </TouchableOpacity>
        <Text onPress={this.Show} style={styles.logbtn}>Don't have an Account? SignUp</Text>
        </KeyboardAwareScrollView>
      </ImageBackground>
      </DismissKeyboard>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width:Width,
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
    height: 120
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
  inputContainerfirst:{
    marginTop:100,
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
