// start code

let apiRes: unknown = [1, 2, 3];

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
