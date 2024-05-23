import { useState } from 'react';
import gitlogo from '../assets/background.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { api } from '../services/api';






function App() {

  const [currentRepo,setCurrentRepo ] = useState('');
  const [repo,setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} =  await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repo.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
    }
  }

      
    alert('Repositorio não encontrado')
  }

  const handleDeleteRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  };




  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='github logo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repo.map(repo => (
        <ItemRepo id={repo.id} repo={repo} remove={() => handleDeleteRepo(repo.id)} />
      ))}
    </Container>
  );
}

export default App;
