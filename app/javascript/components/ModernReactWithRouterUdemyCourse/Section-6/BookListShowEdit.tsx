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

/*

The code below will perform the following operations:

  1. Update title of book with given id to new title passed as argument to update function
  2. Swap the updated book with book at order passed as argument
      =>  Book at order passed as argument to update function will be swapped with book updated with new title at id passed as 
          argument to function

const books = [
  {
    id: 0,
    order: 0,
    title: 'Harry Potter',
  },
  {
    id: 1,
    order: 1,
    title: 'Black Widow',
  },
  {
    id: 2,
    order: 2,
    title: 'Superman',
  },
  {
    id: 3,
    order: 3,
    title: 'Spiderman',
  },
  {
    id: 4,
    order: 4,
    title: 'The Matrix Revolution',
  },
  {
    id: 5,
    order: 5,
    title: 'The Avengers',
  }
];

const swapBook = ({title, order, id}) => {
  if(order < 0 || order > books.length) {
    console.log('Order is incorrect - less than 0 or greater than length of array');
    return books;
  }
  let smallerSwapOrder = null;
  let greaterSwapOrder = null;
  let insertElementAtSmallerSwapOrder = null;
  let insertElementAtGreaterSwapOrder = null;
  let bookAtId = null;
  let bookWithOrder = null;
  books.forEach((book) => {
    if(book.id == id) {
      bookAtId = book;
      if(book.order < order) {
        smallerSwapOrder = book.order;
        greaterSwapOrder = order;
      } else {
        smallerSwapOrder = order;
        greaterSwapOrder = book.order;
      }
    }
    if(book.order == order) {
      bookWithOrder = book;
    }
  });
  if(bookAtId.order < order) {
    insertElementAtSmallerSwapOrder = {
      ...bookWithOrder,
      order: bookAtId.order,
    };
    insertElementAtGreaterSwapOrder = {
      ...bookAtId,
      order,
      title
    };
  } else {
    insertElementAtSmallerSwapOrder = {
      ...bookAtId,
      order,
      title,
    };
    insertElementAtGreaterSwapOrder = {
      ...bookWithOrder,
      order: bookAtId.order,
    };
  }
  return [
    ...books.slice(0, smallerSwapOrder),
    insertElementAtSmallerSwapOrder,
    ...books.slice(smallerSwapOrder + 1, greaterSwapOrder),
    insertElementAtGreaterSwapOrder,
    ...books.slice(greaterSwapOrder + 1),
  ];
}
swapBook({title: 'Spiderman - Order - 3 to 1', order: 1, id: 3});

*/

/*

The code below inserts elements in Array
  a. Start of Array
  b. End of Array
  c. Insert Element at specified index in Array
  d. Remove Element at specified index in Array

  const fruits = ['apple', 'cherry', 'guava', 'pears', 'orange', 'mango'];

  a. Start of Array

  const insertFruitAtStart = (fruit) => {
    return [
      fruit,
      ...fruits,
    ];
  }

  b. End of Array

  const insertFruitAtEnd = (fruit) => {
    return [
      ...fruits,
      fruit,
    ];
  };

  c. Insert Fruit at Specified Index

  const insertFruitAtSpecifiedIndex = (fruit, index) => {
    return [
      ...fruits.slice(0, index),
      fruit,
      ...fruits.slice(index),
    ];
  };

  d. Remove fruit at Specified Index

  const removeFruitAtSpecifiedIndex = (index) => {
    return fruits.filter((fruit, fruitIndex) => fruitIndex != index );
  };

  Test Methods with following invocations of functions:
  
  insertFruitAtStart('new fruit');
  insertFruitAtEnd('new fruit');
  insertFruitAtSpecifiedIndex('new fruit', 3);
  removeFruitAtSpecifiedIndex(2);

*/

/*

The following code updates existing property of an object from oldValue to newValue and removes property if object
contains property with specified value


  const fruitObject = {
    id: 1,
    order: 1,
    smell: 'tasty',
    name: 'mango'
  };

  a. Update existing property of an object to a new value

  const updateProperty = (obj, property, newValue) => {
    return {
      ...obj,
      [property]: newValue,
    };
  };

  b. Remove existing property of an object (Because we don't want to mutate argument, we return a new object with property removed)

  const removeProperty = (obj, property) => {
    let updatedObj = {};
    for(const [key, value] of Object.entries(obj)) {
      if(key != property) {
        updatedObj[key] = value;
      }
    };
    return updatedObj;
  };

  Test methods with following invocations:

  updateProperty(fruitObject, 'smell', 'smell property updated');
  removeProperty(fruitObject, 'smell');
*/

/*
The following code iterates over objects in an Array and udpates object if it has a property with specified value to new value,
removes object from array if it has a property with specified value

  const houses = [
    {
      id: 1,
      cost: 1000,
      area: 500,
      tag: 'small',
    },
    {
      id: 2,
      cost: 2000,
      area: 1000,
      tag: 'medium',
    },
    {
      id: 3,
      cost: 3000,
      area: 2000,
      tag: 'medium large',
    },
    {
      id: 4,
      cost: 4000,
      area: 3000,
      tag: 'large',
    }
  ];

  a. If an object exists in array with specified value for a property, update that property of object from oldValue to newValue

  const updateObjectWithSpecifiedProperty = (property, oldValue, newValue) => {
    return houses.map((house) => {
      if(house[property] == oldValue) {
        return {
          ...house,
          [property]: newValue,
        };
      }
      return house;
    });
  };

  b. If an object exists in array with specified value for a property, remove that object from array

  const removeObjectWithSpecifiedProperty = (property, value) => {
    return houses.filter((house) => house[property] != value);
  };

  Test methods with following invocations:

  updateObjectWithSpecifiedProperty('cost', 3000, 5000);
  updateObjectWithSpecifiedProperty('tag', 'large', 'large udpated');
  removeObjectWithSpecifiedProperty('area', 9000);

*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import { IBook } from '@app/types/bookCreate';
import Button from '@mui/material/Button';
import { BookCreate } from './BookCreate';
import { BookList } from './BookList';
import './BookListShowEdit.css';

export function BookListShowEdit() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [bookId, setBookId] = useState<number>(12345);
  const navigate = useNavigate();

  const handleCreate = (title: string): void => {
    setBookId(bookId + 1);
    const updatedBooks = [
      ...books,
      {
        id: bookId,
        title,
      },
    ];
    setBooks(updatedBooks);
  };

  const handleEdit = (title: string, id: number) => {
    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return {
          ...book,
          title,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleDelete = (id: number) => {
    const updatedBooks = books.filter((book) => book.id != id);
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4, mb: 8 }}
          onClick={() =>
            navigate(routes.MODERN_REACT_WITH_ROUTER, { state: { displayWelcomePage: true } })
          }
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </div>
  );
}
