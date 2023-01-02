import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function (){
    const [project, setProject] = React.useState([]);

    function createPost(project){
			fetch('URL',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(project)
			})
			.then((resp) => resp.json())
			.then((data) => {
				alert("Cadastrado com Sucesso")
			})
			.catch((err) => console.log(err))
	};

	function submit(e) {
		e.preventDefault()
		createPost(project)
	}

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style= {{fontSize: 21}}>Cadastro solicitação de serviço</Text>
                <TextInput style={styles.input} name="name" placeholder="Cliente" onChangeText={(text) => setProject({...project, name: text})}/>
                <TextInput style={styles.input} name="contact" placeholder="Whatsapp" onChangeText={(text) => setProject({...project, contact: text})}/>
                <TextInput style={styles.input} name="service" placeholder="Serviço" onChangeText={(text) => setProject({...project, service: text})} />
                <TextInput style={styles.input} name="value" placeholder="Valor" onChangeText={(text) => setProject({...project, value: text})} />
                <TextInput style={styles.input} name="date" placeholder="Data" onChangeText={(text) => setProject({...project, date: text})} />
                <TextInput style={styles.input} name="status" placeholder="Status" onChangeText={(text) => setProject({...project, status: text})} />
                <Button title="Confirmar" color="#0040FF" accessibilityLabel="Learn more about this purple button" onPress={submit}/>
            </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 25,
      width: 200,
      margin: 10,
      borderWidth: 1,
      padding: 5,
    },
  });
