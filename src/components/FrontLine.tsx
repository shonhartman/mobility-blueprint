// import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
// import abstractBackgroundImage from '@/images/resources/abstract-background.png'
// import discordImage from '@/images/resources/discord.svg'
// import figmaImage from '@/images/resources/figma.svg'
// import videoPlayerImage from '@/images/resources/video-player.svg'
import { Button } from './Button'
import { useRouter } from 'next/navigation'

// Unused template data
// const resources = [
//   {
//     title: 'Figma icon templates',
//     description:
//       'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
//     image: function FigmaImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
//           <Image src={figmaImage} alt="" unoptimized />
//         </div>
//       )
//     },
//   },
//   {
//     title: 'Weekly icon teardowns',
//     description:
//       'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
//     image: function VideoPlayerImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Image
//             className="absolute inset-0 h-full w-full object-cover"
//             src={abstractBackgroundImage}
//             alt=""
//             sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
//           />
//           <Image
//             className="relative"
//             src={videoPlayerImage}
//             alt=""
//             unoptimized
//           />
//         </div>
//       )
//     },
//   },
//   {
//     title: 'Community of icon designers',
//     description:
//       "A private Discord server where you can get help and give feedback on each others' work.",
//     image: function DiscordImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
//           <Image src={discordImage} alt="" unoptimized />
//         </div>
//       )
//     },
//   },
// ]

export function FrontLine() {
  const router = useRouter()

  const handlePracticeClick = () => {
    router.push('/sign-in')
  }

  return (
    <section
      id="front-line"
      aria-labelledby="front-line-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Solar
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Superficial front line
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          The superficial front line myofascial meridian is a continuous pathway
          of connective tissue, or fascia, that encompasses the connections
          between the dorsum of the foot, tibialis anterior, quadriceps, rectus
          abdominis, solar plexus, the throat, and the face ending at the top of
          the forehead.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          It extends from the top of the toes, along the front of the body, up
          through the belly and chest, and ends at the forehead. This pathway is
          involved in posture, core stability, and forward movement, allowing us
          to flex and extend our body. By understanding and addressing the
          superficial front line, practitioners can work with issues related to
          forward movement, breathing, and postural imbalances.
        </p>
        <Button className="mt-8" color="blue" onClick={handlePracticeClick}>
          Practice
        </Button>
      </Container>
      {/* POSSIBLE COMPONENT: This could be a nice look for a listing component */}
      {/* <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container> */}
    </section>
  )
}
