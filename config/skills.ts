import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiIpfs,
  SiMongodb,
  SiMaterialdesign,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiTailwindcss,
  SiGithub,
  SiArchlinux,
  SiEthereum,
  SiNetlify,
  SiVercel,
  SiSolidity,
} from 'react-icons/si'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Solidity',
      icon: SiSolidity,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },

    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Wagmi Ethers (JS)',
      icon: SiEthereum,
    },
  ],
  database: [
    {
      name: 'Adobe illustrator',
      icon: SiAdobeillustrator,
    },
    {
      name: 'Adobe Photoshop',
      icon: SiAdobephotoshop,
    },
    {
      name: 'Adobe After Effects',
      icon: SiAdobeaftereffects,
    },

  ],
  cicd: [
    {
      name: 'Ipfs',
      icon: SiIpfs,
    },
    {
      name: 'GitHub',
      icon: SiGithub,
    },
    {
      name: 'Vercel',
      icon: SiVercel,
    },
    {
      name: 'Netlify',
      icon: SiNetlify,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialdesign,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'Tailwind css',
      icon: SiTailwindcss,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'Hardhat',
      icon: SiSolidity,
    },
  ],
  mobile: [
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
  ],

  desktop: [
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
