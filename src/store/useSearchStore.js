import { create } from "zustand";

export const useSearchStore = create((set) => ({
    // Define Variable people
    peoples: [],
    addPerson: (name) => set((state) => ({ peoples: [...state.peoples, {name}]})),
    removePerson: (index) => set((state) => ({ peoples: state.peoples.filter((people,indexOfPeoples) => index !== indexOfPeoples)}))
}))