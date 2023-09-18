import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAmericasIcon,
  UserIcon,
  UserGroupIcon,
  CogIcon,
  ArrowsRightLeftIcon,
  BoltIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Global Perspective:",
    description:
      "Emphasizing a global outlook and understanding of diverse cultures and markets in both LATAM and MENA.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Integrity:",
    description:
      "Commitment to honesty, transparency, and ethical conduct in all business dealings.",
    icon: UserIcon,
  },
  {
    name: "Partnership:",
    description:
      "Fostering strong collaborative relationships with businesses and stakeholders in both regions.",
    icon: UserGroupIcon,
  },
  {
    name: "Innovation:",
    description:
      "Encouraging a culture of creativity and innovation to address the unique challenges and opportunities in LATAM and MENA.",
    icon: CogIcon,
  },
  {
    name: "Diversity and Inclusivity:",
    description:
      "Valuing and respecting the diverse backgrounds, perspectives, and talents of employees and partners.",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Sustainability:",
    description:
      "Promoting environmentally and socially responsible business practices.",
    icon: BoltIcon,
  },
];

export default function AboutUsSection() {
  return (
    <div className='overflow-hidden bg-white py-14 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-[#333333]'>
                About Us
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-[#FF0000] sm:text-4xl'>
                Who we are
              </p>
              <p className='mt-6 text-lg leading-8 text-[#161616]'>
                Based in Abu Dhabi and supported by High Net Worth Individuals
                (HNWIs), at South2South we have built a robust business model
                that enables seamless connections with local governments,
                businesses, and strategic partners. Our ultimate goal is to
                responsibly create value for our shareholders while contributing
                to the socio-economic development of nations.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-[#161616] lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-[#FF0000]'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src='/Photography/WhoWeAre/s2sRep.png'
            alt='Product screenshot'
            className='w-[48rem] max-w-none rounded-xl  sm:w-[57rem] md:-ml-4 lg:-ml-0 hidden sm:inline'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
