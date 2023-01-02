import Table from 'react-bootstrap/Table';
import {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';

function Andamento(){

	const [categories, setCategories] = useState([])

	const [filter, setfilter] = useState([]);

	useEffect(() => {
	  fetch('URL',{
		  method: 'GET',
		  headers: {
			  'Content-Type': 'application/json',
		  },
	  })
	  .then((resp) => resp.json())
	  .then((data) => {
		  setCategories(data)
	  })
	  .catch((err) => console.log(err))
  }, []);

	const styles2 = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	  };

	function handleChange(e){
		setfilter(e.target.value)
	}
	return(
		<div style={styles2}>
		<Form>
		<Form.Group className="mb-3" controlId="formBasicEmail">
		  <Form.Label>Filtro de vigência</Form.Label>
		  <Form.Control name ="filter" type="number" placeholder="Insira a vigência desejada" onChange={handleChange}/>
		  <Form.Text className="text-muted">
			Mês e ano a ser filtrado os serviços.
		  </Form.Text>
		</Form.Group>
		</Form>
		<Table striped bordered hover variant="dark" >
		<thead>
		  <tr>
			<th>Nome do cliente</th>
			<th>Contato</th>
			<th>Serviço</th>
			<th>Valor</th>
			<th>Data</th>
			<th>Status</th>
		  </tr>
		</thead>
		<tbody>
		  <tr>
		  	<td>{categories.map( (categorie) => {if (categorie.date ==filter) return <p>{categorie.name}</p>})}</td>
		  	<td>{categories.map( (categorie) => {if (categorie.date ==filter) return <p>{categorie.contact}</p>})}</td>
		  	<td>{categories.map( (categorie) => {if (categorie.date ==filter) return <p>{categorie.service}</p>})}</td>
		  	<td>{categories.map( (categorie) => {if (categorie.date ==filter) return <p>{categorie.value}</p>})}</td>
		  	<td>{categories.map( (categorie) => {if (categorie.date ==filter) return <p>{categorie.date}</p>})}</td>
			<td>{categories.map( (categorie) => {if (categorie.date ==filter & categorie.status == 0) return <p>Em andamento</p>})}</td>
		  </tr>
		</tbody>
	  </Table>
	  </div>
	);
}

export default Andamento;

