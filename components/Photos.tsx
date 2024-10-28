import Image from 'next/image'

export default function Photos() {
  const images = [
    "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image + imageIndex}
            className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${
              ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'][imageIndex]
            }`}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              width={3744}
              height={5616}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
