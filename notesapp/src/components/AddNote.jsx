import { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function AddNote() {
  const [text, setText] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a note"
        className="border p-2 mr-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded">
        Add
      </button>
    </form>
  );
}

export default AddNote;