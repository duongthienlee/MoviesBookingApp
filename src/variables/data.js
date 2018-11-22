import moment from 'moment';

// Hardcode days for the sake of simplicity
export const days = ['Today', 'Tomorrow',
    moment().add(2, 'days').format(' MMM D'),
    moment().add(3, 'days').format(' MMM D'),
    moment().add(4, 'days').format(' MMM D'),
    moment().add(5, 'days').format(' MMM D'),
    moment().add(6, 'days').format(' MMM D'),
    moment().add(7, 'days').format(' MMM D'),
    moment().add(8, 'days').format(' MMM D'),
    moment().add(9, 'days').format(' MMM D')
];
// Same for times
export const times = ['9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM'];

