import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteItem from './NoteItem';

function NoteList() {
  const { notes } = useContext(NotesContext);

  if (notes.length === 0) return <p>No notes yet!</p>;

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
export default NoteList;