import{ create }from 'zustand'


type Issue = {
  id: number;
  title: string;
};

interface Store {
  issues: Issue[];
  setIssues: (newIssues: Issue[]) => void;
}


const useStore = create<Store>((set) => ({
    issues: [],
    setIssues: (newIssues) => set({issues: newIssues})
}))

export default useStore;