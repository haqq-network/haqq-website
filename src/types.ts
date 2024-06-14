export interface NextRequestInit extends RequestInit {
  next?: {
    revalidate?: number;
  };
}

export enum PartnerType {
  INFRASTRUCTURE = 'infrastructure',
  WALLET = 'wallet',
  DEFI = 'defi',
  BRIDGE = 'bridge',
  PAYMENTS = 'payments',
  SERVICE = 'service',
  INSTITUTIONAL = 'institutional',
}

export enum PartnerStatus {
  LIVE = 'live',
  PLANNED = 'planned',
}

export interface Partner {
  logoUrl: string;
  logoWidth?: number;
  logoHeight?: number;
  name: string;
  description: string;
  type: PartnerType;
  status: PartnerStatus;
  link: string;
  className?: string;
  _uid?: string;
}

export interface HaqqChainStats {
  accounts: string;
  transactionsIn24Hour: string;
  consensusFinality: string;
  transactionAvgCost: string;
  coinomicsEra: string;
  coinomicsEmissionRate: string;
  supply: string;
  coinomicsWillBeMinted: string;
  circulatingSupply: string;
}

export interface ChainStats {
  mainnetAccountsCreated: number;
  transactionsInLast24Hours: number;
  secondsToConsensusFinality: number;
  averageCostPerTransaction: number;
  era: number;
  emissionRate: number;
  emittedAlready: number;
  willBeEmitted: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  content?: string;
  description?: string;
  image: { src: string; width: number; height: number } | null;
  isFeatured?: boolean;
  tags: string[];
  utmCampaign?: string;
}

export type LogoType = 'full' | 'sign' | 'text' | 'mark';

export type BrandColorsNames =
  | 'haqq-orange'
  | 'haqq-blue'
  | 'haqq-seaweed'
  | 'haqq-big-foot-feet'
  | 'haqq-azure'
  | 'islamic-primary';

export type BrandColorsType = 'main' | 'gradient';
export interface CustomImage {
  size: {
    width: number;
    height: number;
  };
  svgPath: string;
  pngPath: string;
}

export interface BrandColorAsset {
  color: BrandColorsNames;
  colorType: BrandColorsType;
  hex: string;
}

export interface BrandAsset extends CustomImage {
  logoType: LogoType;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  content?: string;
  description?: string;
  image: { src: string; width: number; height: number } | null;
  isFeatured?: boolean;
  tags: string[];
  utmCampaign?: string;
}
