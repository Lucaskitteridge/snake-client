const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput()
  return stdin;
}

const handleUserInput = () => {
  if (key === '\u0003') {
    process.exit();
  }
}

{setupInput}

module.export = { setupInput }