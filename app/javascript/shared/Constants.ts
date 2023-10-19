import Bird from '@app/images/bird.svg';
import Cat from '@app/images/cat.svg';
import Cow from '@app/images/cow.svg';
import Dog from '@app/images/dog.svg';
import Gator from '@app/images/gator.svg';
import Horse from '@app/images/horse.svg';

export const SKILLS = ['Maths', 'Arithmetic', 'Astrology'];
export const USER_JSON_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
export const USERS_JSON = [
  {
    name: 'Leanne Graham',
    id: 1,
  },
  {
    name: 'Ervin Howell',
    id: 2,
  },
  {
    name: 'Clementine Bauch',
    id: 3,
  },
];
export const ANIMALS = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
export const ANIMALS_IMAGES_MAPPING = {
  bird: Bird,
  cat: Cat,
  cow: Cow,
  dog: Dog,
  gator: Gator,
  horse: Horse,
};
export const DEEP_JS_FOUNDATIONS_OBJECT_IS = [
  [42, 42],
  ['foo', 'foo'],
  [false, false],
  [null, null],
  [undefined, undefined],
  [NaN, NaN],
  [-0, -0],
  [0, 0],
  [-0, 0],
  [0, -0],
  [0, NaN],
  [NaN, 0],
  [42, '42'],
  ['foo', 'bar'],
  [false, true],
  [null, undefined],
  [undefined, null],
];

export const DEEP_JS_FOUNDATIONS_COERCION_STRING_TEST = [
  'Frank',
  '  Hi   This is a  ',
  false,
  null,
  [1, 2, 3],
  '   h   i    ',
  '  e   f',
  undefined,
  '',
  '    \t\n',
  'x',
  123,
];

export const DEEP_JS_FOUNDATIONS_COERCION_NUMBER_STRING_TEST = [
  [6, 10],
  [6, '10'],
  ['6', '10'],
  ['6', 10],
  ['', 6],
  [6, ''],
  ['', ''],
  ['foo', 6],
  [6, 'foo'],
  ['foo', 'bar'],
  [null, null],
  [null, undefined],
  [undefined, null],
  [undefined, undefined],
  [false, false],
  [false, true],
  [true, false],
  [true, true],
  [10, 6],
  [10, '6'],
  ['10', '6'],
  ['10', 6],
  [6, 10.1],
  [6.1, 10],
  [6, '10.1'],
  ['6.1', 10],
  ['6.1', '10.1'],
];
