export interface Point {
    x: number;
    y: number;
  }
  
  export type PolylineData = Point[];
  
  export interface Parameters {
    slopeAngle: number;
    heightToFill: number;
    heightToBottom: number;
    rectLength: number;
    rectWidth: number;
    requiredVolume: number;
    requiredSurface: number;
  }
  
  export interface CalculationResults {
    vertices: Point[];
    vulrandVlak: Point[];
    bodemVlak: Point[];
    volumeL: number;
    totaleOppervlakteM2: string;
    bodemOppervlakteM2: string;
    schuineZijdenOppervlakteM2: string;
    uitgravingsVolumeM3: string;
    inputMethod: string;
    length?: number;
    width?: number;
    slopeAngle: number;
    heightToFill: number;
    heightToBottom: number;
    outdated?: boolean;
    detailData?: {
      volumeMaaiveldTotVulrandM3: string;
      volumeVulrandTotBodemM3: string;
      maaiveldOppervlakteM2: string;
      vulrandOppervlakteM2: string;
    };
  }
  
  export interface ValidationResult {
    isValid: boolean;
    message?: string;
    messageParams?: Record<string, number>;
    image?: string;
  }

  export type User = {
    firstname:string;
    lastname:string;
    subscription_id?:string;
    mastercard_end?:string;
    payment? :string;
    payment_date?:string;
    valid?: boolean;
    email:string;
    password:string;
    accept_privacy: boolean;
    accept_promos: boolean;
    stripe_customer_id: string;
}

  export type Abo = {
    id?: number;
    name:string;
    plan_id:string;
    category: string;
    price:string;
    features:feature[];
    available: boolean;
}

  export type feature = {
    feature: string;
}

export type UserLogin  = {
    email:string;
    password:string;
}

export interface Point {
  x: number;
  y: number;
}

export interface Segment {
  start: Point;
  end: Point;
}

export interface Parameters {
  slopeAngle: number;
  heightToFill: number;
  heightToBottom: number;
  rectLength: number;
  rectWidth: number;
  requiredVolume: number;
  requiredSurface: number;
}

export interface CalculationResults {
  vertices: Point[];
  vulrandVlak: Point[];
  bodemVlak: Point[];
  slopeAngle: number;
  heightToFill: number;
  heightToBottom: number;
  volumeL: number;
  totaleOppervlakteM2: string;
  bodemOppervlakteM2: string;
  schuineZijdenOppervlakteM2: string;
  inputMethod: string;
  length?: number;
  width?: number;
  outdated?: boolean;
}

export type Architect = {
  id?: number;
  name?: string;
  user_email?: string;
  street?: string;
  house_number?: number;
  zip_code?: number;
  town?: string;
};

export type Construction_Site = {
  id?: number;
  facts?: string;
  user_email?: string;
  street?: string;
  house_number?: number;
  zip_code?: number;
  town?: string;
};

export type Builder = {
  id?: number;
  name?: string;
  user_email?: string;
  street?: string;
  house_number?: number;
  zip_code?: number;
  town?: string;
};


export type TabType = "dxf" | "rectangle" | "requirements";