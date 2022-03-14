import React from 'react';

import { TasksContext } from 'providers';

export const useTasks = () => React.useContext(TasksContext);
