import { View, Text, StyleSheet, Image} from 'react-native'


export function About(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.content}>
                 <Image source={require("../../assets/image.png")} style={styles.img}/>   
                <Text style={styles.title}>Hassain Miguel</Text>
                <Text style={styles.text}>software developer</Text>
                </View>
            </View>
            <View style={styles.info}>
                <Text style={styles.title1}>About me</Text>
                <Text style={styles.text1}>Sou desenvolvedor de software, apaixonado por tecnologia e especializado em criar soluções inovadoras para web e mobile.</Text>
                <Text style={styles.text1}>
                Transformo ideias em sistemas eficientes, utilizando linguagem como JavaScript.
                Com foco em performance e usabilidade, busco sempre otimizar processos e oferecer experiências digitais impactantes. Adaptável e criativo, estou sempre aprendendo novas tecnologias para entregar projetos de alta qualidade e impulsionar a transformação digital.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        marginLeft:10,
        marginRight:10,
    },
    header:{
        backgroundColor: "#8A2BE2",
        paddingBottom:58,
        paddingTop:50,
        borderRadius:15,
    },
    title:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18,
        marginTop: 20,
    },
    text:{
        color:'#ffffffc0',
        fontWeight:'condensed',
        fontSize:18,
        marginTop: 5,
    },
    content:{
        justifyContent:'center',
        alignItems: 'center',
    },
    img:{
        width:90,
        height:90,
        borderRadius: 10,
    },
    title1:{
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom:10,
    },
    info:{
        paddingTop:40,
        paddingLeft:20,
        paddingRight:20,
    },
    text1:{
        color: '#000000a0',
        
        fontSize:20,
        textAlign: 'left'
    }
})