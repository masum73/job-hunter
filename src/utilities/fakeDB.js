// use local storage to manage cart data
const addToDb = id => {
  let jobsCart = {}

  //get the jobs cart from local storage
  const storedCart = localStorage.getItem('jobs-cart')
  if (storedCart) {
    jobsCart = JSON.parse(storedCart)
  }

  //add quantity
  jobsCart[id] = 1

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
