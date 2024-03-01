import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import { getContacts, getStatusFilter, getIsLoading, getError } from "../../redux/selectors";


export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getStatusFilter);
    const filerValue = filter.toString().toLowerCase()
    const filteredContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filerValue));
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div> <h2>Contacts</h2>
            {getIsLoading && !getError && <b>Request in progress...</b>}
            <ul >
                {filteredContacts().map(single => (
                    <ContactListItem
                        key={single.id}
                        id={single.id}
                        name={single.name}
                        phone={single.phone.toString()}
                    />
                ))}
            </ul>
        </div>
    )
}
