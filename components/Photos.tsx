import Image from 'next/image'

const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

export default function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          '/photos/image-1.jpg',
          '/photos/image-2.jpg',
          '/photos/image-3.jpg',
          '/photos/image-4.jpg',
          '/photos/image-5.jpg',
        ].map((image, imageIndex) => (
          <div
            key={image}
            className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${
              rotations[imageIndex % rotations.length]
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
