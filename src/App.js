import React, {useState} from 'react';
import "./app.css";
import Header from './components/Header';
import TableHead from './components/TableHead';
import Form from './components/Form';
import DataList from './components/DataList';


function App() {
    const [data, setData] = useState({name: "", job: ""});
    const [person, setPerson] = useState([]);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prevData => ({...prevData, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPerson(prevPerson => [...prevPerson, data])
        setData(() => ({name: "", job: ""}))
    }
    const handleRemove = (i) => {
        setPerson(prevPerson => prevPerson.filter((item, index) => index !== i))
    }

    return (
        <div className = "container">
            <Header />
            <TableHead />
            <DataList data = {person} onClick = {handleRemove} />
            <Form onChange = {handleChange} onSubmit = {handleSubmit} data = {person} clear = {data} />
        </div>
    )
      
}

export default App;
