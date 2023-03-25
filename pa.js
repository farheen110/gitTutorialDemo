function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Using Promise.then()
  function sayHello() {
    console.log("Hello");
  
    delay(1000)
      .then(() => console.log("World!"))
      .catch(err => console.error(err));
  }
  
  sayHello(); // Output: Hello (after 1 second) World!
  
  // Using async/await
  async function sayHello2() {
    try {
      console.log("Hello");
  
      await delay(1000);
  
      console.log("World!");
    } catch (err) {
      console.error(err);
    }
  }
  
  sayHello2(); // Output: Hello (after 1 second) World!
  