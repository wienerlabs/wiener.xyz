import ethereumFoundationLogo from '../assets/images/partners/ethereum-foundation.png';
import opLabsLogo from '../assets/images/partners/op-labs.png';
import solanaLogo from '../assets/images/partners/solana.png';
import superteamLogo from '../assets/images/partners/superteam.svg';
import wormholeLogo from '../assets/images/partners/wormhole.png';
import okxLogo from '../assets/images/partners/okx.png';
import gateIoLogo from '../assets/images/partners/gate-io.png';
import kucoinLogo from '../assets/images/partners/kucoin.png';
import safebitLogo from '../assets/images/partners/safebit.png';
import papelLogo from '../assets/images/partners/papel.png';
import tetherLogo from '../assets/images/partners/tether.png';
// import destekPatentLogo from '../assets/images/partners/destek-patent.png'; // hidden — see Destek Patent block below
import katilimEnerjiLogo from '../assets/images/partners/katilim-enerji.png';
import ironnodeLogo from '../assets/images/partners/ironnode.png';

export const partnersData = [
  {
    id: "ethereum-foundation",
    name: "Ethereum Foundation",
    subtitle: "Devcon Istanbul",
    category: "Conference Partnership",
    logo: ethereumFoundationLogo,
    description:
      "Supported Devcon Istanbul, one of the most important global Ethereum developer conferences, strengthening regional Web3 visibility and adoption.",
    highlights: [
      "Strategic ecosystem positioning within the Ethereum community",
      "Engagement with global blockchain developers and stakeholders",
      "Contribution to regional Web3 visibility and adoption",
    ],
  },
  {
    id: "op-labs",
    name: "OP Labs",
    subtitle: "Devcon Side Event, Community Activation",
    category: "Ecosystem Growth",
    logo: opLabsLogo,
    description:
      "Co-supported a community-driven Web3 event as part of Devcon side activities, reinforcing Layer-2 adoption narratives.",
    highlights: [
      "Community engagement & ecosystem growth",
      "Developer-focused activation",
      "Strengthening Layer-2 adoption narratives",
    ],
  },
  {
    id: "solana",
    name: "Solana",
    subtitle: "Ecosystem Alignment",
    category: "Layer-1 Infrastructure",
    logo: solanaLogo,
    description:
      "Active builder within the Solana ecosystem, deploying tokenization, DeFi, and AI-compute primitives on a high-throughput blockchain rail.",
    highlights: [
      "High-throughput RWA deployments",
      "On-chain program development in Rust / Anchor",
      "Cross-ecosystem liquidity integration",
    ],
  },
  {
    id: "superteam",
    name: "Superteam",
    subtitle: "Talent Layer of Solana",
    category: "Community & Network",
    logo: superteamLogo,
    description:
      "Engaged with Superteam, the talent and community layer powering builder networks across the Solana ecosystem, supporting regional activations and contributor growth.",
    highlights: [
      "Builder network engagement",
      "Regional hackathon and bounty activations",
      "Ecosystem contributor amplification",
    ],
  },
  {
    id: "wormhole",
    name: "Wormhole",
    subtitle: "Cross-Chain Messaging Infrastructure",
    category: "Interoperability",
    logo: wormholeLogo,
    description:
      "Integrated with Wormhole's messaging and asset-transfer infrastructure to enable cross-chain RWA flows across Ethereum, Solana, and additional destination networks.",
    highlights: [
      "Cross-chain asset transfer pipelines",
      "Multi-network RWA distribution",
      "Interoperability-first architecture",
    ],
  },
  {
    id: "ironnode",
    name: "IronNode Security",
    subtitle: "Smart Contract & Protocol Audits",
    category: "Security Audit",
    logo: ironnodeLogo,
    description:
      "Security audit partner reviewing Wiener Labs' smart contracts, on-chain programs, and protocol architecture before mainnet deployment. Independent third-party assurance for institutional counterparties.",
    highlights: [
      "Smart contract & on-chain program audits",
      "Protocol-level threat modelling",
      "Pre-mainnet security sign-off",
    ],
  },
  {
    id: "okx",
    name: "OKX",
    subtitle: "Global Sponsorship & Visibility Campaign",
    category: "Brand Amplification",
    logo: okxLogo,
    description:
      "Supported global crypto exchange OKX in a strategic sponsorship initiative involving Daniel Ricardo, bridging Web2 and Web3 audiences.",
    highlights: [
      "Bridging Web2 + Web3 audience visibility",
      "Brand amplification across digital and event ecosystems",
      "Cross-market communication strategy",
    ],
  },
  {
    id: "walther-kranz",
    name: "Walther Kranz",
    subtitle: "Strategic Communications Partner",
    category: "PR & Communications",
    description:
      "Long-standing communications partner powering Wiener Labs' global narrative across Web3, fintech, and enterprise ecosystems, the connective layer behind our exchange, sponsorship, and market-entry collaborations.",
    highlights: [
      "Global PR & media relations",
      "Cross-market positioning strategy",
      "Stakeholder and ecosystem introductions",
    ],
  },
  {
    id: "exchanges-fintech",
    name: "Gate.io · KuCoin · SafeBit · Papel",
    subtitle: "Communication & Market Positioning",
    category: "Exchange & Fintech",
    logos: [gateIoLogo, kucoinLogo, safebitLogo, papelLogo],
    description:
      "Contributed to communication strategies for leading crypto exchanges and fintech platforms operating globally, serving millions of users across international markets.",
    highlights: [
      "PR & media positioning",
      "Market entry communication strategies",
      "Community engagement and visibility",
    ],
  },
  {
    id: "tether",
    name: "Tether",
    subtitle: "Stablecoin Settlement Layer",
    category: "Digital Dollar Infrastructure",
    logo: tetherLogo,
    description:
      "Aligned with Tether's USDT settlement rails to enable stable-value on/off-ramps for tokenized asset flows across institutional and retail corridors.",
    highlights: [
      "USDT-denominated settlement flows",
      "Institutional stablecoin integrations",
      "Multi-chain liquidity support",
    ],
  },
  // Destek Patent — temporarily hidden; restore by uncommenting the block below.
  // {
  //   id: "destek-patent",
  //   name: "Destek Patent",
  //   subtitle: "Intellectual Property Tokenization",
  //   category: "RWA, Intellectual Property",
  //   logo: destekPatentLogo,
  //   description:
  //     "Developed a tokenization strategy and infrastructure concept for converting intellectual property assets into programmable, tradeable tokens.",
  //   highlights: [
  //     "Tokenization of intellectual property assets",
  //     "Digital ownership structures",
  //     "Blockchain-based asset management model",
  //   ],
  // },
  {
    id: "katilim-enerji",
    name: "Katılım Enerji",
    subtitle: "Energy RWA Tokenization",
    category: "RWA, Energy",
    logo: katilimEnerjiLogo,
    description:
      "Designed a Real World Asset (RWA) tokenization model tailored to energy assets, opening institutional investor access through blockchain rails.",
    highlights: [
      "Energy asset tokenization framework",
      "Investor access via blockchain",
      "Revenue-based digital asset structuring",
    ],
  },
];

export const capabilityAreas = [
  "RWA Tokenization",
  "Smart Contract Architecture",
  "Blockchain Financial Infrastructure",
  "Quant & Copy Trading Systems",
  "Digital Asset Lifecycle Design",
];

export const positioningStatement =
  "Wiener Labs combines deep technical expertise with global communication power, enabling institutions to transition from traditional asset structures into scalable, tokenized financial ecosystems.";

export const whyThisMatters = [
  { label: "Execution", value: "Across Web3 Leaders" },
  { label: "Presence", value: "Global Ecosystem Events" },
  { label: "Pipeline", value: "RWA & Tokenization" },
  { label: "Network", value: "Strategic Partnerships" },
];
