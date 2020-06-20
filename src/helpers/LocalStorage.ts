import * as LS from 'tns-core-modules/application-settings';
import { Note } from '~/classes/note';

export const appendNote = (data: Note): boolean => {
  try {
    const currentContent: string = LS.getString('notes');
    if (currentContent) {
      const contentArray: Array<Note> = JSON.parse(currentContent).push(data);
      contentArray.push(data);
      const storageContent = JSON.stringify(contentArray);

      LS.setString('notes', storageContent);
    } else {
      const firstNote: string = JSON.stringify([data]);

      LS.setString('notes', firstNote);
    }
    return true;
  } catch (err) {
    console.log(err);
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
    console.log(err);
    return [];
  }
};