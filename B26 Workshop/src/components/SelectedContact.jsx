import { useState } from "react";
import {useEffect} from 'react'




export default function SelectedContact({ selectedContactId }) {
  const [singleContact, setSingleContact] = useState(null);

  // Call useEffect and pass it a callback and dependency array.
  useEffect(() => {
    async function fetchSelectedContact() {
      if (selectedContactId === null || selectedContactId === undefined) return;
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json(); //converts the response to JSON
        setSingleContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);
  console.log("Selected Contact: ", singleContact);

  return (
    <div>
      <h2>Selected Contact</h2>
      {singleContact ? (
        <div>
          <p>Name: {singleContact.name}</p>
          <p>Email: {singleContact.email}</p>
          <p>Phone: {singleContact.phone}</p>
        </div>
      ) : (
        <p>No contact selected</p>
      )}
    </div>
  );
}