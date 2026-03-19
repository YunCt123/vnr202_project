import { createContext, useContext, useMemo, useState } from 'react'

type CursorMode = 'default' | 'interactive' | 'map'

type CursorContextValue = {
  mode: CursorMode
  setMode: (mode: CursorMode) => void
}

const CursorContext = createContext<CursorContextValue | null>(null)

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<CursorMode>('default')

  const value = useMemo(() => ({ mode, setMode }), [mode])

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
}

export const useCursor = () => {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider')
  }
  return context
}
