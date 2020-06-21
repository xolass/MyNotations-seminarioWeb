import * as LS from 'tns-core-modules/application-settings';
import { Note } from '~/classes/note';


export const appendNote = (data: Note): boolean => {
  try {
    const currentContent: string = LS.getString('notes');
    if (currentContent) {
      const contentArray: Array<Note> = JSON.parse(currentContent);
      contentArray.push(data);
      const storageContent = JSON.stringify(contentArray);

      LS.setString('notes', storageContent);
    } else {
      const firstNote: string = JSON.stringify([data]);

      LS.setString('notes', firstNote);
    }
    return true;
  } catch (err) {
    return false;
  }
};

export const getAllNotes = (): Array<Note> => {
  try {

    if (LS.hasKey('notes')) {
      return JSON.parse(LS.getString('notes'));
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};

export const editNote = (id: number, newNote: Note): boolean => {
  try {
    const notes = JSON.parse(LS.getString('notes'));
    const newNotesArray = [];
    notes.forEach((note) => {
      if (note._id === id) {
        newNotesArray.push(newNote);
      } else {
        newNotesArray.push(note);
      }
    });
    LS.setString('notes', JSON.stringify(newNotesArray));
    return true;
  } catch (err) {
    return false;
  }
};


export const deleteNote = (id: number): boolean => {
  try {
    const notes = JSON.parse(LS.getString('notes'))
    const newArray = notes.filter((note) => {
      return note._id !== id
    });
    LS.setString('notes', JSON.stringify(newArray));
    return true;
  } catch (err) {
    return false;
  }
};

