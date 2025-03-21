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
  }