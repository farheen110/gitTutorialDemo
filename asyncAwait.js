const createPost = async () => {
    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
      setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => {
      setTimeout(() => resolve('popcorn'), 3000);
    });
    const addButter = new Promise((resolve, reject) => {
      setTimeout(() => resolve('butter'), 3000);
    });
    const getColdDrinks = new Promise((resolve, reject) => {
      setTimeout(() => resolve('coldDrinks'), 3000);
    });
  
    let ticket = await person3PromiseToShowTicketWhenWifeArrives;
    console.log(`got the ${ticket}`);
  
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);
    
    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
      console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);
    
    let butter = await addButter;
    console.log(`added ${butter}`);
     
    console.log(`Husband:Anything else darling`);
      console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);
  
    let coldDrinks = await getColdDrinks;
    console.log(`added ${coldDrinks}`);
    console.log(`Husband: here are coldDrinks`);
    console.log(`Wife: Okay lets go now`);
    console.log(`Husband: thanks for saying`);
  
    return ticket;
  };
  
  const deletePost = (t) => {
    console.log(`person4 shows ${t}`);
  };
  
  console.log('person1 shows ticket');
  console.log('person2 shows ticket');
  
  createPost().then(deletePost);
  
  console.log('person4 shows ticket');