import { useState } from "react"
import { useDispatch } from "react-redux";
import css from './contform.module.css'
import { addContact } from "../../redux/operations";

export default function ContactForm({ onSubmit }) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName("");
    setPhone("");

  };
  const recordName = (e) => {
    setName(e.currentTarget.value);
  }
  const recordNumber = (e) => {
    setPhone(e.currentTarget.value.toString());

  }
  return (<div><h2>Phonebook</h2><form onSubmit={handleSubmit} >
    <label className={css.title}> Contact Name
      <input type="text" name="name" onChange={recordName} value={name} required /> </label>
    <label className={css.title}> Contact Phone  <input type="tel" name="number" onChange={recordNumber} value={phone} required />
    </label> <button className={css.sbmbtn} type="submit" >Add Contact</button>
  </form></div>
  );
};