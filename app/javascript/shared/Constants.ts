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
const myobj = {
  a: 2,
  get [Symbol.toStringTag]() {
    return 'a: 2';
  },
};
export const DEEP_JS_EQUALITY_ARRAY = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  '',
  '0',
  '42',
  '42hello',
  'true',
  'NaN',
  true,
  false,
  myobj,
];
export const DEEP_JS_EQUALITY_TEST = [
  {
    input: null,
    testArray: [null, undefined],
  },
  {
    input: undefined,
    testArray: [null, undefined],
  },
  {
    input: 0,
    testArray: [0, '0'],
  },
  {
    input: -0,
    testArray: [-0],
  },
  {
    input: 13,
    testArray: [13],
  },
  {
    input: 42,
    testArray: [42, '42'],
  },
  {
    input: NaN,
    testArray: [NaN],
  },
  {
    input: -Infinity,
    testArray: [-Infinity],
  },
  {
    input: Infinity,
    testArray: [Infinity],
  },
  {
    input: '',
    testArray: [''],
  },
  {
    input: '0',
    testArray: [0, '0'],
  },
  {
    input: '42',
    testArray: [42, '42'],
  },
  {
    input: '42hello',
    testArray: ['42hello'],
  },
  {
    input: 'true',
    testArray: ['true'],
  },
  {
    input: true,
    testArray: [true],
  },
  {
    input: false,
    testArray: [false],
  },
  {
    input: myobj,
    testArray: [myobj],
  },
  {
    input: null,
    testArray: [null, 0],
  },
  {
    input: undefined,
    testArray: [NaN, 0],
  },
  {
    input: 0,
    testArray: [0, -0],
  },
  {
    input: 42,
    testArray: [42, '42hello'],
  },
  {
    input: 25,
    testArray: [25],
  },
  {
    input: Infinity,
    testArray: [Infinity, -Infinity],
  },
  {
    input: '',
    testArray: ['', 0],
  },
  {
    input: 'false',
    testArray: [false],
  },
  {
    input: true,
    testArray: [true, 'true'],
  },
  {
    input: true,
    testArray: [true, 1],
  },
  {
    input: false,
    testArray: [false, 0],
  },
];
