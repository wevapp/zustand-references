import { create } from "zustand";

// Store for Registered User
export const useRegisterStore = create((set) => ({
    // State Variable
    users: [],

    // functions
    // add user to variable
    addUser : (
            firstName, 
            lastName,
            selectedGender,
            contactNumber,
            birthDate,
            email, 
            regUsername, 
            regPassword ) => set((state) => ({ users: [...state.users, {firstName, lastName, selectedGender, contactNumber, birthDate, email, regUsername, regPassword}]})),
}))

// Use for login. compare the username and password of users stored regUsername and regPassword then validate
export const useLoginStore = () => {
    // import users
    const users = useRegisterStore((state) => state.users)
  
    // Function to validate login
    const validateLogin = (username, password) => { // This username and password is from Login component useState username and password
      return users.some((user) => user.regUsername === username && user.regPassword === password) // check username and password if equals to users regUsername and regPassword
    }
    return { validateLogin } // return the result
  }