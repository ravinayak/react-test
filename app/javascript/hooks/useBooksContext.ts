import { useContext } from 'react';
import { BooksContext } from '@app/components/ModernReactWithRouterUdemyCourse/Section-8/context/Provider';

export const useBooksContext = () => useContext(BooksContext);
