import moment from 'moment';
import { useContext } from 'react';
import { ListDataContext } from '../common/list-context';

export function getDataForCurrentWeek(){

    const {listData, setListData, saveListData} = useContext(ListDataContext);

    const todaysDate =  moment().format('YYYY-MM-DD');
    const sunDate = moment(todaysDate).startOf('week').format('YYYY-MM-DD');
    const monDate = moment(sunDate).add(1, 'days').format('YYYY-MM-DD');
    const tueDate = moment(monDate).add(1, 'days').format('YYYY-MM-DD');
    const wedDate = moment(tueDate).add(1, 'days').format('YYYY-MM-DD');
    const thuDate = moment(wedDate).add(1, 'days').format('YYYY-MM-DD');
    const friDate = moment(thuDate).add(1, 'days').format('YYYY-MM-DD');
    const satDate = moment(friDate).add(1, 'days').format('YYYY-MM-DD');
    var weeksCompletedData = [0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < listData.length; i++) {
        for (var j = 0; j < listData[i].completed.length; j++) {

            const dateCompleted = moment(listData[i].completed[j].dateCompleted).format('YYYY-MM-DD');
            if(dateCompleted == sunDate) { weeksCompletedData[0] += 1};
            if(dateCompleted == monDate) { weeksCompletedData[1] += 1};
            if(dateCompleted == tueDate) { weeksCompletedData[2] += 1};
            if(dateCompleted == wedDate) { weeksCompletedData[3] += 1};
            if(dateCompleted == thuDate) { weeksCompletedData[4] += 1};
            if(dateCompleted == friDate) { weeksCompletedData[5] += 1};
            if(dateCompleted == satDate) { weeksCompletedData[6] += 1};
        }
    }

    return weeksCompletedData;
}
