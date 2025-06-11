// start code

// snack 2
type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: 'm' | 'f';
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: 'indeterminato' | 'determinato' | 'freelance';
};

let apiRes: unknown = [1, 2, 3];

if (apiRes === null) {
  console.log('Il dato è vuoto');
} else if (Array.isArray(apiRes)) {
  console.log(apiRes.length);
} else {
  switch (typeof apiRes) {
    case 'string':
      console.log(apiRes.toUpperCase());
      break;
    case 'number':
      console.log(apiRes * 2);
      break;
    case 'boolean':
      apiRes ? console.log('si') : console.log('no');
      break;

    default:
      console.log('tipo non supportato');
      break;
  }
}
