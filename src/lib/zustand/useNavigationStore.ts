import { create } from 'zustand'

interface NavigationState {
  isLoading: boolean
  progress: number
  currentPath: string
  targetPath: string | null
  startLoading: (path: string) => void
  updateProgress: (value: number) => void
  finishLoading: (path: string) => void
  cancelLoading: () => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isLoading: false,
  progress: 0,
  currentPath: '/',
  targetPath: null,

  startLoading: (path) =>
    set(() => ({
      isLoading: true,
      progress: 0,
      targetPath: path,
    })),

  updateProgress: (value) =>
    set(() => ({
      progress: Math.min(value, 100),
    })),

  finishLoading: (path) => {
    set(() => ({
      isLoading: false,
      progress: 100,
      currentPath: path,
      targetPath: null,
    }))
    // reset progress after short delay
    setTimeout(() => {
      set(() => ({ progress: 0 }))
    }, 200)
  },

  cancelLoading: () =>
    set(() => ({
      isLoading: false,
      progress: 0,
      targetPath: null,
    })),
}))
