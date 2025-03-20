// BEGIN
const magic = (...args) => {
    const sum = args.reduce((acc, num) => acc + num, 0);
    const fn = (...newArgs) => magic(...args, ...newArgs);
    fn.valueOf = () => sum;
    return fn;
  };
  
  export default magic;
// END


