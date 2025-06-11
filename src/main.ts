// start code

let apiRes: unknown = null;

if (apiRes === null) {
  console.log('Il dato è vuoto');
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
