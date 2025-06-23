

// Add button to select contact
export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={() => setSelectedContactId(contact.id)}>
          Select
        </button>
      </td>
    </tr>
  );
}