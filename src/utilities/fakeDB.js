// use local storage to manage cart data
const addToDb = id => {
    let jobsCart = {}
  
    //get the jobs cart from local storage
    const storedCart = localStorage.getItem('jobs-cart')
    if (storedCart) {
      jobsCart = JSON.parse(storedCart)
    }
  
    //add quantity
    const quantity = jobsCart[id]
    if (quantity > 1) {
    //   const newQuantity = quantity + 1
    //   jobsCart[id] = newQuantity
    // toast alert 
    } else {
      jobsCart[id] = 1
    }
    localStorage.setItem('jobs-cart', JSON.stringify(jobsCart))
  }
  
  const getStoredCart = () => {
    let jobsCart = {}
  
    //get the jobs cart from local storage
    const storedCart = localStorage.getItem('jobs-cart')
    if (storedCart) {
      jobsCart = JSON.parse(storedCart)
    }
    return jobsCart
  }
  
  export { addToDb, getStoredCart }
  