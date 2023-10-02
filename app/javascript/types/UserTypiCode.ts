// jsonplaceholder.typicode.com
type IGeoTypiCode = {
  lat: string;
  lng: string;
};

type ICompanyTypicode = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type IAddressTypiCode = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoTypiCode;
};

export type IUserTypiCode = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressTypiCode;
  phone: string;
  website: string;
  company: ICompanyTypicode;
};

export type ICreateUserTypiCodePayload = {
  name: string;
  username: string;
  email: string;
  address: IAddressTypiCode;
  phone: string;
  website: string;
  company: ICompanyTypicode;
};

// Sample Data
// {
// 	"id": 1,
// 	"name": "Leanne Graham",
// 	"username": "Bret",
// 	"email": "Sincere@april.biz",
// 	"address": {
// 		"street": "Kulas Light",
// 		"suite": "Apt. 556",
// 		"city": "Gwenborough",
// 		"zipcode": "92998-3874",
// 		"geo": {
// 			"lat": "-37.3159",
// 			"lng": "81.1496"
// 		}
// 	},
// 	"phone": "1-770-736-8031 x56442",
// 	"website": "hildegard.org",
// 	"company": {
// 		"name": "Romaguera-Crona",
// 		"catchPhrase": "Multi-layered client-server neural-net",
// 		"bs": "harness real-time e-markets"
// 	}
// }
