import {Select} from "./select/select";
import './select/styles.scss';

const monthSelect = new Select('#month', {
  name: 'Month',
  // selectedId: 4,
  data: [
    {id: 1, value: 'January'},
    {id: 2, value: 'February'},
    {id: 3, value: 'March'},
    {id: 4, value: 'April'},
    {id: 5, value: 'May'},
    {id: 6, value: 'June'},
    {id: 7, value: 'July'},
    {id: 8, value: 'August'},
    {id: 9, value: 'September'},
    {id: 10, value: 'October'},
    {id: 11, value: 'November'},
    {id: 12, value: 'December'},
  ]
});

const yearSelect = new Select('#year', {
  name: 'Year',
  // selectedId: 4,
  data: [
    {id: 1, value: '2011'},
    {id: 2, value: '2012'},
    {id: 3, value: '2013'},
    {id: 4, value: '2014'},
    {id: 5, value: '2015'},
    {id: 6, value: '2016'},
  ]
});
