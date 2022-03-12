import React from 'react';

import { TasksContext } from 'providers';

export const useTasksProvider = () => React.useContext(TasksContext);
