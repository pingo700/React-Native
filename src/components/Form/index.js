import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import Result from './Result/';
import api from '../../services/Api';

export default function Form(){

    const [usuario, setUsuario] = useState(null)
    const [senha, setSenha] = useState(null)
    const [messageResult, setMessageResult] = useState("Preencha o usuário e a senha !")

    function LoginUsuario(){
        axios.post(baseURL, {
            EMAIL: usuario,
            SENHA: senha
            }).then((response) => {
                setMessageResult(response.data);
            });
    }

    function Validator(){
        if(usuario != null && senha != null){
            LoginUsuario()
            setMessageResult("Processando...")
        }
        return
    }

    return(
        <View>
            <View>
                <Text>Login</Text>
                <TextInput
                onChange={setUsuario}
                value={usuario}
                placeholder="Usuário"
                keyboardType="email-address"
                ></TextInput>
                <Text>Senha</Text>
                <TextInput
                onChange={setSenha}
                placeholder="Senha"
                value={senha}
                keyboardType="text"></TextInput>
                <Button 
                onPress={() => Validator()}
                title="Entrar"/>
            </View>
            <Result messageResult={messageResult} />
        </View>
    );
}