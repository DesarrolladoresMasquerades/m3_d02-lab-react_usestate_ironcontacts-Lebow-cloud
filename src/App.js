
import './App.css';
import contactsData from './contacts'
import {useState} from "react"

export default function App() {

  let fiveContacts = contactsData.slice(5,10)
  const [contacts, setContact ] = useState(fiveContacts)

  function addRandomContact(){
    
    const randomContact = contactsData[Math.floor(Math.random() * contactsData.length)]
    
   if(contacts.includes(randomContact)){
    addRandomContact()
   }else{

     setContact(contacts=>[...contacts, randomContact ])
   }
}
  

  function sortByName(){
   setContact(contacts.sort((a,b)=>{
   if(a.name < b.name) { return -1; }
   if(a.name > b.name) { return 1; }
   return 0;
   }).slice())
 }


 function sortByPop(){
  setContact(contacts.sort((a,b)=>{
  if(a.popularity < b.popularity) { return 1; }
  if(a.popularity > b.popularity) { return -1; }
  return 0;
  }).slice())
}

function deleteContact(id){
  setContact(contacts.filter((contact)=>{
    return contact.id!== id;
  }))
}



  return (
    
    <div className ="App">
      <h1>IronContatcs</h1>
      <button onClick = {addRandomContact}>Add Random</button>
      <button onClick = {sortByName}>Sort By Name</button>
      <button onClick = {sortByPop}>Sort By Popularity</button>
      

     <table>
       <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
       </tr>

     {contacts.map((contact) =>(
       
      <tr key = {contact.id}>
        <td><img src={contact.pictureUrl} width ="60"></img></td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td>{contact.wonOscar && "🏆"}{!contact.wonOscar && ""}</td>
        <td>{contact.wonEmmy && "🏆"}{!contact.wonEmmy && ""}</td>
        <td><button onClick={()=>deleteContact(contact.id)}>Delete</button> </td>
       </tr>
      
      ))}
     </table>


  </div>
  )
}


