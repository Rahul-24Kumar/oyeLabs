function mergeObjects(person, student) {
    const keys = Object.keys(student)
    let nextObj = { ...person }
  
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]
      const value = student[key]
      
      if (typeof value === "object" && value !== null) {
        nextObj = { ...nextObj, ...mergeObjects(nextObj, value) }
      } else {
        nextObj = { ...nextObj, [key]: value }
      }
    }
  
    return nextObj
  }
  
  console.log(mergeObjects(
  
    {
      id: 2,
      gender: 'mail'
    },
  
    student = {
      name: "ravi",
      email: "ravi11@yopmail.com"
    }
  
  ))

  // result: { id: 2, gender: 'mail', name: 'ravi', email: 'ravi11@yopmail.com' }