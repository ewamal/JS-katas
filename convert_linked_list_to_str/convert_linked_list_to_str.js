function stringify(list) {
  let current = list;
  let result = '';
  console.log(list);
  while (current){
    result += `${current.data} -> `;
    current = current.next;
  }
  return result + 'null';
}
