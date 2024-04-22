import { create } from 'zustand'
// type blogStore = {
//     blogs: [],
//     setBlogs: () => void;
// }
export const useBlogStore = create((set) => ({
    blogs: [],
    setBlogs: (blogs: string) => set({ blogs }),
}))