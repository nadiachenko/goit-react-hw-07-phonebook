
import { useDispatch } from "react-redux";
import css from './cli.module.css'
import { deleteContact } from "../../redux/operations";

export const ContactListItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (<li className={css.list}>
    <p>{name}: {phone}</p>
    <button className={css.dltbtn} onClick={handleDelete}>Delete Contact</button>
  </li>);

}