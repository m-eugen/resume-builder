export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between p-6 w-full max-w-screen-xl">
      {children}
    </div>
  )
}
