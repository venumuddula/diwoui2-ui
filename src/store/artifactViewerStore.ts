import { create } from 'zustand';
import { PdfCardData } from '@/types/conversation';

interface ArtifactViewerState {
  isOpen: boolean;
  currentArtifact: PdfCardData | null;
  openArtifact: (artifact: PdfCardData) => void;
  closeArtifact: () => void;
  resetArtifact: () => void;
}

export const useArtifactViewerStore = create<ArtifactViewerState>((set) => ({
  isOpen: false,
  currentArtifact: null,
  
  openArtifact: (artifact) => set({ 
    isOpen: true, 
    currentArtifact: artifact 
  }),
  
  closeArtifact: () => set({ 
    isOpen: false 
  }),
  
  resetArtifact: () => set({ 
    isOpen: false, 
    currentArtifact: null 
  }),
}));
