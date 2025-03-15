import { useState } from "react"
import { View, Text , StyleSheet, Image, TouchableOpacity, Modal} from "react-native"
import Slider from '@react-native-community/slider'
import { ModalPassword } from "../../Components/modal"

let charset = "abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
export function Home(){

  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function generetPassword(){
    let password = '';
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
  }
  
  setPasswordValue(password)
  setModalVisible()
}

  return(
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo}/>
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
          <Slider style={{ height:50 }} minimumValue={6} maximumValue={20} maximumTrackTintColor="#ff00006a" minimumTrackTintColor="#00000092"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) =>{setSize(value.toFixed(0))} } 
          >
          </Slider>
      </View>
      <TouchableOpacity style={styles.button} onPress={generetPassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handLeClose={ ()=> setModalVisible(false)}/>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginBottom:60,
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:'80%',
    backgroundColor: '#FFF',
    borderRadius:8,
    padding:8,
  },
  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#fff",
    fontSize:20,
  },
  title:{
    fontSize:30,
    fontWeight: 'bold'
  }
}
)
