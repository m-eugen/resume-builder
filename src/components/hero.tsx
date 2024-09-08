import Image from 'next/image'

export default function Hero({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          src={'https://illustrations.popsy.co/violet/web-design.svg'}
          alt="Resume Builder"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-500 mb-4">{description}</p>
      </div>
    </div>
  )
}
