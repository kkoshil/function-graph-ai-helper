
export interface PlotPoint {
  x: number;
  y: number | null;
}

export interface AnalysisDetails {
  summary: string;
  roots: string;
  yIntercept: string;
  extrema: string;
  domain: string;
  range: string;
  symmetry: string;
}

export interface PracticeProblem {
  question: string;
  answer: string;
}

export interface SuggestedPlotRange {
    min: number;
    max: number;
}

export interface FunctionAnalysis {
  function: string;
  suggestedPlotRange: SuggestedPlotRange;
  analysis: AnalysisDetails;
  practiceProblem: PracticeProblem;
}

export interface HistoryEntry {
  id: string;
  expression: string;
  date: string;
}
