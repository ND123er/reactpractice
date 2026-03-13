import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function NoteItem({ note }) {
  const { deleteNote } = useContext(NotesContext);

  return (
    <li className="flex justify-between border p-2 mb-2 rounded">
      {note.text}
      <button
        onClick={() => deleteNote(note.id)}
        className="bg-red-500 text-white px-2 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default NoteItem;