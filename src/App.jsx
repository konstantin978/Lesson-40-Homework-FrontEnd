import './App.css'
import { AddUser } from './Crud/AddUser'
import { UserList } from './Users/UserList'

function App() {
  return <>
    <h1>Hola</h1>
    <div className='crud'>

      <UserList />
      <AddUser />
    </div>

  </>
}

export default App
