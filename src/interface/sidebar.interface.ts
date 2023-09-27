export interface SidebarPsyProps {
  isSidebarOpen: boolean;
  isDocumentsExpanded: boolean;
  toggleDocuments: () => void;
}

export interface SidebarPatientProps {
  isSidebarOpen: boolean;
  isScheduleExpanded: boolean;
  toggleSchedule: () => void;

  isDailyExpanded: boolean;
  toggleDaily: () => void;
  
}
