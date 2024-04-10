import { create } from 'zustand'

export const useBlogStore = create((set) => ({
    blogs: [],
    setBlogs: (blogs: any[]) => set({ blogs }),
}))