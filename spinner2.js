let array = ['|' , '/' , '-' , '\\'  , '|'];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + array[i] + '   ');
  },i * 100);
}
