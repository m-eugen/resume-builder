import Hero from '@/components/hero'
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Hero
        title="Resume Builder 💼"
        description="Build your resume in minutes, not hours. Use GitHub usernames to get started."
      />
    </main>
  )
}
