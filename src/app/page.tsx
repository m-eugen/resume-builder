import Hero from '@/components/hero'
import UsernameForm from '@/components/username-form'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col px-4">
      <Hero
        title="Resume Builder 💼"
        description="Build your resume in minutes, not hours. Use GitHub usernames to get started."
      />
      <UsernameForm />
    </main>
  )
}
