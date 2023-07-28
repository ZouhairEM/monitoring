import { useReducer, Dispatch } from 'react';

function useMonitoringReducer() {
  type MonitoringState = {
    isPanelVisible: boolean;
    isActive: number;
    currentPage: number;
    alarmsPerPage: number;
  };

  type Action =
    | { type: 'visibility_control_panel'; setPanel: boolean }
    | { type: 'is_active'; setActive: number }
    | { type: 'set_current_page'; setCurrentPage: number }
    | { type: 'alarms_per_page'; setAlarmsPerPage: number };

  function reducer(state: MonitoringState, action: Action): MonitoringState {
    switch (action.type) {
      case 'visibility_control_panel': {
        return {
          ...state,
          isPanelVisible: action.setPanel,
        };
      }
      case 'is_active': {
        return {
          ...state,
          isActive: action.setActive,
        };
      }
      case 'set_current_page': {
        return {
          ...state,
          currentPage: action.setCurrentPage,
        };
      }
      case 'alarms_per_page': {
        return {
          ...state,
          alarmsPerPage: action.setAlarmsPerPage,
        };
      }
      default:
        return state;
    }
  }

  const initialState: MonitoringState = {
    isPanelVisible: false,
    isActive: 1,
    currentPage: 1,
    alarmsPerPage: 7,
  };

  const [state, dispatch]: [MonitoringState, Dispatch<Action>] = useReducer(reducer, initialState);

  return [state, dispatch] as const;
}

export default useMonitoringReducer;
