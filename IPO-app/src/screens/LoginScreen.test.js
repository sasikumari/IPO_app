
function LoginScreen() 
{
const [validity, setValidity] = React.useState(true);
const [email, setEmail] = React.useState();
const [password, setPassword] = React.useState();
return(
<View style={{flex:1, backgroundColor: 'white',
alignItems: 'center',justifyContent: 'center', }}>

<TextInput
onChangeText={(value) => setEmail(value)}
focus={true}
style={{ marginTop: 20 }}
placeholder={String.EMAIL} />
<TextInput
onChangeText={(value) => setPassword(value)}
placeholder={String.PASSWORD}
secure={true}
style={{ marginTop: 20 }}
/>
{
!validity &&
< Text style={{
width: '85%',
fontFamily: Font.INTER_SEMIBOLD, fontSize: FontSize.VERY_SMALL, color: Color.ERROR_RED, marginTop: '2%'
}}>Invalid Credentials</Text>
}

<TouchableOpacity
activeOpacity={0.5}
onPress={() => navigation.navigate('ResetPwd')}>
<Text style={styles.forgetPassword}>Forgot Password</Text>
</TouchableOpacity>
<View>

{
if (!(/\S/.test(email)) || email === undefined)
 setValidity(false)

}


export default LoginScreen;