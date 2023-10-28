/*

	1. Display application where user can add Book Title on top of a form
	2. Below the form List of books should be displayed
	3. Each book should be displayed with a delete icon and a pencil icon to edit the book
	4. If you click the delete icon, book should be displayed and no longer be displayed in the list
	5. If you click the edit icon, book should be editable and a form should be displayed in the book component, where
		 book can be edited and saved. Upon saving, the book should display new title
	6. Every time we edit the book, delete the book, book list being displayed should show the correct state of books
	7. Implement the following with state properties:
				a. Insert an element in array at a specified index
				b. Insert an element in array at the beginning of the array
				c. Insert an element in array at the end of the array
				d. Remove an element at a specified index in the array
				e. Update an existing property of an object to a new value
				f. Remove an existing property of an object
	8. Impelementation Tips:
				a. Use Material UI Icons for:
						i. 	Pencil Icon
						ii.	Delete Icon
				b. Use Formik for displaying form
				c. Use Card and CardActions for displaying form text field
				d. Use MaterialUI Button for Save
				e. Display Pencil Icon and Delete Icon using Material UI IconButton at the upper right corner
	9. Update the application to implement Step 7 for updating state for array, objects
	
*/
import React, { useState } from 'react';
import { IBook } from '@app/types/bookCreate';
import { BookCreate } from './BookCreate';
import { BookList } from './BookList';
import './BookListShowEdit.css';

export function BookListShowEdit() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [id, setId] = useState<number>(12345);

  const handleCreate = (title: string): void => {
    setId(id + 1);
    const updatedBooks = [
      ...books,
      {
        id,
        title: title,
      },
    ];
    setBooks(updatedBooks);
  };

  const handleEdit = (title: string, id: number) => {
    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return {
          ...book,
          title: title,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleDelete = (id: number) => {
    console.log(id);
    const updatedBooks = books.filter((book) => book.id != id);
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };

  return (
    <div id='book-list-show-edit' className='book-list-show-edit-container flex-display'>
      <div className='flex-column-justify-align-center flex-display margin-bottom-16'>
        <div className='heading-introduction'>Display Book List - Add/Edit/Delete Books</div>
        <div>
          ******************************************************************************************************
        </div>
      </div>
      <BookCreate handleCreate={handleCreate} />
      <BookList books={books} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}
